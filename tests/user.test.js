const supertest = require("supertest");
const app = require("../index");
const mongoose = require("mongoose");

let request = supertest(app);

let mainUser = {
    name: "Andrey Wilmsen",
    email: "andreywilmsendepaula@gmail.com",
    password: "123456"
};

beforeAll(() => {
    return request
        .post("/register")
        .send(mainUser)
        .then((res) => { })
        .catch((err) => {
            console.log(err);
        });
});

describe("Servidor", () => {
    it("Deve se conectar ao servidor na porta 8080", async function () {
        return request
            .get("/")
            .then((res) => {
                let response = res.statusCode;
                expect(response).toEqual(200);
            })
            .catch((err) => {
                throw err;
            });
    });
});

describe("Cadastro de usuário", () => {
    it("Deve cadastrar usuário no banco de dados", async () => {
        let time = Date.now();
        let email = `${time}@gmail.com`;
        let user = { name: "Andrey", email, password: "123456" };

        return request
            .post("/register")
            .send(user)
            .then((res) => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.email).toEqual(email);
            })
            .catch((err) => {
                throw err;
            });
    });

    it("Deve impedir que o usuário insira dados vazios", async () => {
        let user = { name: "", email: "", password: "" };
        return request
            .post("/register")
            .send(user)
            .then((res) => {
                expect(res.statusCode).toEqual(400);
                expect(res.body.success).toEqual(false);
            })
            .catch((err) => {
                throw err;
            });
    });

    it("Deve impedir que o usuário cadastre o email já existente no banco de dados", async () => {
        let user = { name: "Andrey", email: "andreywilmsendepaula@gmail.com", password: "123456" };
        return request
            .post("/register")
            .send(user)
            .then((res) => {
                expect(res.statusCode).toEqual(400);
                expect(res.body.message).toEqual("Email já cadastrado");
            })
            .catch((err) => {
                throw err;
            });
    })
});

describe("Autenticação", () => {
    it("Deve me retornar um token ao logar", async () => {
        return request
            .post("/auth")
            .send({ email: mainUser.email, password: mainUser.password })
            .then((res) => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.token).toBeDefined();
            })
            .catch((err) => {
                throw err;
            });
    });

    it("Deve impedir que um usuário não cadastrado se logue", async () => {
        let user = { email: "usuarionaocadastrado@gmail.com", password: "123456" };

        return request
            .post("/auth")
            .send(user)
            .then((res) => {
                expect(res.statusCode).toEqual(403);
                expect(res.body.errors.email).toEqual("E-mail não cadastrado");
            })
            .catch((err) => {
                throw err;
            });
    });

    it("Deve impedir que um usuário se logue com uma senha errada", async () => {
        let user = { email: mainUser.email, password: "1234567" };

        return request
            .post("/auth")
            .send(user)
            .then((res) => {
                expect(res.statusCode).toEqual(403);
                expect(res.body.errors.password).toEqual("Senha incorreta");
            })
            .catch((err) => {
                throw err;
            });
    });
});

afterAll(async () => {
    return request
        .delete(`/user/${mainUser.email}`)
        .then(async (res) => {
            await mongoose.connection.close();
        })
        .catch((err) => {
            throw err;
        });
});

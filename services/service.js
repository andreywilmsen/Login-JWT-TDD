require('dotenv').config();
let User = require('../model/User');
let db = require('../db/conn')
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let services = {
    userRegister: async (req, res) => {

        // impede que insira vazio
        if (req.body.name === "" || req.body.email === "" || req.body.password === "") return { success: false };

        let userFinded = await User.findOne({ email: req.body.email });
        // impede que insira o mesmo email
        if (userFinded) return { userFinded: true, message: 'Email já cadastrado' };

        // gera criptografia da senha
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(req.body.password, salt)

        let user = { name: req.body.name, email: req.body.email, password: hash };

        // cadastra usuário
        try {
            let response = await User.create(user);
            return response;
        } catch (err) {
            throw err;
        }
    }, deleteUser: async (req, res) => { // rota utilizada em desenvolvimento para deletar usuário criado na suite de teste
        await User.deleteOne({ email: req.params.email });
        return { status: 200 };
    }, authRegister: async (req, res) => {
        let { email, password } = req.body;

        //  procura email de usuario na base de dados
        let userFinded = await User.findOne({ email: email });

        // caso não ache o usuário, retorna como e-mail não cadastrado
        if (!userFinded) {
            return { success: false, errors: { email: "E-mail não cadastrado" } };
        } else {

            // verifica se a senha passada é igual a senha criptografada na base de dados;
            let isPasswordRight = await bcrypt.compare(password, userFinded.password);

            // caso não seja, retorna o password incorreto
            if (!isPasswordRight) {
                return { success: false, errors: { password: "Senha incorreta" } };
            } else {

                // caso tenha passado nas verificações anteriores, retorna o token criado para o usuário
                let token = jwt.sign({ email, name: userFinded.name, _id: userFinded._id }, process.env.TOKEN_SECRET);
                return { success: true, token };
            }
        }
    }

}

module.exports = services;

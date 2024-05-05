let services = require('../services/service');

let userController = {
    register: async (req, res) => {

        try {
            let response = await services.userRegister(req, res);
            // Caso de erro no registro de usuário, retorna com o status 400 e success false
            if (response.success === false) return res.status(400).send({ success: false });

            // caso retorne um usuário que já está registrado, retorna o status 400, success false e a mensagem de e-mail já cadastrado;
            if (response.userFinded === true) return res.status(400).send({ success: false, message: 'Email já cadastrado' });
            return res.status(200).send({ success: true, email: response.email });
        } catch (err) {
            return res.status(500).json({ success: false, message: "Erro durante o registro de usuário." });
        }

    }, deleteUser: async (req, res) => { // rota utilizada em desenvolvimento para deletar usuário criado na suite de teste
        try {
            let response = await services.deleteUser(req, res);
            if (response.status === 200) return res.status(200).json({ success: true });
        } catch (err) {
            return res.status(500).json({ success: false, message: "Erro ao deletar o usuário de teste." })
        }
    }, auth: async (req, res) => {
        try {
            let response = await services.authRegister(req, res);
            // Se a resposta não tiver o status de success, entra nos ifs para validar o que deu errado
            if (!response.success) {
                // Caso o erro gerado seja por conta do e-mail, dispara a mensagem de E-mail não cadastrado
                if (response.errors.email === "E-mail não cadastrado") {
                    return res.status(403).json({ success: false, errors: { email: "E-mail não cadastrado" } });
                }
                // Caso o erro gerado seja por conta do password, dispara a mensagem de Senha incorreta
                else {
                    return res.status(403).json({ success: false, errors: { password: "Senha incorreta" } });
                }
            }
            // Caso a response seja true para success, dispara o status 200 com o body contendo success true e o token gerado
            else {
                return res.status(200).json({ success: true, token: response.token });
            }
        } catch (err) {
            return res.status(500).json({ success: false, message: "Erro de autenticação." });
        }
    }


}

module.exports = userController;

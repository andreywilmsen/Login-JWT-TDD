📝 Documentação do Projeto:

Este projeto é uma API desenvolvida utilizando Node.js e Express para gerenciar usuários e autenticação. O principal objetivo é fornecer uma solução escalável e robusta para registro de usuários, autenticação e exclusão de contas.

🏗️ Estrutura do Projeto:

index.js: Arquivo principal do servidor.
controller/userController.js: Controlador para gerenciar usuários e autenticação.
services/service.js: Módulo com funções de negócio para registro e autenticação de usuários.
model/User.js: Definição do modelo de usuário utilizando Mongoose.
test/: Pasta com testes automatizados.
db/conn.js: Configuração e conexão com MongoDB.
server.js: Inicialização do servidor.

🛣️ **Endpoints da API**

#### Registro de Usuário
- **Método:** `POST`
- **URL:** `/register`
- **Parâmetros de Requisição:**
  - `email` (string): E-mail do usuário a ser registrado.
  - `password` (string): Senha do usuário.
- **Exemplo de Requisição:**
  ```json
  {
      "email": "exemplo@email.com",
      "password": "senha123"
  }
Exemplo de Resposta (sucesso):
json
Copy code
{
    "success": true,
    "email": "exemplo@email.com"
}
Exemplo de Resposta (erro - e-mail já cadastrado):
json
Copy code
{
    "success": false,
    "message": "Email já cadastrado"
}
Códigos de Resposta:
200: Registro bem-sucedido.
400: Requisição inválida ou e-mail já cadastrado.
500: Erro interno do servidor.
Autenticação
Método: POST
URL: /auth
Parâmetros de Requisição:
email (string): E-mail do usuário para autenticação.
password (string): Senha do usuário.
Exemplo de Requisição:
json
Copy code
{
    "email": "exemplo@email.com",
    "password": "senha123"
}
Exemplo de Resposta (sucesso):
json
Copy code
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAbWFpbC5jb20ifQ.MCt-CV54-c4-YT-6q9v6w57tVi4rpaA3hOS6SdZ8U5c"
}
Exemplo de Resposta (erro - e-mail não cadastrado):
json
Copy code
{
    "success": false,
    "errors": {
        "email": "E-mail não cadastrado"
    }
}
Exemplo de Resposta (erro - senha incorreta):
json
Copy code
{
    "success": false,
    "errors": {
        "password": "Senha incorreta"
    }
}
Códigos de Resposta:
200: Autenticação bem-sucedida.
403: Credenciais inválidas.
500: Erro interno do servidor.
Exclusão de Usuário
Método: DELETE
URL: /user/:email
Parâmetros de Requisição:
email (string): E-mail do usuário a ser excluído.
Exemplo de Requisição:
sql
Copy code
DELETE /user/exemplo@email.com
Exemplo de Resposta (sucesso):
json
Copy code
{
    "success": true
}
Códigos de Resposta:
200: Exclusão bem-sucedida.
500: Erro interno do servidor.

⚙️ Funcionalidades Principais:

Registro de Usuário
Autenticação
Exclusão de Usuário

🧪 Testes Automatizados:

O projeto segue os princípios do TDD (Desenvolvimento Orientado a Testes), garantindo a integridade do código e facilitando a manutenção futura.

🛠️ Desenvolvimento Orientado a Testes (TDD):

Este projeto foi desenvolvido com a metodologia do TDD, enfatizando a escrita de testes automatizados antes mesmo da implementação do código funcional. Isso resulta em um código mais confiável, robusto e fácil de manter, garantindo:
- Testes Antes do Código: Definição do comportamento esperado antes da implementação.
- Testes Incrementais: Foco em pequenos incrementos de código testável.
- Refatoração Segura: Confiança na refatoração de código graças aos testes automatizados.
- Código Modular e Testável: Prática resulta em código mais limpo e modular.

▶️ Execução dos Testes:

Para executar os testes automatizados, utilize o comando:
- npm run test
  
Certifique-se de ter todas as dependências do projeto instaladas antes de executar os testes.

🤝 Contribuições:

Contribuições são bem-vindas! Siga a abordagem do TDD ao adicionar funcionalidades ou correções de bugs. Isso facilita a revisão e aceitação de pull requests.

👨‍💻 Desenvolvedor: Andrey Wilmsen de Paula 

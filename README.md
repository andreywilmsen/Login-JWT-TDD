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

⚙️ Funcionalidades Principais:

Registro de Usuário
Autenticação
Exclusão de Usuário

🧪 Testes Automatizados:

O projeto segue os princípios do TDD (Desenvolvimento Orientado a Testes), garantindo a integridade do código e facilitando a manutenção futura.

🛠️ Desenvolvimento Orientado a Testes (TDD):

Este projeto foi desenvolvido com a metodologia do TDD, enfatizando a escrita de testes automatizados antes mesmo da implementação do código funcional. Isso resulta em um código mais confiável, robusto e fácil de manter.

Testes Antes do Código: Definição do comportamento esperado antes da implementação.
Testes Incrementais: Foco em pequenos incrementos de código testável.
Refatoração Segura: Confiança na refatoração de código graças aos testes automatizados.
Código Modular e Testável: Prática resulta em código mais limpo e modular.

▶️ Execução dos Testes:

Para executar os testes automatizados, utilize o comando:
- npm run test
- 
Certifique-se de ter todas as dependências do projeto instaladas antes de executar os testes.

🤝 Contribuições:

Contribuições são bem-vindas! Siga a abordagem do TDD ao adicionar funcionalidades ou correções de bugs. Isso facilita a revisão e aceitação de pull requests.

👨‍💻 Desenvolvedor: Andrey Wilmsen de Paula 

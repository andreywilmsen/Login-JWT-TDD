const app = require('./index');
const dotenv = require('dotenv');

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});


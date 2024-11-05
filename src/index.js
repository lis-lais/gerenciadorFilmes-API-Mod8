const express = require('express');
const filmesRoutes = require('./routes/filmesRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Bem-vindo ao sistema de gerenciamento de filmes.");
});

app.use('/filmes', filmesRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

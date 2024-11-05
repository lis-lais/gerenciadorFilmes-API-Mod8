const {
    adicionarFilmesService,
    listarFilmesService,
    atualizarFilmesService,
    removerFilmesService,
    buscarFilmesService,
} = require('../services/filmesServices');

function adicionarFilmes(req, res) {
    const { titulo, diretor, ano, genero } = req.body;
    const resultado = adicionarFilmesService({ titulo, diretor, ano, genero });

    if (resultado.sucesso) {
        res.status(201).json(resultado.filme);
    } else {
        res.status(400).json({ message: resultado.messagem });
    }
}

function listarFilmes(req, res) {
    const resultado = listarFilmesService();

    if (resultado.sucesso) {
        res.json(resultado.filme);
    } else {
        res.status(500).json({ message: resultado.messagem });
    }
}

function atualizarFilmes(req, res) {
    const id = req.params.id;
    const { titulo, diretor, ano, genero } = req.body;
    const resultado = atualizarFilmesService(id, { titulo, diretor, ano, genero });

    if (resultado.sucesso) {
        res.json(resultado.filme);
    } else {
        res.status(404).json({ message: resultado.messagem });
    }
}

function removerFilmes(req, res) {
    const id = req.params.id;
    const resultado = removerFilmesService(id);

    if (resultado.sucesso) {
        res.status(204).end();
    } else {
        res.status(404).json({ message: resultado.messagem });
    }
}

function buscarFilmes(req, res) {
    const { titulo, diretor, ano, genero } = req.query;
    const resultado = buscarFilmesService({ titulo, diretor, ano, genero });

    if (resultado.sucesso) {
        res.json(resultado.filme);
    } else {
        res.status(404).json({ message: resultado.messagem });
    }
}

module.exports = { adicionarFilmes, listarFilmes, atualizarFilmes, removerFilmes, buscarFilmes };

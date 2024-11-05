const {
    adicionarFilmesRepo,
    listarFilmesRepo,
    atualizarFilmesRepo,
    removerFilmesRepo,
    buscarFilmesRepo,
} = require('../repositories/filmesRepository');

function adicionarFilmesService({ titulo, diretor, ano, genero }) {
    if (!titulo || !diretor || !ano || !genero) {
        return { sucesso: false, messagem: 'Todos os campos são obrigatórios.' };
    }

    const novoFilme = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        diretor: diretor.trim(),
        ano: parseInt(ano),
        genero: genero.trim(),
    };

    adicionarFilmesRepo(novoFilme);
    return { sucesso: true, filme: novoFilme };
}

function listarFilmesService() {
    return listarFilmesRepo();
}

function atualizarFilmesService(id, { titulo, diretor, ano, genero }) {
    const filme = encontrarPorIdo(id);
    if (!filme) {
        return { sucesso: false, messagem: 'Filme não encontrado.' };
    }

    const filmeAtualizado = {
        id,
        titulo: titulo || filme.titulo,
        diretor: diretor || filme.diretor,
        ano: ano || filme.ano,
        genero: genero || filme.genero,
    }

    atualizarFilmesRepo(id, filmeAtualizado);
    return { sucesso: true, filme: filmeAtualizado };
}

function removerFilmesService(id) {
    const filme = encontrarPorId(id);
    if (!filme) {
        return { sucesso: false, messagem: 'Filme não encontrado.' };
    }

    removerFilmesRepo(id);
    return { sucesso: true };
}

function buscarFilmesService({ titulo, diretor, ano, genero }) {
    const filmes = buscarFilmesRepo({ titulo, diretor, ano, genero });
    if (filmes.length === 0) {
        return { sucesso: false, messagem: 'Filme(s) não encontrado(s).' };
    }

    return { sucesso: true, filme: filmes };
}

module.exports = {
    adicionarFilmesService,
    listarFilmesService,
    atualizarFilmesService,
    removerFilmesService,
    buscarFilmesService,
}

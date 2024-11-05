let filmes = [];

function adicionarFilmesRepo(filme) {
    filmes.push(filme);
}

function listarFilmesRepo() {
    return filmes;
}

function atualizarFilmesRepo(id, filmeAtualizado) {
    const index = filmes.findIndex(filme => filme.id === id);
    if (index !== -1) {
        filmes[index] = filmeAtualizado;
        return { sucesso: true, mensagem: 'Filme atualizado com sucesso.' };
    } else {
        return { sucesso: false, mensagem: 'Filme não encontrado.' };
    }
}

function removerFilmesRepo(id) {
    const index = filmes.findIndex(filme => filme.id === id);
    if (index !== -1) {
        filmes.splice(index, 1);
        return { sucesso: true, mensagem: 'Filme removido com sucesso.' };
    } else {
        return { sucesso: false, mensagem: 'Filme não encontrado.' };
    }
}

function buscarFilmesRepo({ titulo, diretor, ano, genero }) {
    const filmesEncontrados = filmes.filter(filme => {
        if (titulo && filme.titulo.toLowerCase().includes(titulo.toLowerCase())) return true;
        if (diretor && filme.diretor.toLowerCase().includes(diretor.toLowerCase())) return true;
        if (ano && filme.ano.toString().includes(ano)) return true;
        if (genero && filme.genero.toLowerCase().includes(genero.toLowerCase())) return true;
        return false;
    });

    return { sucesso: true, filme: filmesEncontrados };
}

module.exports = {
    adicionarFilmesRepo,
    listarFilmesRepo,
    atualizarFilmesRepo,
    removerFilmesRepo,
    buscarFilmesRepo,
};

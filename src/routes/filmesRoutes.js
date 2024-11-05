const express = require('express');
const router = express.Router();
const {
    adicionarFilmes,
    listarFilmes,
    atualizarFilmes,
    removerFilmes,
    buscarFilmes,
} = require('../controllers/filmesController');

router.post('/', adicionarFilmes);
router.get('/', listarFilmes);
router.put('/:id', atualizarFilmes);
router.delete('/:id', removerFilmes);
router.get('/buscar', buscarFilmes);

module.exports = router;

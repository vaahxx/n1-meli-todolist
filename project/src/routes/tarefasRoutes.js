const express = require('express'); 
const router = express.Router();
const controller = require('../controller/tarefasController');

router.get('/', controller.getTarefas);
router.get('/concluidos/filtrar', controller.getTarefasConcluidas);
router.get('/:nome/buscar', controller.getTarefasByName);
router.get('/:id', controller.getTarefasById);

module.exports = router;
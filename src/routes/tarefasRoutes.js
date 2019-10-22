const express = require('express'); 
const router = express.Router();
const controller = require('../controller/tarefasController');

router.get('/tarefas/', controller.getTarefas);
router.get('/tarefas/:id', controller.getTarefasById);

module.exports = router;
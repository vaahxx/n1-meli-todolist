// importa a camada model
const tarefasJson = require('../model/tarefasModel.json');

exports.getTarefas = (req, res) => {
    res.status(200).send(tarefasJson);
};

exports.getTarefasById = (req, res) => {
    // pega o valor do ID na url da request
    const idURL = req.params.id;
    const tarefaUnica = tarefasJson.find(e => e.id == idURL);
    res.status(200).send(tarefaUnica);
};
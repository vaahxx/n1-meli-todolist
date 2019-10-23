// importa o express e o instancia, na constante app
const express = require('express');
const app = express();
// determina o numero da porta
const port = 3000;

app.listen(port, function (){
    console.log(`O app está rodando na porta ${port}`);
});

// importa a rota de tarefas
const tarefasRoutes = require('./routes/tarefasRoutes');

app.use('/tarefas', tarefasRoutes);

module.exports = app;
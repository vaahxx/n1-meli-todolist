# n1-meli-todolist - projeto API da {reprograma}

```
API Restful de uma to-do list
projeto prático do bootcamp back-end {reprograma} 
feito em node.js usando express.js
objetivo: manipular requisições do tipo GET e retornar saídas em JSON
```
### Instruções ###

##### Requisitos Obrigatórios #####
Você deverá desenvolver uma API a fim de disponibilizar uma lista de tarefas a ser compartilhada entre os funcionários de uma empresa.
Os dados da tarefa que deverão aparecer, são:
1. Descrição da tarefa
2. Data de Inclusão 
3. Check para verificar se o item já foi concluído.

O projeto deverá conter as seguintes rotas/endpoints com os respectivos retornos:  
**1.	GET /tarefas**  
Retornar a lista de tarefas  
**2.	GET /tarefas/:id**  
Retornar somente a tarefa encontrada por id

##### Requisitos Opcionais #####
- [x] Incluir o nome do colaborador que realizou a tarefa
- [x] Mostrar somente itens concluídos
**GET /tarefas/concluidos/filtrar**
- [x] Buscar tarefas somente de um determinado colaborador
**GET /tarefas/:nome/buscar**

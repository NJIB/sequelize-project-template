// ***************************************************************
// api-routes.js - routes for displaying and saving data to the db
// ****************************************************************

// Dependencies
// =============================================================
const db = require('../models');
// db.Todo.findAll

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the todos
  app.get('/api/todos', async (req, res) => {
    const results = await db.Todo.findAll({});
    res.json(results);
  });

  // POST route for saving a new todo.
  // We can create a todo using the data on req.body
  app.post('/api/todos', async (req, res) => {
    const result = await db.Todo.create({
      text: req.body.text,
      complete: req.body.complete,
    });
    console.log('Todo Data:');
    console.table(req.body);

    res.json({ id: result.insertId });
  });

  // DELETE route for deleting todos.
  // We can access the ID of the todo to delete in
  // req.params.id
  app.delete('/api/todos/:id', async (req, res) => {
    const result = await db.Todo.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.json(result);
  });

  // PUT route for updating todos.
  // We can access the updated todo in req.body
  app.put('/api/todos', async (req, res) => {
   
    // Modern syntax.  Equivalent of doing const id = req.body.id
    const {id, text, complete} = req.body;

    const result = await db.Todo.update(
      {
        //Equivalent of doing text: text
        text,
        complete,
      },
      {
        where: {id},
      }
    );
    res.json(result);
  });
};

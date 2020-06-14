//
// ToDoListController
//
// Controller for managing simple to do list in mongoDB
//
// API methods as follows:
//
//  get('/')              - return all todo items
//  post('/new')          - add a single todo to the DB
//  post('/delete/:id'    - Delete an item from the DB
//  post('/save/:id'      - Save (update) an existing item to the DB
//  get('/version')       - return version of this code

//
// deploy this to a server/container (docker)
//
// TODO:
//   - error trapping (try/catch)
//   - error return to caller.
//
var mongoose = require('mongoose');
import DBConfig from '../db/dbConfig'

//Connect to the mongo database
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(DBConfig.db)
  .then(() => {
    console.log('connected to mondodb');
  })
  .catch(err => {
    console.log(err);
  });

//Create a schema for the DB.
var todoSchema = new mongoose.Schema({
  Text: String,
  Description: String
});

//Add model to mongodb
var Todo = mongoose.model('todo', todoSchema);

module.exports = function (app) {

  app.get('/', (req, res) => {
    console.log("todoServer - Get");
   
    Todo.find({}, function (err, data) {
      if (err) {
        res.send('ERROR: GET Error')
      };
    
      res.json(data);
    })
  });

  app.get('/todo/:id', (req, res) => {
    console.log("todoServer - Get by id", req.params.id);
   
    Todo.findById(req.params.id, (err, data) => {
      if (err) {
        res.send('ERROR: GET Error')
      };
    
      res.json(data);
    })
  });

  // Create new ToDo Item
  app.post('/new', (req, res) => {
    console.log("todoServer - Posting", req.body);

    var newTodo = Todo(req.body).save(function (err, data) {
      if (err) {
        res.send('ERROR: POST Error')
      };
      
      res.json(data);
    })
  });

  //Delete ToDo Item - delete by id
  app.post('/delete/:id', (req, res) => {
    console.log("todoServer - Delete", req.params.id);

    //Todo.find({ item: req.params.name.replace(/\-/g, " ") }).deleteOne(function (err, data) {
      Todo.find({ "_id": req.params.id}).deleteOne(function (err, data) {
      if (err) {
        res.send('ERROR: on server');
      };

      res.json(data);
    })
  });
  
  //SAVE todo item
  app.post('/save/:id', (req, res) => {
    console.log("todoServer - Save", req.params.id,  req.body.Text);

    Todo.findById(req.params.id, (err, todo) => {
      todo.Text = req.body.Text,
      todo.save(function(err, data) {
        if (err) {
          res.send('ERROR: on server');
        };
  
        res.json(data);
      })
    })
  })
  //
  app.get('/version', (req, res) => {
    res.send('todoListController: Version v1.0.0.0');
  });
}

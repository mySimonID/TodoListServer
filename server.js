const express = require('express');
const cors = require('cors');

var bodyParser = require('body-parser');
const todoListController = require('./controllers/todoListController');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

// The Controller will control the routes
todoListController(app);

//
// The DB server will be deployed to Docker, so set the host:0.0.0.0
const PORT=8080;
const HOST='0.0.0.0';

app.listen(PORT, HOST);
console.log(`running todoListServer on http://${HOST}:${PORT}`);






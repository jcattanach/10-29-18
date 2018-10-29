const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

let tasks = []

app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/task', function(req,res){

  let taskName = req.body.taskName
  let priority = req.body.priority

  let task = { taskName : taskName,
               priority : priority }

  tasks.push(task)

  res.send('Task Added')
})

app.get('/task', function(req,res){


  res.json(tasks)
})

app.listen(port,function(){
  console.log('server is up')
})

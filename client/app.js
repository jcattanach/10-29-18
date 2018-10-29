let btnSubmit = document.querySelector('#btnSubmit')
let btnShowTasks = document.querySelector('#btnShowTasks')
let textboxEnterTask = document.querySelector('#textboxEnterTask')
let textboxEnterPriority = document.querySelector('#textboxEnterPriority')
let taskListElement = document.querySelector('#taskListElement')



function displayTasks(list){
  let liItems = list.map(function(listItem){
    return `<li><h4>${listItem.taskName}</h4><p>${listItem.priority}</p></li>`
  })
  taskListElement.insertAdjacentHTML('beforeend', liItems.join(''))
}

function showTask(){
  fetch("http://localhost:3000/task")
.then(function(response){
  return response.json()
})
.then(function(json){
  displayTasks(json)
})
}

btnShowTasks.addEventListener('click',function(){
  showTask()
})

function postToServer(taskName, priority){
  fetch('http://localhost:3000/task',{
    method: 'post',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({ taskName : taskName,
    priority : priority })
  })
}

btnSubmit.addEventListener('click', function(){
  taskName = textboxEnterTask.value
  priority = textboxEnterPriority.value

  postToServer(taskName,priority)
})

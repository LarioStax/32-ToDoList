$(document).ready(function () {
  $.getJSON("/api/todos")
    .then(visualiseToDos)
    .catch(function(err) {
      console.log(err);
    });

  $("#toDoInput").keypress(function(event) {
    if(event.which == 13) {
      createToDo();
    }
  })
})

function visualiseToDos(todos) {
  //add ToDos to page here
  todos.forEach( todo => {
    addToDo(todo);
  })
}

function addToDo(todo) {
  let newToDo = $(`<li class="task">${todo.name}</li>`)
  if (todo.completed) {
    newToDo.addClass("done");
  }
  $("#toDoList").append(newToDo);
}

function createToDo() {
  let userInput = $("#toDoInput").val();
  //send post request to create new todo
  $.post("/api/todos", {name: userInput})
  .then(function(createdToDo) {
    $("#toDoInput").val("");
    addToDo(createdToDo);
  })
  .catch(function(err) {
    console.log(err);
  })
}
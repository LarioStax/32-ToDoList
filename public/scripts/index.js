$(document).ready(function () {
  $.getJSON("/api/todos")
    .then(function (data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log(err);
    })
})

function visualiseToDos(todos) {
  //add ToDos to page here
  todos.forEach( todo => {
    let newToDo = $(`<li class="task">${todo.name}</li>`)
    if (todo.completed) {
      newToDo.addClass("done");
    }
    $(".toDoList").append(newToDo);
  })
}
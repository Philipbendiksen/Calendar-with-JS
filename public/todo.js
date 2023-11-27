document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal-popUp");
  const btnSave = document.getElementById("btnSave");
  const item = document.getElementById("listItem");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  btnSave.addEventListener("click", function () {
    const title = document.getElementById("todoTitle").value;
    const place = document.getElementById("todoPlace").value;
    const date = document.getElementById("todoDate").value;
    const notes = document.getElementById("todoNotes").value;

    const newTodo = {
      title: title,
      place: place,
      date: date,
      notes: notes,
    };

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));

    updateUI();
  });

  function updateUI() {
    const todoList = document.getElementById("toDoContainer");

    //todoList.innerHTML = "";

    todos.forEach(function (todos) {
      const listItem = document.createElement("li");
      listItem.textContent = `${todos.title} - ${todos.date}`;
      todoList.appendChild(listItem);
    });
  }

  updateUI();
});

/*
<div class="toDoModal hide" id="modal-popUp">
  <div class="modalContainer">
    <span class="material-symbols-outlined" id="btnClose-popUp">
      close
    </span>
    <input
      type="text"
      id="title"
      placeholder="title"
      data-cy="todo-title-input"
    />
    <input type="text" id="title" placeholder="place" />
    <input
      type="date"
      id="title"
      placeholder="date"
      data-cy="todo-date-input"
    />
    <input type="text" id="title" placeholder="notes" />
    <button data-cy="save-todo-button">SAVE</button>
  </div>
</div>;
*/

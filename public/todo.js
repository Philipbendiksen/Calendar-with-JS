function initTodos() {
  updateUI();
  //const modal = document.getElementById("modal-popUp");
  const btnSave = document.getElementById("btnSave");
  //const item = document.getElementById("listItem");
  btnSave.addEventListener("click", addTodo);
}

function addTodo() {
  // Hämta värden från input-fälten för att skapa en ny todo
  const title = document.getElementById("todoTitle").value;
  const place = document.getElementById("todoPlace").value;
  const date = document.getElementById("todoDate").value;
  const notes = document.getElementById("todoNotes").value;
  console.log("Save button clicked");

  if (title === "" || date === "") {
    title.placeholder == "Fyll i något...";
  } else {
    //skapa en ny todo-objekt
    const newTodo = {
      title: title,
      place: place,
      date: date,
      notes: notes,
    };
    // lägg tilli arrayen
    todos.push(newTodo);
    // spara den uppdaterade
    localStorage.setItem("todos", JSON.stringify(todos));

    updateUI();
  }
}

function deleteTodoItem(todoItem) {
  const title = `Vill du verkligen ta bort ${todoItem.title} ? `;
  confirmationModal(title, "Ja", "Avbryt", deleteItem);
  function deleteItem() {
    const index = todos.indexOf(todoItem);

    todos.splice(index, 1);

    localStorage.setItem("todos", JSON.stringify(todos));

    updateUI();
  }
}

function showTodayEvents() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  const todayEvents = todos.filter((todos) => {
    const todoDate = new Date(todos.date);
    return (
      todoDate.getFullYear() === currentYear &&
      todoDate.getMonth() === currentMonth &&
      todoDate.getDate() === currentDay
    );
  });
  const todayList = document.getElementById("todayEvents");

  if (todayList) {
    todayList.innerHTML = "<strong>Dagens händelser:</strong>";

    todayEvents.forEach((todoItem) => {
      const listItem = document.createElement("div");
      listItem.innerHTML = `<strong>${todoItem.title}</strong> - ${todoItem.date}`;
      todayList.appendChild(listItem);
    });
  } else {
  }
}

const newEventModal = document.getElementById("modal-popUp");

function openModal(date) {
  clicked = date;

  const eventForDay = events.find((e) => e.date === clicked);

  if (eventForDay) {
    console.log("event already exists");
  } else {
    newEventModal.style;
  }
}

function openEditModal(todoItem) {
  const modal = document.getElementById("modal-popUp");
  const btnSave = document.getElementById("btnSave");

  document.getElementById("todoTitle").value = todoItem.title;
  document.getElementById("todoPlace").value = todoItem.place;
  document.getElementById("todoDate").value = todoItem.date;
  document.getElementById("todoNotes").value = todoItem.notes;

  btnSave.removeEventListener("click", addTodo);
  btnSave.addEventListener("click", function () {
    updateTodo(todoItem);
  });

  modal.style.display = "block";
}

function updateTodo(todoItem) {
  const updatedTitle = document.getElementById("todoTitle").value;
  const updatedPlace = document.getElementById("todoPlace").value;
  const updatedDate = document.getElementById("todoDate").value;
  const updatedNotes = document.getElementById("todoNotes").value;

  todoItem.title = updatedTitle;
  todoItem.place = updatedPlace;
  todoItem.date = updatedDate;
  todoItem.notes = updatedNotes;

  localStorage.setItem("todos", JSON.stringify(todos));

  closeEditModal();
  updateUI();
}

function closeEditModal() {
  const modal = document.getElementById("modal-popUp");
  modal.style.display = "none";
}

function updateUI() {
  const todoList = document.getElementById("itemsContainer");
  todoList.innerHTML = "";

  todos.forEach((todoItem) => {
    console.log("Adding todoItem to UI:", todoItem);
    const listItem = document.createElement("div");
    const toDoIcons = document.createElement("div");
    listItem.classList = "toDoItems";
    toDoIcons.classList = "toDoIcons";

    const deleteIcon = document.createElement("span");
    deleteIcon.className = "material-symbols-outlined";
    deleteIcon.dataset.cy = "delete-todo-button";
    deleteIcon.innerText = "delete";

    deleteIcon.addEventListener("click", function () {
      deleteTodoItem(todoItem);
    });

    const editIcon = document.createElement("span");
    editIcon.className = "material-symbols-outlined";
    editIcon.dataset.cy = "edit-todo-button";
    editIcon.innerText = "edit";

    editIcon.addEventListener("click", function () {
      openEditModal(todoItem);
    });

    //listItem.innerHTML = `<strong>${todoItem.title}</strong> - ${todoItem.date}`;

    const todoText = document.createElement("div");
    todoText.classList = "toDoTitles";
    todoText.innerHTML = `<strong>${todoItem.title}</strong> - ${todoItem.date}`;

    listItem.appendChild(todoText);
    toDoIcons.appendChild(deleteIcon);
    toDoIcons.appendChild(editIcon);

    todoList.appendChild(listItem);
    listItem.appendChild(toDoIcons);
  });
  //todoList.innerHTML = "";
  showTodayEvents();
}

/* DAVID

*/

/*
ATT GÖRA:
- fadad backdrop på Ny händelse

const todos: array - har redan va?
*/

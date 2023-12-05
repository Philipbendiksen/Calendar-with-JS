function initTodos() {
  updateUI();
  //const modal = document.getElementById("modal-popUp");
  // const btnSave = document.getElementById("btnSave");
  const addToDoBtn = document.getElementById("btnOpenPopUp");
  //const item = document.getElementById("listItem");
  // btnSave.addEventListener("click", addTodo);
  addToDoBtn.addEventListener("click", () => {
    const notificationModalBtn1 = document.querySelector("#notiModalBtn1");
    const modalContent = `
          <input
            type="text"
            id="todoTitle"
            placeholder="Titel"
            data-cy="todo-title-input"
          />
          <input type="text" id="todoPlace" placeholder="Plats" />
          <input
            type="date"
            id="todoDate"
            placeholder="Datum"
            data-cy="todo-date-input"
          />
          <input type="text" id="todoNotes" placeholder="Anteckningar" />
          `;
    confirmationModal("", "OK", "Avbryt", addTodo);
    notiModalTitle.innerHTML = modalContent;
    notiModalTitle.classList = "toDoInputStyle";

    notificationModalBtn1.dataset.cy = "save-todo-button";
  });
}
function clearToDoFromEmptyObjects() {
  const filteredArray = todos.filter((obj) => obj.title.trim() !== "");
  todos = filteredArray;
}

function addTodo() {
  // Hämta värden från input-fälten för att skapa en ny todo
  const title = document.getElementById("todoTitle");
  const place = document.getElementById("todoPlace");
  const date = document.getElementById("todoDate");
  const notes = document.getElementById("todoNotes");

  if (title.value === "" || date.value === "") {
    console.log("Feeel");
  } else {
    //skapa en ny todo-objekt
    const newTodo = {
      title: title.value,
      place: place.value,
      date: date.value,
      notes: notes.value,
    };
    // lägg tilli arrayen
    todos.push(newTodo);
    // spara den uppdaterade
    localStorage.setItem("todos", JSON.stringify(todos));
    title.value = "";
    place.value = "";
    date.value = "";
    notes.value = "";
    updateUI();
  }
}

function deleteTodoItem(todoItem) {
  // const title = `Vill du verkligen ta bort ${todoItem.title} ? `;
  // confirmationModal(title, "Ja", "Avbryt", deleteItem);
  // function deleteItem() {
  const index = todos.indexOf(todoItem);

  todos.splice(index, 1);

  localStorage.setItem("todos", JSON.stringify(todos));

  updateUI();
  // }
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
  const notificationModalBtn1 = document.querySelector("#notiModalBtn1");
  const modalContent = `
        <input
          type="text"
          id="todoTitle"
          placeholder="Titel"
          data-cy="todo-title-input"
        />
        <input type="text" id="todoPlace" placeholder="Plats" />
        <input
          type="date"
          id="todoDate"
          placeholder="Datum"
          data-cy="todo-date-input"
        />
        <input type="text" id="todoNotes" placeholder="Anteckningar" />
        `;
  confirmationModal("", "OK", "Avbryt", doNothing);
  notiModalTitle.innerHTML = modalContent;
  notiModalTitle.classList = "toDoInputStyle";

  document.getElementById("todoTitle").value = todoItem.title;
  document.getElementById("todoPlace").value = todoItem.place;
  document.getElementById("todoDate").value = todoItem.date;
  document.getElementById("todoNotes").value = todoItem.notes;

  // notificationModalBtn1.removeEventListener("click", addTodo);
  notificationModalBtn1.addEventListener("click", function () {
    console.log("updated item!");
    console.log(todoItem.title);
    updateTodo(todoItem);
  });
}

function updateTodo(todoItem) {
  const updatedTitle = document.getElementById("todoTitle");
  const updatedPlace = document.getElementById("todoPlace");
  const updatedDate = document.getElementById("todoDate");
  const updatedNotes = document.getElementById("todoNotes");

  todoItem.title = updatedTitle.value;
  todoItem.place = updatedPlace.value;
  todoItem.date = updatedDate.value;
  todoItem.notes = updatedNotes.value;

  localStorage.setItem("todos", JSON.stringify(todos));
  updateUI();
}

function updateUI() {
  const todoList = document.getElementById("itemsContainer");
  todoList.innerHTML = "";
  clearToDoFromEmptyObjects();

  todos.forEach((todoItem) => {
    console.log("Adding todoItem to UI:", todoItem);
    const listItem = document.createElement("li");
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

function doNothing() {}

/* DAVID

*/

/*
ATT GÖRA:
- fadad backdrop på Ny händelse

const todos: array - har redan va?
*/

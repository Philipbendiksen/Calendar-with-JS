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

function deleteTodoItem(todoItem) {
  const index = todos.indexOf(todoItem);

  todos.splice(index, 1);

  localStorage.setItem("todos", JSON.stringify(todos));

  updateUI();
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

function updateUI() {
  const todoList = document.getElementById("itemsContainer");
  todoList.innerHTML = "";

  todos.forEach((todoItem) => {
    console.log("Adding todoItem to UI:", todoItem);
    const listItem = document.createElement("div");

    const deleteIcon = document.createElement("span");
    deleteIcon.className = "material-symbols-outlined";
    deleteIcon.dataset.cy = "delete-todo-button";
    deleteIcon.innerText = "delete";

    deleteIcon.addEventListener("click", function () {
      deleteTodoItem(todoItem);
    });

    //listItem.innerHTML = `<strong>${todoItem.title}</strong> - ${todoItem.date}`;

    const todoText = document.createElement("span");
    todoText.innerHTML = `<strong>${todoItem.title}</strong> - ${todoItem.date}`;

    listItem.appendChild(deleteIcon);
    listItem.appendChild(todoText);

    todoList.appendChild(listItem);
  });
  //todoList.innerHTML = "";
  showTodayEvents();
}

/* DAVID

Hur lägger jag till class - om inte li.classList.add("") funkar?
Hur får jag bort punkterna?
Ska man använda innerHTML = ""; ???


Hur kan jag på bästa sätt komma in i den igen, för att redigera?
*/

/*
ATT GÖRA:
- fadad backdrop på Ny händelse

const todos: array - har redan va?
*/

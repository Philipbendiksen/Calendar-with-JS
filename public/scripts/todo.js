function initTodos() {
  updateUI();
  initToDoBtn();

  function initToDoBtn() {
    const showAllTodos = document.getElementById("showAllTodos");
    showAllTodos.addEventListener("click", () => {
      activeDate.textContent = "Alla todos...";
      todos.forEach((item) => {
        item.visibility = true;
        updateUI();
      });
    });
  }

  //Initiate addToDo button, using confirmationModal() to show modal with desired content.
  const addToDoBtn = document.getElementById("addToDoBtn");
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
  // Get values from input-fields to create a new todo
  const title = document.getElementById("todoTitle");
  const place = document.getElementById("todoPlace");
  const date = document.getElementById("todoDate");
  const notes = document.getElementById("todoNotes");

  if (title.value === "" || date.value === "") {
    console.log("Fel, saknar datum eller titel");
  } else {
    //Create a new todo-object
    const newTodo = {
      title: title.value,
      place: place.value,
      date: date.value,
      notes: notes.value,
      visibility: true,
    };
    // Add to array
    todos.push(newTodo);
    // Save the updated item
    localStorage.setItem("todos", JSON.stringify(todos));
    title.value = "";
    place.value = "";
    date.value = "";
    notes.value = "";
    updateUI();
    renderCalendar();
  }
}

function setVisibilityToAllItems() {
  todos.forEach((item) => {
    item.visibility = true;
  });
  updateUI();
}

function deleteTodoItem(todoItem) {
  const index = todos.indexOf(todoItem);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));

  updateUI();
  renderCalendar();
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
    if (todoItem.visibility !== false) {
      const listItem = document.createElement("li");
      const toDoIcons = document.createElement("div");
      listItem.classList = "toDoItems";
      toDoIcons.classList = "toDoIcons";

      const deleteIcon = document.createElement("span");
      deleteIcon.className = "material-symbols-outlined deleteIcon";
      deleteIcon.dataset.cy = "delete-todo-button";
      deleteIcon.innerText = "delete";

      deleteIcon.addEventListener("click", function () {
        deleteTodoItem(todoItem);
      });

      const editIcon = document.createElement("span");
      editIcon.className = "material-symbols-outlined editIcon";
      editIcon.dataset.cy = "edit-todo-button";
      editIcon.innerText = "edit";

      editIcon.addEventListener("click", function () {
        openEditModal(todoItem);
      });

      const todoText = document.createElement("div");
      todoText.classList = "toDoTitles";
      todoText.innerHTML = `<strong>${todoItem.title}</strong> - ${todoItem.date}`;

      listItem.appendChild(todoText);
      toDoIcons.appendChild(deleteIcon);
      toDoIcons.appendChild(editIcon);

      todoList.appendChild(listItem);
      listItem.appendChild(toDoIcons);
    }
  });
  showTodayEvents();
}

function renderSelectedDate(query) {
  const activeDate = document.getElementById("activeDate");
  if (query !== "NaN-NaN-NaN") {
    let hasMatch = false;
    todos.forEach((item) => {
      const itemDate = convertToDate(item.date);
      if (itemDate === query) {
        hasMatch = true;
        setVisibilityByDate(todos, query);
        updateUI();
      }
    });
    if (!hasMatch) {
      setVisibilityToFalse();
    }
    activeDate.textContent = query;
  }
}

function setVisibilityByDate(array, targetDate) {
  array.forEach((item) => {
    item.visibility = item.date === targetDate;
  });
}

function setVisibilityToFalse() {
  todos.forEach((item) => {
    item.visibility = false;
  });
  updateUI();
}

function convertToDate(query) {
  const inputDate = new Date(query);
  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const day = inputDate.getDate().toString().padStart(2, "0");

  const formattedDateString = `${year}-${month}-${day}`;
  return formattedDateString;
}

function doNothing() {}

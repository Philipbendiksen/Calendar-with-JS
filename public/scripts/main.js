window.addEventListener("DOMContentLoaded", main);

let todos = JSON.parse(localStorage.getItem("todos") || "[]");

// Initiate application
function main() {
  initCalendar();
  initTodos();
  initWelcomeSegment();
  setVisibilityToAllItems();
}

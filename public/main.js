window.addEventListener("DOMContentLoaded", main);

let todos = JSON.parse(localStorage.getItem("todos") || "[]");

function main() {
  initCalendar();
  initTodos();
  initWelcomeSegment();
  setVisibilityToAllItems();
}

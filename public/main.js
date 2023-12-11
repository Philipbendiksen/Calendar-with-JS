window.addEventListener("DOMContentLoaded", main);

let todos = JSON.parse(localStorage.getItem("todos") || "[]");

function main() {
  setVisibilityToAllItems();
  initTodos();
  createCommonHeader();
  initWelcomeSegment();
}

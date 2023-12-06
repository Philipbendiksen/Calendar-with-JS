window.addEventListener("DOMContentLoaded", main);

let todos = JSON.parse(localStorage.getItem("todos") || "[]");

function main() {
  // PopUp();
  initTodos();
  createCommonHeader();
  initWelcomeSegment();
}

window.addEventListener("DOMContentLoaded", main);

let todos = JSON.parse(localStorage.getItem("todos") || "[]");

function main() {
  PopUp();
  // confirmationModal("testtitel", "testfråga", "ja", "nej");

  initTodos();

  createCommonHeader();
  initWelcomeSegment();
}

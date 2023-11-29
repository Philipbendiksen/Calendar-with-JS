window.addEventListener("DOMContentLoaded", main);

let todos = JSON.parse(localStorage.getItem("todos") || "[]");

function main() {
  PopUp();
  // confirmationModal("testtitel", "testfråga", "ja", "nej");
  updateActiveDate(todayString());

  createWelcomeSegment();
  initTodos();


  createCommonHeader();
  document.querySelector("header").appendChild(createWelcomeSegment("welcomeSegment-mobile"));
  document.querySelector("aside").prepend(createWelcomeSegment("welcomeSegment-desktop"));
}



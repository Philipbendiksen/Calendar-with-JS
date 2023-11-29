window.addEventListener("DOMContentLoaded", main);

function main() {
  PopUp();
  // confirmationModal("testtitel", "testfråga", "ja", "nej");
  updateActiveDate(todayString());
  createCommonHeader();
  document.querySelector("header").appendChild(createWelcomeSegment("welcomeSegment-mobile"));
  document.querySelector("aside").prepend(createWelcomeSegment("welcomeSegment-desktop"));
}


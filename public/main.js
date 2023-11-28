window.addEventListener("DOMContentLoaded", main);

function main() {
  PopUp();
  // confirmationModal("testtitel", "testfråga", "ja", "nej");
  updateActiveDate(todayString());
  createWelcomeSegment();
}

const oscartest = document.querySelector("#oscarTest");
oscartest.addEventListener("click", () => {
  confirmationModal("HEJSAN", "VILL DU TA BORT", "JA", "AVBRYT");
});

function PopUp() {
  const btnPopUp = document.getElementById("btnOpenPopUp");
  const popUpContainer = document.getElementById("modal-popUp");

  btnPopUp.addEventListener("click", () => {
    popUpContainer.classList.remove("hide");
  });

  const btnClose = document.getElementById("btnClose-popUp");
  btnClose.addEventListener("click", () => {
    popUpContainer.classList.add("hide");
  });
}



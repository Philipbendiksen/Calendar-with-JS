/**
 *
 * @param {*} title Title of modal
 * @param {*} btn1Text TextContent within first button (left)
 * @param {*} btn2Text TextContent within second button (right)
 * @param {*} btn1Action Set action for first button, use as cancel / avbryt (left)
 * @param {*} btn2Action Set action for Second button (right)
 */
function confirmationModal(title, btn1Text, btn2Text, btn1Action, btn2Action) {
  const modalBackdrop = document.querySelector("#modalBackdrop");
  const notificationModalBtn1 = document.querySelector("#notiModalBtn1");
  const notificationModalBtn2 = document.querySelector("#notiModalBtn2");
  const notiModalTitle = document.querySelector("#notiModalTitle");
  const notificationModal = document.querySelector("#notificationModal");

  notificationModal.classList.remove("hide");
  notificationModal.classList.add("flex");
  modalBackdrop.classList.remove("hide");

  notiModalTitle.textContent = "";
  notificationModalBtn1.textContent = "";
  notificationModalBtn2.textContent = "";

  notiModalTitle.textContent = title;
  notificationModalBtn1.textContent = btn1Text;
  notificationModalBtn2.textContent = btn2Text;

  notificationModalBtn1.addEventListener("click", () => {
    btn1Action();
    notificationModal.classList.add("hide");
    notificationModal.classList.remove("flex");
    modalBackdrop.classList.add("hide");
  });
  notificationModalBtn2.addEventListener("click", () => {
    btn2Action;
    notificationModal.classList.add("hide");
    notificationModal.classList.remove("flex");
    modalBackdrop.classList.add("hide");
  });
}

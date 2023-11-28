/**
 *
 * @param {*} title Title of modal
 * @param {*} question Question within modal
 * @param {*} btn1Text TextContent within first button (left)
 * @param {*} btn2Text TextContent within second button (right)
 * @param {*} btn1Action Set action for first button, use as cancel / avbryt (left)
 * @param {*} btn2Action Set action for Second button (right)
 */
function confirmationModal(
  title,
  question,
  btn1Text,
  btn2Text,
  btn1Action,
  btn2Action
) {
  const modalBackdrop = document.querySelector("#modalBackdrop");
  const notificationModalBtn1 = document.querySelector("#notiModalBtn1");
  const notificationModalBtn2 = document.querySelector("#notiModalBtn2");
  const notiModalTitle = document.querySelector("#notiModalTitle");
  const notiModalQuestion = document.querySelector("#notiModalQuestion");
  const notificationModal = document.querySelector("#notificationModal");

  notificationModal.classList.toggle("hide");
  notificationModal.classList.toggle("flex");
  modalBackdrop.classList.toggle("hide");

  notiModalTitle.textContent = "";
  notiModalQuestion.textContent = "";
  notificationModalBtn1.textContent = "";
  notificationModalBtn2.textContent = "";

  notiModalTitle.textContent = title;
  notiModalQuestion.textContent = question;
  notificationModalBtn1.textContent = btn1Text;
  notificationModalBtn2.textContent = btn2Text;

  notificationModalBtn1.addEventListener("click", () => {
    btn1Action;
    /** DO SOMETHING , CALL FUNCTION? */
  });
  notificationModalBtn2.addEventListener("click", () => {
    btn2Action;
    notificationModal.classList.toggle("hide");
    notificationModal.classList.toggle("flex");
    modalBackdrop.classList.toggle("hide");
  });
}

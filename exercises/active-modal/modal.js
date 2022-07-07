const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
const modalClose = document.createElement("i");
modalClose.classList.add("fa", "fa-times", "modal-close");
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit recusandae asperiores accusamus labore ratione. Accusantium non pariatur nemo tempora inventore quos sed debitis illo, velit, ipsum explicabo itaque distinctio sit.";
const modalAction = document.createElement("div");
modalAction.classList.add("modal-action");
const modalSubmit = document.createElement("button");
modalSubmit.classList.add("modal-submit");
modalSubmit.textContent = "Confirm";
const modalCancel = document.createElement("button");
modalCancel.classList.add("modal-cancel");
modalCancel.textContent = "Cancel";

const body = document.body;
body.appendChild(modal);
modal.appendChild(modalContent);
modalContent.appendChild(modalClose);
modalContent.appendChild(modalDesc);
modalContent.appendChild(modalAction);
modalAction.appendChild(modalSubmit);
modalAction.appendChild(modalCancel);

const modalClass = document.querySelector(".modal");
setTimeout(() => {
  modalClass.classList.add("modal-isShow");
}, 2000);

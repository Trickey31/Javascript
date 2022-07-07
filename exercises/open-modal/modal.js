const button = document.querySelector(".button");
const template = `<div class="modal">
<div class="modal-overlay"></div>
<div class="modal-content">
  <span class="fa fa-times modal-close"></span>
</div>
</div>`;
button.addEventListener("click", function () {
  document.body.insertAdjacentHTML("beforeend", template);
});
document.body.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.matches(".modal-close")) {
    const modal = e.target.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  } else if (e.target.matches(".modal")) {
    e.target.parentNode.removeChild(e.target);
  }
});

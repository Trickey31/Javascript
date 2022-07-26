window.addEventListener("load", function () {
  function renderSweetAlert() {
    const template = `<div class="sweet-alert">
    <i class="fa fa-check sweet-icon"></i>
    <p class="sweet-text">Chúc mừng bạn đã hoàn thành khóa Javascript</p>
  </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
  }
  const sweetAlert = document.querySelector(".sweet-alert");
  const button = document.querySelector(".button");
  button.addEventListener("click", function () {
    renderSweetAlert();
    if (sweetAlert) {
      setTimeout(() => {
        sweetAlert.parentNode.removeChild(sweetAlert);
      }, 3000);
    }
  });
});

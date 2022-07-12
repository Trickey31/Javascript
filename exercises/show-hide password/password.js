window.addEventListener("load", function () {
  const togglePassword = document.querySelector(".toggle");
  togglePassword.addEventListener("click", function (e) {
    const input = e.target.previousElementSibling;
    const inputType = input.getAttribute("type");
    inputType === "password"
      ? input.setAttribute("type", "text")
      : input.setAttribute("type", "password");
  });
});

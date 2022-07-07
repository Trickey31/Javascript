const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("click", handleToggle);
function handleToggle(e) {
  menu.classList.toggle("is-show");
  menuToggle.classList.toggle("fa-bars");
  menuToggle.classList.toggle("fa-times");
}
document.addEventListener("click", handleClick);
function handleClick(e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show");
    menuToggle.classList.add("fa-bars");
    menuToggle.classList.remove("fa-times");
  }
}

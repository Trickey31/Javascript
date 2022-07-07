const dropdown = document.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownSelected = document.querySelector(".dropdown__selected");
const dropdownCaret = document.querySelector(".dropdown__caret");
dropdownSelect.addEventListener("click", function (e) {
  dropdownList.classList.toggle("show");
  dropdownCaret.classList.toggle("fa-caret-up");
});
dropdownItems.forEach((item) =>
  item.addEventListener("click", function () {
    const text = item.textContent;
    dropdownSelected.textContent = text;
    dropdownCaret.classList.toggle("fa-caret-up");
    dropdownList.classList.toggle("show");
  })
);
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdownCaret.classList.toggle("fa-caret-up");
    dropdownList.classList.remove("show");
  }
});

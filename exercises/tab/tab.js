const tabItems = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(e) {
  [...tabItems].forEach((item) => item.classList.remove("active"));
  e.target.classList.add("active");
  const tabNumbers = e.target.dataset.tab;
  console.log(tabNumbers);
  [...tabContent].forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-tab") === tabNumbers) {
      item.classList.add("active");
    }
  });
}

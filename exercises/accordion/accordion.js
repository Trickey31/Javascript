const accordionHeader = document.querySelectorAll(".accordion-header");
[...accordionHeader].forEach((item) =>
  item.addEventListener("click", handleClick)
);
function handleClick(e) {
  const content = e.target.nextElementSibling;
  const icon = e.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-up");
  icon.classList.toggle("fa-angle-down");
  content.classList.toggle("is-active");
  content.style.height = `${content.scrollHeight}px`;
  if (!content.classList.contains("is-active")) {
    content.style.height = `0px`;
  }
}

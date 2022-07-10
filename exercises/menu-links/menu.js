window.addEventListener("load", function () {
  const menuLinks = document.querySelectorAll(".menu-link");
  menuLinks.forEach((link) =>
    link.addEventListener("mouseenter", handleHoverLink)
  );
  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);
  function handleHoverLink(e) {
    const { left, width, height, top } = e.target.getBoundingClientRect();
    console.log(e.target.getBoundingClientRect());
    const offsetBottom = 5;
    line.style.width = `${width}px`;
    line.style.top = `${top + height + offsetBottom}px`;
    line.style.left = `${left}px`;
  }
  const menu = document.querySelector(".menu");
  menu.addEventListener("mouseleave", function () {
    line.style.width = 0;
  });
});

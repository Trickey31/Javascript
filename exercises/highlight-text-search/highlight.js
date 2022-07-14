window.addEventListener("load", function () {
  const items = document.querySelectorAll(".dropdown-item");
  const input = document.querySelector(".input-search");
  input.addEventListener("input", function (e) {
    let filter = e.target.value;
    filter.toLowerCase();
    [...items].forEach((item) => {
      const text = item.textContent;
      const index = text.toLowerCase().indexOf(filter);
      if (index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))) {
        item.innerHTML = `${text.substring(
          0,
          index
        )}<span class="primary">${text.substring(
          index,
          index + filter.length
        )}</span>${text.substring(index + filter.length)}`;
      }
    });
  });
});

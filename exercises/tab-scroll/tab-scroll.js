window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const tab = document.querySelector(".tab");
  const tabList = document.querySelector(".tab-list");
  const tabOffsetLeft = tab.offsetLeft;
  [...tabItems].forEach((item) => {
    item.addEventListener("click", function (e) {
      [...tabItems].forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
      const leftSpacing = e.target.offsetLeft - tabOffsetLeft;
      tabList.scroll(leftSpacing / 2, 0);
    });
  });
});

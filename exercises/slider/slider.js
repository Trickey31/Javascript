window.addEventListener("load", function () {
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const dotItems = document.querySelectorAll(".slider-dot-item");
  const nextBtn = document.querySelector(".slider-next");
  const prevBtn = document.querySelector(".slider-prev");
  let positionX = 0;
  let index = 0;

  const sliderItemWidth = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  [...dotItems].forEach((item) => {
    item.addEventListener("click", function (e) {
      [...dotItems].forEach((dt) => dt.classList.remove("active"));
      e.target.classList.add("active");
      const sliderIndex = e.target.dataset.index;
      index = sliderIndex;
      positionX = -1 * index * sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
    });
  });

  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  prevBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  function handleChangeSlide(direction) {
    if (direction === 1) {
      if (index >= sliderLength - 1) {
        index = sliderLength - 1;
        return;
      }
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index++;
    } else if (direction === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index--;
    }
    [...dotItems].forEach((item) => item.classList.remove("active"));
    dotItems[index].classList.add("active");
  }
});

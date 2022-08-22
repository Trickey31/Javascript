window.addEventListener("load", function () {
  function Slider() {
    this.sliderMain = document.querySelector(".slider-main");
    this.sliderItems = document.querySelectorAll(".slider-item");
    this.dotItems = document.querySelectorAll(".slider-dot-item");
    this.nextBtn = document.querySelector(".slider-next");
    this.prevBtn = document.querySelector(".slider-prev");
    this.positionX = 0;
    this.index = 0;

    this.sliderItemWidth = this.sliderItems[0].offsetWidth;
    this.sliderLength = this.sliderItems.length;
    [...this.dotItems].forEach((item) =>
      item.addEventListener("click", (e) => this.handleChangeDots(e))
    );

    this.nextBtn.addEventListener("click", () => {
      this.handleChangeSlide(1);
    });
    this.prevBtn.addEventListener("click", () => {
      this.handleChangeSlide(-1);
    });
  }
  new Slider();
  Slider.prototype.handleChangeDots = function (e) {
    [...this.dotItems].forEach((dt) => dt.classList.remove("active"));
    e.target.classList.add("active");
    const sliderIndex = e.target.dataset.index;
    this.index = sliderIndex;
    this.positionX = -1 * this.index * this.sliderItemWidth;
    this.sliderMain.style = `transform: translateX(${this.positionX}px)`;
  };
  Slider.prototype.handleChangeSlide = function (direction) {
    console.log(this);
    if (direction === 1) {
      if (this.index >= this.sliderLength - 1) {
        this.index = this.sliderLength - 1;
        return;
      }
      this.positionX = this.positionX - this.sliderItemWidth;
      this.sliderMain.style = `transform: translateX(${this.positionX}px)`;
      this.index++;
    } else if (direction === -1) {
      if (this.index <= 0) {
        this.index = 0;
        return;
      }
      this.positionX = this.positionX + this.sliderItemWidth;
      this.sliderMain.style = `transform: translateX(${this.positionX}px)`;
      this.index--;
    }
    [...this.dotItems].forEach((item) => item.classList.remove("active"));
    this.dotItems[this.index].classList.add("active");
  };
});

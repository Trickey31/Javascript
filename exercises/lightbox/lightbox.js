const content = document.querySelector(".content");
const contentImg = document.querySelectorAll(".content img");
contentImg.forEach((item) =>
  item.addEventListener("click", function (e) {
    const image = e.target.getAttribute("src");
    const template = `<div class="lightbox">
      <div class="lightbox-content">
        <i class="fa fa-angle-left lightbox-prev"></i>
        <img
          src='${image}'
          alt=""
          class="lightbox-img"
        />
        <i class="fa fa-angle-right lightbox-next"></i>
      </div>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
  })
);
let index = 0;
document.body.addEventListener("click", function (e) {
  const lightImg = document.querySelector(".lightbox-img");
  let lightSrc = "";
  if (e.target.matches(".lightbox")) {
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches(".lightbox-next")) {
    lightSrc = lightImg.getAttribute("src");
    index = [...contentImg].findIndex(
      (item) => item.getAttribute("src") === lightSrc
    );
    index++;
    if (index > contentImg.length - 1) index = 0;
    const newSrc = [...contentImg][index].getAttribute("src");
    lightImg.setAttribute("src", newSrc);
  } else if (e.target.matches(".lightbox-prev")) {
    lightSrc = lightImg.getAttribute("src");
    index = [...contentImg].findIndex(
      (item) => item.getAttribute("src") === lightSrc
    );
    index--;
    if (index < 0) index = contentImg.length - 1;
    const newSrc = [...contentImg][index].getAttribute("src");
    lightImg.setAttribute("src", newSrc);
  }
});

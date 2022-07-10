window.addEventListener("load", function () {
  const imageWrapper = document.querySelector(".image-wrapper");
  const imageCover = document.querySelector(".image-cover");
  const image = document.querySelector(".image");
  let imageWrapperWidth = imageWrapper.offsetWidth;
  let imageWrapperHeight = imageWrapper.offsetHeight;
  imageCover.addEventListener("mousemove", handleHoverImage);
  function handleHoverImage(e) {
    const pX = e.pageX;
    const pY = e.pageY;
    image.style = "widht: auto; height: auto; max-height: unset;";
    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;
    let spaceX = (imageWidth / 2 - imageWrapperWidth) * 2;
    let spaceY = (imageHeight / 2 - imageWrapperHeight) * 2;
    imageWidth = imageWidth + spaceX;
    imageHeight = imageHeight + spaceY;
    const ratioX = imageWidth / imageWrapperWidth / 2;
    const ratioY = imageHeight / imageWrapperHeight / 2;
    let x = (pX - imageWrapper.offsetLeft) * ratioX;
    let y = (pY - imageWrapper.offsetTop) * ratioY;
    image.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto; max-height: unset; transform: none;`;
  }
  imageCover.addEventListener("mouseleave", function () {
    image.style = "";
  });
});

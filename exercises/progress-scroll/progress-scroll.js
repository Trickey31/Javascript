const progress = document.querySelector(".progress");
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset;
  // document.documentElement.scrollHeight -> chiều cao document tính cả thanh scrollbar
  // document.documentElement.clientHeight -> chiều cao thanh scrollbar
  // -> Tính chiều cao document không tính thanh scrollbar
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}%`;
});

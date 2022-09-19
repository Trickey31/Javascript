const endpoint = "https://picsum.photos/v2/list?limit=8";
const imageList = document.querySelector(".images");
const loadmore = document.querySelector(".button");
let page = 1;

function imagesTemplate(url) {
  const template = `<div class="image-item">
  <img src="${url}" alt="" />
  </div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}

async function fetchData(page = 1) {
  const response = await fetch(`${endpoint}&page=${page}`);
  const images = await response.json();
  if (images.length > 0 && Array.isArray(images)) {
    images.forEach((item) => imagesTemplate(item.download_url));
  }
}

loadmore.addEventListener("click", handleLoadMore);
async function handleLoadMore() {
  page++;
  await fetchData(page);
}
fetchData();

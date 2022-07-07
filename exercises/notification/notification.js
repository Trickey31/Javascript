const body = document.body;
function createNotification(title = "Welcome to notification!") {
  const noti = document.createElement("div");
  noti.classList.add("noti");
  const notiImg = document.createElement("img");
  notiImg.classList.add("noti-image");
  notiImg.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1656174755082-0eb12a1068ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  );
  const notiContent = document.createElement("div");
  notiContent.classList.add("noti-content");
  const notiTitle = document.createElement("h3");
  notiTitle.classList.add("noti-title");
  notiTitle.textContent = `${title}`;
  const notiDesc = document.createElement("p");
  notiDesc.classList.add("noti-desc");
  notiDesc.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet provident praesentium id consequatur perspiciatis dolorem aspernatur nesciunt explicabo molestias ratione sint corrupti velit repellat temporibus maxime ducimus, esse minus.";

  notiContent.appendChild(notiTitle);
  notiContent.appendChild(notiDesc);
  noti.appendChild(notiImg);
  noti.appendChild(notiContent);
  body.appendChild(noti);
}

const randomData = [
  "Welcome to notification!",
  "Hello Javascript!",
  "Tiến Thành đẹp trai!",
];
let lastTitle;

// const timer = setInterval(() => {
//   const item = document.querySelector(".noti");
//   if (item) item.parentNode.removeChild(item);
//   const title = randomData[Math.floor(Math.random * randomData.length)];
//   if (lastTitle !== title) createNotification(title);
//   lastTitle = title;
// }, 5000);

const endpoint = "http://localhost:3000/courses";
const courseList = document.querySelector(".course-list");
const formPost = document.querySelector(".form-post");
const formSubmit = document.querySelector(".form-submit");
const filterInut = document.querySelector(".filter");
let updateID = null;

function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

async function addCourse({
  image,
  title,
  author,
  rating,
  buyAmount,
  price,
  bestSeller,
}) {
  await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      buyAmount,
      price,
      bestSeller,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
async function deleteCourse(id) {
  await fetch(`${endpoint}/${id}`, {
    method: "DELETE",
  });
}
async function updateCourse({
  id,
  image,
  title,
  author,
  rating,
  buyAmount,
  price,
  bestSeller,
}) {
  await fetch(`${endpoint}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      buyAmount,
      price,
      bestSeller,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
async function getDataCourse(id) {
  const response = await fetch(`${endpoint}/${id}`);
  const data = response.json();
  return data;
}

function renderItem(item) {
  const template = `<div class="course-item">
  <div class="course-img">
    <img src="${item.image}" alt="" />
    <button class="course-edit" data-id=${
      item.id
    }><i class="fa fa-pencil"></i></button>
    <button class="course-remove" data-id=${
      item.id
    }><i class="fa fa-times"></i></button>
  </div>
  <div class="course-content">
    <h3 class="course-title">${item.title}</h3>
    <div class="course-author">${item.author}</div>
    <div class="course-meta">
    <span class="course-rating">${item.rating}</span>
    <span class="course-enroll">${item.buyAmount}</span>
    </div>
    <div class="course-price">${item.price}</div>
    ${
      item.bestSeller ? '<div class="course-best-seller">Best seller</div>' : ""
    }  
  </div>
</div>`;
  courseList.insertAdjacentHTML("beforeend", template);
}

async function getCourses(link = endpoint) {
  const response = await fetch(link);
  const data = await response.json();
  courseList.textContent = "";
  if (data.length > 0 && Array.isArray(data)) {
    data.forEach((item) => renderItem(item));
  }
}

// Cách 1 --> sử dụng e.target
// formPost.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const title = e.target.elements["title"].value;
//   console.log(title);
// });
// Cách 2 --> sử dụng this
formPost.addEventListener("submit", async function (e) {
  e.preventDefault();
  const course = {
    image: this.elements["image"].value,
    title: this.elements["title"].value,
    author: this.elements["author"].value,
    rating: +this.elements["rating"].value,
    buyAmount: +this.elements["buyAmount"].value,
    price: +this.elements["price"].value,
    bestSeller: this.elements["bestSeller"].checked,
  };
  updateID
    ? await updateCourse({ id: updateID, ...course })
    : await addCourse(course);
  this.reset();
  await getCourses();
  updateID = null;
  formSubmit.textContent = "Add Course";
});
courseList.addEventListener("click", async function (e) {
  if (e.target.matches(".course-remove")) {
    const courseID = +e.target.dataset.id;
    await deleteCourse(courseID);
    await getCourses();
  } else if (e.target.matches(".course-edit")) {
    const courseID = +e.target.dataset.id;
    const data = await getDataCourse(courseID);
    formPost.elements["image"].value = data.image;
    formPost.elements["title"].value = data.title;
    formPost.elements["author"].value = data.author;
    formPost.elements["rating"].value = data.rating;
    formPost.elements["buyAmount"].value = data.buyAmount;
    formPost.elements["price"].value = data.price;
    formPost.elements["bestSeller"].checked = data.bestSeller;
    formSubmit.textContent = "Update course";
    updateID = courseID;
  }
});
filterInut.addEventListener(
  "keydown",
  debounceFn(function (e) {
    const path = `${endpoint}?title_like=${e.target.value}`;
    getCourses(path);
  }, 500)
);
getCourses();

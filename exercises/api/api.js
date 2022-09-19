const userName = document.querySelector(".username");
const endpoint = "https://api.github.com/users";
async function displayUsers(username) {
  userName.textContent = "Loading....";
  const promise = await fetch(`${endpoint}/${username}`);
  const data = await promise.json();
  userName.textContent = `${data.login}`;
  // promise
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));
}
function handleError() {
  console.log("Something went wrong");
  userName.textContent = "No data found";
}
displayUsers("Trickey31").catch(handleError);

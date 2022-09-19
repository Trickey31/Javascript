const endpoint = "https://icanhazdadjoke.com";
const joke = document.querySelector(".joke");
const jokeHeading = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");

jokeButton.addEventListener("click", handleRandomJoke);

async function handleRandomJoke() {
  joke.classList.add("is-loading");
  const data = await getJoke();
  jokeHeading.textContent = data.joke;
  joke.classList.remove("is-loading");
}
async function getJoke() {
  const response = await fetch(endpoint, {
    headers: { Accept: "application/json" },
  });
  const data = await response.json();
  return data;
}

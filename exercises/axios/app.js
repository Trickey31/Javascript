const endpoint = "http://localhost:3000/posts";

async function getPosts() {
  try {
    const response = await axios.get(`${endpoint}`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
getPosts();

async function addPost() {
  try {
    const response = await axios.post(`${endpoint}`, {
      title: "This is a famous boy",
      author: "Tiến Thành",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
// addPost();

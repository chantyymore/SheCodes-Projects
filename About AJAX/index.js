function displayComments(response) {
  console.log(response); //challenge 2
  console.log(response.data[0].email); //challenge 3
}
let apiUrl = "https://jsonplaceholder.typicode.com/comments";
axios.get(apiUrl).then(displayComments);

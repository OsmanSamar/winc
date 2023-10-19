// Basics Exercise: simple fetching.

// Create an async function fetchUsers.

const fetchUsers = async function () {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();
  console.table(users);
};

// Call the fetchUsers function.

//fetchUsers();

// Comment out the call to fetchUsers once you have a button to trigger the request.

// Select the button that is on the page.
const fetchButton = document.querySelector(".fetch-users");

// Add fetchUsers as the event listener to the button.
fetchButton.addEventListener("click", fetchUsers);

// End of Basics Exercise.

// =================================================================

// Intermediate Exercise: fetching multiple related resources.
// Store the base path in a constant.

// Write the fetchPostAndComments async function.
//const fetchPostAndComments = async function (postId) {
// First store the users in a constant. Here we are using the helper function we wrote
// above.
//const usersResponse = await fetch('http://localhost:3000/users');
//const users = await usersResponse.json();

// Fetch the post.
//const postResponse = await fetch(`http://localhost:3000/posts/${postId}`);
//const post= await postResponse.json();

// Fetch the comments.
//const commentsResponse = await fetch(`http://localhost:3000/comments?postId=${postId}`);
//const comments =await commentsResponse.json();

// Find the author of the post.
//console.log(`Post body: ${post.body}`);
//const user = users.find(user => user.id === post.userId);
//console.log(`User who wrote the post: ${user.name}`);
//console.log(user.name, "-", post.body);

// Loop over the comments
//for (const comment of comments) {
// For each comment find the author, and log their name, and the comment.
//const commentAuthor = users.find(user => user.id === comment.userId);
//console.log(commentAuthor.name, "-", comment.comment);
//}
//};

// A helper function
const fetchJson = async function (url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

// Store the base path in a constant.
const SERVER = "http://localhost:3000/";

// Write the fetchPostAndComments async function.
const fetchPostAndComments = async function (postId) {
  // First store the users in a constant. Here we are using the helper function we wrote
  // above.
  const users = await fetchJson(`${SERVER}users`);
  //Fetch the post.
  const post = await fetchJson(`${SERVER}posts/${postId}`);
  // Fetch the comments.
  const comments = await fetchJson(`${SERVER}comments?postId=${postId}`);
  // Find the author of the post.
  const postAuthor = users.find((user) => user.id === post.userId);
  // Log the author's name and the content of the post.
  console.log(postAuthor.name, "-", post.body);

  // Loop over the comments
  for (const comment of comments) {
    // For each comment find the author, and log their name, and the comment.
    const commentAuthor = users.find((user) => user.id === comment.userId);
    console.log(commentAuthor.name, "-", comment.comment);
  }
};

// Select the button that is on the page.
const fetchButton2 = document.querySelector(".fetch-post");

// Fetch a specific Post and its comments on clicking the button.
fetchButton2.addEventListener("click", () => fetchPostAndComments("892a4ba3"));

// End of Intermediate Exercise.

// =================================================================

// Advanced Exercise: fire off multiple requests.

// A helper function
//const fetchJson = async function (url) {
//  const response = await fetch(url);
// const json = await response.json();
//  return json;
//};

// Store the base path in a constant.
//const SERVER = "http://localhost:3000/";

// Rewrite the fetchPostAndComments async function.

//const fetchPostAndComments = async function (postId) {
// First, we should not await any of the fetches.
//  const asyncUsers = fetchJson(`${SERVER}users`);
// const asyncPost = fetchJson(`${SERVER}posts/${postId}`);
// const asyncComments = fetchJson(`${SERVER}comments?postId=${postId}`);

// Await users and post.
// const users = await asyncUsers;
// const post = await asyncPost;

// Log out the post's author and the body.
//const postAuthor = users.find((user) => user.id === post.userId);
// console.log(postAuthor.name, "-", post.body);

// Await the comments.
//const comments = await asyncComments;

//  for (const comment of comments) {
// For each comment find the author, and log their name, and the comment.
//   const commentAuthor = users.find((user) => user.id === comment.userId);
//   console.log(commentAuthor.name, "-", comment.comment);
//  }
//};

// For each comment find the author, and log their name, and the comment.

// Select the button that is on the page.

//const fetchButton2 = document.querySelector(".fetch-post");

// Fetch a specific Post and its comments on clicking the button.
//fetchButton2.addEventListener("click", () => fetchPostAndComments("892a4ba3"));

// End of Advanced Exercise.

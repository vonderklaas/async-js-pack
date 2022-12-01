const ul = document.getElementById('ul');

const newPost = {
  title: 'New Post',
  body: 'This is a new Post',
};

const posts = [
  {
    title: 'Post One',
    body: 'This is Post One',
  },
  {
    title: 'Post Two',
    body: 'This is Post Two',
  },
];

const getPosts = () => {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    ul.innerHTML = output;
  }, 1000);
};

const createPost = (newPost) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPost);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong!');
      }
    }, 2000);
  });
};

async function init() {
  await createPost(newPost);
  getPosts();
}

init();

// Async / Await / Fetch
const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
};
fetchUsers();

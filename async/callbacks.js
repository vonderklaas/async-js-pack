const ul = document.getElementById('ul');

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

const createPost = (newPost, callback) => {
  setTimeout(() => {
    posts.push(newPost);
    callback();
  }, 2000);
};

createPost(
  {
    title: 'Post Three',
    body: 'This is Post Three',
  },
  getPosts
);

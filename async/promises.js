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

// createPost(newPost)
//   .then(getPosts)
//   .catch((err) => console.log(err));

const promise1 = Promise.resolve('Hello World!');
const promise2 = 10;
const promise3 = new Promise((resolve, _reject) => {
  setTimeout(resolve, 2000, 'Goodbye');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

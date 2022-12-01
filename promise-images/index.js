const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      setTimeout(() => {
        resolve(image.src);
      }, 500);
    };
    image.onerror = () => {
      let message = 'Could not load image at' + url;
      reject(new Error(message));
    };
    image.src = url;
  });
};

const addImage = (imgSource) => {
  let imgElement = document.createElement('img');
  imgElement.src = imgSource;
  document.body.appendChild(imgElement);
};

Promise.all([
  loadImage('./images/amsterdam_1.jpg'),
  loadImage('./images/amsterdam_2.webp'),
  loadImage('./images/amsterdam_3.jpg'),
]).then((images) => {
  images.forEach((imageSource) => {
    addImage(imageSource);
  });
});

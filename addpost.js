// get form content
const getFormData = e => {
  e.preventDefault();
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let imageUrl = document.getElementById('image-url').value;
  let imageAlt = document.getElementById('image-alt').value;
  let text = document.getElementById('text').value;

  let postObject = {};

  postObject.title = title;
  postObject.author = author;
  postObject.imageUrl = imageUrl;
  postObject.imageAlt = imageAlt;
  postObject.text = text;

  console.log(postObject);
};

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', getFormData);

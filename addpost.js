window.onload = addEvents;

// get form content
const getFormData = e => {
  e.preventDefault();
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let imageUrl = document.getElementById('image-url').value;
  let imageAlt = document.getElementById('image-alt').value;
  let text = document.getElementById('text').value;

  console.log(title);

  let postObject = {};

  // TODO: insert current date
  let date = setdate();
  // TODO: validate and sanitise input

  postObject.title = title;
  postObject.author = author;
  postObject.date = date;
  postObject.imageUrl = imageUrl;
  postObject.imageAlt = imageAlt;
  postObject.text = text;

  console.log(postObject);
};

function addEvents() {
  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', getFormData, false);
}

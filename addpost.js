window.onload = addEvents;

// get form content
const getFormData = e => {
  e.preventDefault();
  // get the input the valued from the form
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let imageUrl = document.getElementById('image-url').value;
  let imageAlt = document.getElementById('image-alt').value;
  let text = document.getElementById('text').value;

  // TODO: validate and sanitise input

  // set the current date
  let date = setdate();
  // build post object
  let postObject = {};
  postObject.title = title;
  postObject.author = author;
  postObject.date = date;
  postObject.imageUrl = imageUrl;
  postObject.imageAlt = imageAlt;
  postObject.text = text;
  // push post object into posts array
  console.log(postObject);
  blogPosts.push(postObject);
  console.log(blogPosts);
};

function addEvents() {
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', getFormData, false);
}

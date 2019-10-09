var spec = {
  numPerPage: 3,
  selectPage: 0 //if the page selected is 1 the prevButton is disabled if the page selected is the last page the nextButton is disabled
};

spec.selectPage = getUrlParameters("page");

//console.log(blogPosts.length);
var pages = blogPosts.length / spec.numPerPage;
//console.log(pages);

window.onload = init; //Execute a JavaScript after a page has been loaded

//access to the page-link number
function init() {
  numberOfPages = Math.ceil(blogPosts.length / spec.numPerPage);

  //var i;
  let buttonList = document.getElementById("buttonList"); //get Element By Id buttonList on ul
  let refNode = document.getElementById("nextButton"); //
  for (let i = 0; i < numberOfPages; i++) {
    let li = document.createElement("li");
    li.classList.add("page-item");

    if (i == spec.selectPage - 1) {
      li.classList.add("active");
    }
    let a = document.createElement("a");
    a.classList.add("page-link");
    a.href = "pagination.html?page=" + (i + 1); // Get the selected bage and put on a url ???
    let aText = document.createTextNode(i + 1); //  Create a text node
    a.appendChild(aText); // Append the text to <a>
    li.appendChild(a);
    buttonList.insertBefore(li, refNode); //
    //console.log(buttonList);
  }
  // Get the value "disable" of the onclick attribute of a button element Previous and Next
  if (spec.selectPage == 1) {
    // when the value is equal the page "1" them previous button value is disable
    var prevButton = document.getElementById("prevButton");
    prevButton.classList.add("disabled");
  }
  if (spec.selectPage == numberOfPages) {
    //when the value is equal the "last page" (now is page 5) them next button value is disable
    var nextButton = document.getElementById("nextButton");
    nextButton.classList.add("disabled");
  }
}

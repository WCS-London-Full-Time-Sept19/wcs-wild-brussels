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
  let buttonList = document.getElementById("buttonList"); // Pagination buttons [Previous, 1, 2, 3, Next] <ul> ... </ul>
  let refNode = document.getElementById("nextButton"); // "Next" button

  for (let i = 0; i < numberOfPages; i++) {
    let li = document.createElement("li"); // <li> </li>
    li.classList.add("page-item"); // <li class="page-item"></li>

    if (i == spec.selectPage - 1) {
      // If current page is the selectedPage
      li.classList.add("active"); // <li class="page-item active"></li>
    }

    let a = document.createElement("a"); // <a> </a>
    a.classList.add("page-link"); // <a class="page-link"> </a>
    a.href = "posts.html?page=" + (i + 1); // <a href="posts.html?page=i+1" class="page-link"> </a>

    let aText = document.createTextNode(i + 1); //  "1"
    a.appendChild(aText); // <a href="posts.html?page=i+1" class="page-link"> 1 </a>
    li.appendChild(a); // <li class="page-item"> <a href="posts.html?page=i+1" class="page-link"> 1 </a> </li>

    buttonList.insertBefore(li, refNode); // <ul>.... <li id="nextButton">...</li></ul>
  }

  var prevButton = document.getElementById("prevButton");
  var prevButtonA = prevButton.getElementsByTagName("a")[0];
  prevButtonA.href = "posts.html?page=" + (spec.selectPage - 1);

  var nextButton = document.getElementById("nextButton");
  var nextButtonA = nextButton.getElementsByTagName("a")[0];
  nextButtonA.href = "posts.html?page=" + (Number(spec.selectPage) + 1);

  // Get the value "disable" of the onclick attribute of a button element Previous and Next
  if (spec.selectPage == 1) {
    // when the value is equal the page "1" them previous button is disabled

    prevButton.classList.add("disabled"); // <li id="prevButton" class="... disabled"></li>
  }
  if (spec.selectPage == numberOfPages) {
    //when the value is equal the "last page" (now is page 5) them next button is disabled
    nextButton.classList.add("disabled");
  }
}

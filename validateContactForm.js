//1. Do make sure that all the fields have been filled in and selected by users when they have hit the submit button, otherwise, will show an error message.
//2. Do create a successful message for a submitted form.
//3. Do create divs for every field to show the error messages accordingly.
//4. Do check the value in each field has met the criteria.
//5. Do validate user inputs while they are typing.

//window.onload is only used once per page, because web page loads only once after it is refershed (well obviously).
window.onload = addEventList; //addEventList is a function that has a collection of click event listeners for the buttons.

function validationMessages(e) {
  e.preventDefault(); //this is to prevent the default behaviour when the page is loaded after the submit button is clicked.
  var name = document.getElementById("contactName").value; // load DOM

  var email = document.getElementById("contactEmail").value; // load DOM

  var country = document.getElementById("inputCountry"); // load DOM
  var countrySelection = country.options[country.selectedIndex].value;

  var comment = document.getElementById("contactComment").value; // load DOM
  //var message = ""; console.log(message = "All OK")

  //update message in all fields if needed
  nameForm();
  emailForm();
  countryForm();
  commentForm();

  //boolean variables used to validate all fields have been entered correctly
  var nameValidated;
  var emailValidated;
  var countryValidated;
  var commentValidated;

  //if-else statements that manipulate DOMs
  //console.log(name);
  function nameForm() {
    var trimmedName = name.trim(); //string operation to sanitise users inputs

    if (!trimmedName) {
      document.getElementById("errorMsgName").innerHTML =
        "No name has been entered.";
      return false;
    }
    if (!trimmedName.match(/\s/)) {
      document.getElementById("errorMsgName").innerHTML =
        "Please enter your full name.";
      return false;
    }
    nameValidated = true;
    return true;
  }

  function emailForm() {
    if (!email) {
      document.getElementById("errorMsgEmail").innerHTML =
        "No email has been entered.";
      return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
      document.getElementById("errorMsgEmail").innerHTML =
        "Please enter your valid email address.";
      return false;
    }
    emailValidated = true;
    return true;
  }
  function countryForm() {
    if (countrySelection == "") {
      //console.log(">>>>" + countrySelection);
      document.getElementById("errorMsgCountry").innerHTML =
        "No country has been selected.";
      return false;
    }
    countryValidated = true;
    return true;
  }
  function commentForm() {
    if (!comment) {
      document.getElementById("errorMsgComment").innerHTML =
        "No comment has been entered.";
      return false;
    }
    if (
      comment.length > 500 ||
      comment.indexOf("https://") >= 0 ||
      comment.indexOf("<") >= 0
    ) {
      document.getElementById("errorMsgComment").innerHTML =
        "Please enter your complete message.";
      return false;
    }
    commentValidated = true;
    return true;
  }

  if (nameValidated && emailValidated && countryValidated && commentValidated) {
    //submit form
    document.getElementById("contactForm").classList.add("hide");
    document
      .getElementById("submittedForm")
      .classList.add("showSuccessMessage");
    var updateName = document.getElementById("successMsg").innerHTML;
    var displayName = updateName.replace("inputName", name);
    document.getElementById("successMsg").innerHTML = displayName;
  }
}

function addEventList() {
  document
    .getElementById("myBtn")
    .addEventListener("click", validationMessages); // this uses myRules function in relevant to higher-order function principal.
  // add more event listeners for other clickable buttons on the same page in this function.
}

//validate inputs while users are typing
function checkName() {
  var name = document.getElementById("contactName").value; // load DOM

  if (name == 0) {
    document.getElementById("errorMsgName").innerHTML = "No name";
  } else if (!name.match(/^[A-Za-z\s]+$/)) {
    var numberIsNotAllowed = document.getElementById("contactName").value;
    numberIsNotAllowed = numberIsNotAllowed.substring(
      0,
      numberIsNotAllowed.length - 1
    );
    document.getElementById("contactName").value = numberIsNotAllowed;
  } else {
    document.getElementById("errorMsgName").innerHTML = "";
  }
}

function checkEmail() {
  var email = document.getElementById("contactEmail").value; // load DOM
  if (email == 0) {
    document.getElementById("errorMsgEmail").innerHTML = "No email";
  } else {
    document.getElementById("errorMsgEmail").innerHTML = "";
  }
}

function checkSelect() {
  var country = document.getElementById("inputCountry").value; // load DOM
  if (country == 0) {
    document.getElementById("errorMsgCountry").innerHTML = "No country";
  } else {
    document.getElementById("errorMsgCountry").innerHTML = "";
  }
}

function checkComment(e) {
  //console.log(e);

  if (e.key == "Enter") {
    //console.log("you clicked enter");
    var enterKeyPressed = document.getElementById("contactComment").value;
    enterKeyPressed = enterKeyPressed.substring(0, enterKeyPressed.length - 1);
    document.getElementById("contactComment").value = enterKeyPressed;
  }

  var comment = document.getElementById("contactComment").value; // load DOM

  if (comment == 0) {
    document.getElementById("errorMsgComment").innerHTML = "No comment";
  } else {
    document.getElementById("errorMsgComment").innerHTML = "";
  }
}

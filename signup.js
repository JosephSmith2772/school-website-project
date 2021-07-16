"use strict";


//Javascript for the signup page

// The functions to pages.
var changeToAllSongs = function () {
  window.location.href = "allsongs.html"
}
var changeToImages = function () {
  window.location.href = "images.html"
}
var changeToSignUp = function () {
  window.location.href = "signup.html"
}
var changeToLifeInfo = function () {
  window.location.href = "lifeinfo.html"
}
var changeToSurvey = function () {
  window.location.href = "survey.html"
}

// The processEntries function to process the user input of this page
var processEntries = function () {
  var firstName = $("#first_name").val();
  var email = $("#email").val();
  // All of these variables are just getting the text that was entered in that field.
  var password = $("#password").val();
  var password2 = $("#password_2").val();
  // variable to let us know if we should submit
  var isValid = true
  // All of our validation check statements are below, they will check for empty strings 
  //as well as the email format and it makes sure the passwords match
  if (firstName === "") {
    $("#first_name").next().text("This field is required");
    isValid = false;
    $("#email").val() = "";
  } else {
    $("#first_name").next().text("");

  }
  if (email === "" || !/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/.test(email)) {
    $("#email").next().text("Please enter a valid email");
    isValid = false

  } else {
    $("#email").next().text("");

  }
  if (password === "") {
    $("#password").next().text("Please enter a password");
    isValid = false;
  } else {
    $("#password").next().text("");
  }

  if (password2 !== password) {
    $("#password_2").next().text("Passwords must match");
    isValid = false
  } else {
    $("#password_2").next().text("");
  }
  // if all the checks pass is valid is set to true and we can submit the form
  if (isValid === true) {
    $("#signup_form").submit();

  }


}


// Onload for the navigation buttons
window.onload = function () {
  var $ = function (id) {
    return document.getElementById(id);
  };
  // On click events to change the page 
  $("allsongs").onclick = this.changeToAllSongs;
  $("images").onclick = this.changeToImages;
  $("signup").onclick = this.changeToSignUp;
  $("lifeinfo").onclick = this.changeToLifeInfo;
  $("survey").onclick = this.changeToSurvey;
  $("btnsubmit").onclick = this.processEntries;


}
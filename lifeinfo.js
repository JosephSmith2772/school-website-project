// Joe Smith
//12/11/19

/* This is the Javasript for the main page. This is a website dedicated to the life of American rap artis Lil Peep. The
website containts picutes from his life as well as all of the music that he has made. There is also a signup page to get changes
about the site and a survey page to get userfeedback. There is not a lot going on this page,
as this page just holds the information from his life. */

"use strict";
// The following functions are there to allow the navigation of pages
var $ = function (id) {
  return document.getElementById(id);
};
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
//The onload function so that these are ready when the page loads
window.onload = function () {
  // The onclick envents that actually call the changesongs functions
  $("allsongs").onclick = this.changeToAllSongs;
  $("images").onclick = this.changeToImages;
  $("signup").onclick = this.changeToSignUp;
  $("lifeinfo").onclick = this.changeToLifeInfo;
  $("survey").onclick = this.changeToSurvey;

};
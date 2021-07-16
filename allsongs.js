"use strict";
// The javascript for the all songs page. Bascily just has navigation buttons. 
var $ = function (id) {
  return document.getElementById(id);
};
// Functions for changing the page
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
// Onload function for loading our buttons in
window.onload = function () {
  // The onclick events that actually change the songs. 
  $("allsongs").onclick = this.changeToAllSongs;
  $("images").onclick = this.changeToImages;
  $("signup").onclick = this.changeToSignUp;
  $("lifeinfo").onclick = this.changeToLifeInfo;
  $("survey").onclick = this.changeToSurvey;

};
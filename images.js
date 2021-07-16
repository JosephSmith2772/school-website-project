// Basic navigation functions to change the pages of the website
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
// Onload function to load the navigation buttons
window.onload = function () {

	var $ = function (id) {
		return document.getElementById(id);
	};
	// On click event that changes the page dending on the button clicked
	$("allsongs").onclick = this.changeToAllSongs;
	$("images").onclick = this.changeToImages;
	$("signup").onclick = this.changeToSignUp;
	$("lifeinfo").onclick = this.changeToLifeInfo;
	$("survey").onclick = this.changeToSurvey;
}
// Ready function to control the image list. 
$(document).ready(function () {

	var slider = $("#image_list"); // slider = ul element
	var leftProperty, newleftProperty;

	// the click event handler for the right button						
	$("#right_button").click(function () {
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));

		// determine new value of left property
		if (leftProperty - 500 <= -2500) {
			newLeftProperty = 0;
		} else {
			newLeftProperty = leftProperty - 500;
		}

		// use the animate function to change the left property
		slider.animate({
			left: newLeftProperty
		}, 1000);

	}); // end click

	// the click event handler for the left button
	$("#left_button").click(function () {

		// get value of current right property
		leftProperty = parseInt(slider.css("left"));

		// determine new value of left property
		if (leftProperty < 0) {
			newLeftProperty = leftProperty + 500;
		} else {
			newLeftProperty = 0;
		}

		// use the animate function to change the left property
		slider.animate({
			left: newLeftProperty
		}, 1000);

	});



});
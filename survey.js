"use strict";
// The functions that handle the page navigation
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
// onload fucntion to load our buttons in
window.onload = function () {

  var $ = function (id) {
    return document.getElementById(id);
  };
  // On click events that call the change page functions
  $("allsongs").onclick = this.changeToAllSongs;
  $("images").onclick = this.changeToImages;
  $("signup").onclick = this.changeToSignUp;
  $("lifeinfo").onclick = this.changeToLifeInfo;
  $("survey").onclick = this.changeToSurvey;
}
// sets teh theme and styel manger for the survey.
Survey
  .StylesManager
  .applyTheme("modern");
// Below is the actual survey that i created using survey.js website. 
var json = {
  "completedHtml": "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help to improve this site going forward into the future</h5>",


  "pages": [{
    "name": "page1",
    "elements": [{
        "type": "rating",
        "name": "question1",
        "title": "How did you feel about the content of this site? 1 being you really didn't like it and 5 being you thought it was amazing. "
      },
      {
        "type": "rating",
        "name": "question2",
        "title": "In your opinion how did the presentation of the content on this site look? 1 being terrible and 5 being amazing. "
      },
      {
        "type": "radiogroup",
        "name": "question3",
        "title": "How likely would you be to recommend this site to a friend? ",
        "choices": [{
            "value": "item1",
            "text": "Very Likely"
          },
          {
            "value": "item2",
            "text": "Unsure"
          },
          {
            "value": "item3",
            "text": "Not Likely "
          }
        ]
      },
      {
        "type": "text",
        "name": "question4",
        "title": "What was your favorite page or thing about this site? "
      },
      {
        "type": "comment",
        "name": "question5",
        "title": "Please write below in a few sentences what you would improve about this site"
      }
    ]
  }]
}


// The code from surveys.js that controls the survey on the page. 
window.survey = new Survey.Model(json);

survey
  .onComplete
  .add(function (result) {
    document
      .querySelector('#surveyResult')

  });

$("#surveyElement").Survey({
  model: survey
});
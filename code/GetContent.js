const UTIL = require("./lib/util");
const CONTENT = require("./content");
const GET_REMOTE = require('./lib/getRemoteContent.js')
var console = require ('console')

var months = [
  [1, "Jan"],
  [2, "Feb"],
  [3, "Mar"],
  [4, "Apr"],
  [5, "May"],
  [6, "Jun"],
  [7, "Jul"],
]

// GetContent
exports.function = function (searchTerm, track, dateTimeExpression) {
  //You can replace with a call to a web api - make sure you map api response to content model
  var content = CONTENT
  var chosenContent;
  
  console.log("Track = " + track)
  console.log("Date = " + dateTimeExpression.date.day)
  console.log("month " + dateTimeExpression.date.month)
  console.log("year " + dateTimeExpression.date.year)
  //if date()
}

var primary = document.getElementById("primary");
var secondary = document.getElementById("secondary");
var message = document.getElementById("message");

message.innerHTML = secondary.innerHTML;

var allLists = document.getElementsByTagName("ul");

var days = allLists[0];

var allthings = days.getElementsByTagName("li");

for (i = 0 ; i < allthings.length; i++) {
  alert(allthings[i].innerHTML);
}



// var primary = document.getElementById("primary");
// var secondary = document.getElementById("secondary");
// var message = document.getElementById("message");

// message.innerHTML = secondary.innerHTML;

// var allLists = document.getElementsByTagName("ul");

// var days = allLists[0];

// var allthings = days.getElementsByTagName("li");

// for (i = 0 ; i < allthings.length; i++) {
//   alert(allthings[i].innerHTML);
// }

// var usedclass = document.getElementsByClassName("prim")

// alert(usedclass[0].innerHTML);

// var degers = document.getElementsByName("costumer")
// alert(degers[0].value);

var john = document.getElementById("john"). addEventListener("click", colorchanger);

function colorchanger(){
    document.getElementById("john").style.color="blue"
    var degers = document.getElementsByName("costumer")
    degers[0].value ="Name has been changed"
    
}
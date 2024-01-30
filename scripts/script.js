
// var deButton = document.querySelector("header button");


// deButton.onclick = toggleMenu;


// function toggleMenu() {  

//   var debody = document.querySelector("body");

//   debody.classList.toggle("toonMenu");
  
// }

// window.onkeydown = handleKeydown;

// function handleKeydown(event) {
//   if (event.key == "Escape") {
//     var deNav = document.querySelector("nav");
//     deNav.classList.remove("toonMenu");
//   }
// }




var deButton = document.getElementById("search-button");
var deInput = document.getElementById("search-input");

deButton.onclick = toggleMenu;

function toggleMenu() {  
  var deBody = document.querySelector("body");
  deBody.classList.toggle("toonMenu");
  
 
  var expanded = deButton.getAttribute("aria-expanded") === "true";
  deButton.setAttribute("aria-expanded", !expanded);
}

window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}

/* Bronnen: https://codepen.io/shooft/pen/ZEVYyMQ*/
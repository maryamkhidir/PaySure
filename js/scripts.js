function toggleMenu() {

var x = document.getElementById("menu");
if (x.className === "menu") {
    console.log("Clicked");
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}
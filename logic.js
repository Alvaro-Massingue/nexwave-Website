window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

var icon1 = document.getElementById("bars");
var icon2 = document.getElementById("x");
var menu = document.getElementById("menu");
var completo = document.getElementById("completo");
var h1 = document.getElementById("nexwave");
var w = document.getElementById("mobileTop");


icon1.addEventListener("click", menuStyle);
icon2.addEventListener("click", menuStyle);

function menuStyle() {
  if (icon2.style.display == "none") {
    document.body.style.overflow="hidden";
    icon2.style.display = "inline-block";
    icon1.style.display = "none";
    icon2.style.color = "rgba(202, 8, 41, 0.726)";
    completo.style.display = "inline-block";
    menu.style.display = "flex";
    h1.style.display = "inline-block";
    w.style.width = "16rem";
    
  } else {
    icon2.style.display = "none";
    icon1.style.display = "inline-block";
    menu.style.display = "none";
    h1.style.display = "none";
    document.body.style.overflow = "";
    completo.style.display = "none";
  }
}

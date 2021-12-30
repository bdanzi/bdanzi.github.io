body.className=localStorage.getItem("stateMode");
function toggleDarkLight() {
var body = document.getElementById("body");
var currentClass = body.className;
body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
localStorage.setItem("stateMode",body.className);
}
button.className=localStorage.getItem("stateMode");
function changeImage() {
var buttom = document.getElementById("dark_light");
var currentClass_button = button.className;
button.className = currentClass_button == "button primary color2 circle icon solid fa-moon" ? "button primary color2 circle icon solid fa-sun" : "button primary color2 circle icon solid fa-moon";
localStorage.setItem("stateMode",button.className);
}

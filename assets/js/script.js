body.className=localStorage.getItem("stateMode");
function toggleDarkLight() {
var body = document.getElementById("body");
var currentClass = body.className;
body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
localStorage.setItem("stateMode",body.className);
}
button.className=localStorage.getItem("stateMode");
button_1.className=localStorage.getItem("stateMode");
button_2.className=localStorage.getItem("stateMode");
button_3.className=localStorage.getItem("stateMode");
button_4.className=localStorage.getItem("stateMode");
button_5.className=localStorage.getItem("stateMode");

function changeImage() {
var button = document.getElementById("dark_light");
var button_1 = document.getElementById("dark_light_1");
  var button_2 = document.getElementById("dark_light_2");
  var button_3 = document.getElementById("dark_light_3");
  var button_4 = document.getElementById("dark_light_4");
  var button_5 = document.getElementById("dark_light_5");
var currentClass_button = button.className;
var currentClass_button_1 = button_1.className;
var currentClass_button_2 = button_2.className;
var currentClass_button_3 = button_3.className;
var currentClass_button_4 = button_4.className;
var currentClass_button_5 = button_5.className;
button.className = currentClass_button == "button primary color2 circle icon solid fa-moon" ? "button primary color2 circle icon solid fa-sun" : "button primary color2 circle icon solid fa-moon";
localStorage.setItem("stateMode",button.className);
button_1.className = currentClass_button_1 == "button primary color2 circle icon solid fa-moon" ? "button primary color2 circle icon solid fa-sun" : "button primary color2 circle icon solid fa-moon";
localStorage.setItem("stateMode",button_1.className);
button_2.className = currentClass_button_2 == "button primary color2 circle icon solid fa-moon" ? "button primary color2 circle icon solid fa-sun" : "button primary color2 circle icon solid fa-moon";
localStorage.setItem("stateMode",button_2.className);
button_3.className = currentClass_button_3 == "button primary color2 circle icon solid fa-moon" ? "button primary color2 circle icon solid fa-sun" : "button primary color2 circle icon solid fa-moon";
localStorage.setItem("stateMode",button_3.className);
button_4.className = currentClass_button_4 == "button primary color2 circle icon solid fa-moon" ? "button primary color2 circle icon solid fa-sun" : "button primary color2 circle icon solid fa-moon";
localStorage.setItem("stateMode",button_4.className);
button_5.className = currentClass_button_5 == "button primary color2 circle icon solid fa-moon" ? "button primary color2 circle icon solid fa-sun" : "button primary color2 circle icon solid fa-moon";
localStorage.setItem("stateMode",button_5.className);
}
button_play.className=localStorage.getItem("stateMode");
function togglePlayPause(){

  var myAudio = document.getElementById("myAudio");
  return myAudio.paused ? myAudio.play() : myAudio.pause();
}

function changePause() {
  var button_play = document.getElementById("play_pause");
  
  var currentClass_button_play = button_play.className;
  
  button_play.className = currentClass_button_play == "button primary color1 circle icon solid fa-pause" ? "button primary color2 circle icon solid fa-play" : "button primary color2 circle icon solid fa-pause";
  localStorage.setItem("stateMode",button_play.className);
  
  }
  

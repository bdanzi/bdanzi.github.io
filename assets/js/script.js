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
button.className = currentClass_button == "button primary color1 circle icon solid fa-moon" ? "button primary color1 circle icon solid fa-sun" : "button primary color1 circle icon solid fa-moon";
localStorage.setItem("stateMode",button.className);
button_1.className = currentClass_button_1 == "button primary color1 circle icon solid fa-moon" ? "button primary color1 circle icon solid fa-sun" : "button primary color1 circle icon solid fa-moon";
localStorage.setItem("stateMode",button_1.className);
button_2.className = currentClass_button_2 == "button primary color1 circle icon solid fa-moon" ? "button primary color1 circle icon solid fa-sun" : "button primary color1 circle icon solid fa-moon";
localStorage.setItem("stateMode",button_2.className);
button_3.className = currentClass_button_3 == "button primary color1 circle icon solid fa-moon" ? "button primary color1 circle icon solid fa-sun" : "button primary color1 circle icon solid fa-moon";
localStorage.setItem("stateMode",button_3.className);
button_4.className = currentClass_button_4 == "button primary color1 circle icon solid fa-moon" ? "button primary color1 circle icon solid fa-sun" : "button primary color1 circle icon solid fa-moon";
localStorage.setItem("stateMode",button_4.className);
button_5.className = currentClass_button_5 == "button primary color1 circle icon solid fa-moon" ? "button primary color1 circle icon solid fa-sun" : "button primary color1 circle icon solid fa-moon";
localStorage.setItem("stateMode",button_5.className);
}


function togglePlayPause(){

  var myAudio = document.getElementById("myAudio");
  return myAudio.paused ? myAudio.play() : myAudio.pause();
}

function changePause() {
  var button_play = document.getElementById("play_pause");
  var button_play_1 = document.getElementById("play_pause_1");
  var button_play_2 = document.getElementById("play_pause_2");
  var button_play_3 = document.getElementById("play_pause_3");
  var button_play_4 = document.getElementById("play_pause_4");
  var button_play_5 = document.getElementById("play_pause_5");
  button_play.className=localStorage.getItem("stateMode");
  button_play_1.className=localStorage.getItem("stateMode");
  button_play_2.className=localStorage.getItem("stateMode");
  button_play_3.className=localStorage.getItem("stateMode");
  button_play_4.className=localStorage.getItem("stateMode");
  button_play_5.className=localStorage.getItem("stateMode");
  var currentClass_button_play = button_play.className;
  var currentClass_button_play_1 = button_play_1.className;
  var currentClass_button_play_2 = button_play_2.className;
  var currentClass_button_play_3 = button_play_3.className;
  var currentClass_button_play_4 = button_play_4.className;
  var currentClass_button_play_5 = button_play_5.className;
  button_play.className = currentClass_button_play == "button primary color1 circle icon solid fa-pause" ? "button primary color1 circle icon solid fa-play" : "button primary color1 circle icon solid fa-pause";
  button_play_1.className = currentClass_button_play_1 == "button primary color1 circle icon solid fa-pause" ? "button primary color1 circle icon solid fa-play" : "button primary color1 circle icon solid fa-pause";
  button_play_2.className = currentClass_button_play_2 == "button primary color1 circle icon solid fa-pause" ? "button primary color1 circle icon solid fa-play" : "button primary color1 circle icon solid fa-pause";
  button_play_3.className = currentClass_button_play_3 == "button primary color1 circle icon solid fa-pause" ? "button primary color1 circle icon solid fa-play" : "button primary color1 circle icon solid fa-pause";
  button_play_4.className = currentClass_button_play_4 == "button primary color1 circle icon solid fa-pause" ? "button primary color1 circle icon solid fa-play" : "button primary color1 circle icon solid fa-pause";
  button_play_5.className = currentClass_button_play_5 == "button primary color1 circle icon solid fa-pause" ? "button primary color1 circle icon solid fa-play" : "button primary color1 circle icon solid fa-pause";
  localStorage.setItem("stateMode",button_play.className);
  localStorage.setItem("stateMode",button_play_1.className);
  localStorage.setItem("stateMode",button_play_2.className);
  localStorage.setItem("stateMode",button_play_3.className);
  localStorage.setItem("stateMode",button_play_4.className);
  localStorage.setItem("stateMode",button_play_5.className);
  
  }
  

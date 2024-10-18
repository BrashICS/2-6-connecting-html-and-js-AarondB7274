/**
 * 2.6 - Connecting HTML to JavaScript!
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("d4").addEventListener("click", roll_d4);
document.getElementById("d6").addEventListener("click", roll_d6);
document.getElementById("d8").addEventListener("click", roll_d8);
document.getElementById("d10").addEventListener("click", roll_d10);
document.getElementById("d12").addEventListener("click", roll_d12);
document.getElementById("d20").addEventListener("click", roll_d20);
document.getElementById("d100").addEventListener("click", roll_d100);
document.getElementById("enter").addEventListener("click",greeting);
document.getElementById("dynamic_image").addEventListener("click",image_swap);
/*** Functions ***/
function roll_d4() {
    let roll = randInt(1,4);
    document.getElementById("die_roll").textContent = roll;
}
function roll_d6() {
    let roll = randInt(1,6);
    document.getElementById("die_roll").textContent = roll;
}
function roll_d8() {
    let roll = randInt(1,8);
    document.getElementById("die_roll").textContent = roll;
}
function roll_d10() {
    let roll = randInt(1,10);
    document.getElementById("die_roll").textContent = roll;
}
function roll_d12() {
    let roll = randInt(1,12);
    document.getElementById("die_roll").textContent = roll;
}
function roll_d20() {
    let roll = randInt(1,20);
    document.getElementById("die_roll").textContent = roll;
}
function roll_d100() {
    let roll = randInt(1,100);
    document.getElementById("die_roll").textContent = roll;
}
function greeting() {
    let user_name = document.getElementById("user_input").value;
    document.getElementById("greeting").textContent = `Hi there, ${user_name}! Welcome to your personal hell!`
    document.getElementById("user_input").value = ""
//  document.getElementById("user_input").focus
}
function image_swap() {
    document.getElementById("dynamic_image").scr = "./images/thisisfine.jpg"
}
// Return a random integer from `min` to `max`, inclusive
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Script file
Description: JS clock
(c) Copyright by BRS with Nyros. 
**/

/* Get DOM Elements */
var secondHand = document.querySelector(".secondHand");
var hourHand = document.querySelector(".hourHand");
var minuteHand = document.querySelector(".minuteHand");
var digitalClock = document.querySelector(".digitalClock");

// Helper function responsible for calculating the amount to rotate a hand
// const calcDegrees = (time, max) => (time / max) * 360;

function updateClock() {
  // Create new Date object
  const currentTime = new Date();
  const hh = currentTime.getHours();
  const mm = currentTime.getMinutes();
  const ss = currentTime.getSeconds();

  // console.log(currentTime);

  // Get current seconds, minutes, & hours and calculate the degree shift
  const secondHandDegrees = (ss * 6);
  const minuteHandDegrees = (mm * 6) + (ss * 0.1);
  const hourHandDegrees = (hh * 30) + (mm * 0.5);
  // console.log(minuteHandDegrees);
  // console.log(hourHandDegrees);
  // Apply rotation to the clock hands corresponding with current time value
  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;

  digitalClock.innerText = `${hh%12<10?'0':''}${hh % 12}:${mm<10?'0':''}${mm} ${hh>12?'PM':'AM'}`;
} 
updateClock();
// update clock for each time
setInterval(updateClock, 1000);

let chathams_blue = "#FFC0CB";

// Set the Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);

let day = document.getElementById("day");
let month = document.getElementById("month");
let number = document.getElementById("num");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec= document.getElementById("secs");
let ampm = document.getElementById("ampm");
let dat = new Date();
let daynum = dat.getDate();
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//Date
day.textContent = days[dat.getDay()];
month.textContent = months[dat.getMonth()];
switch(daynum){
  case 1:
  case 21:
  case 31:
    number.textContent = daynum + "st";
    break;
  case 2:
  case 22:
    number.textContent = daynum + "nd";
    break;
  case 3:
  case 23:
    number.textContent = daynum + "rd";
    break;
  default:
    number.textContent = daynum + "th";
    break;  
}

//Time
function chngtm(){
  let dat = new Date();
  let hours = dat.getHours();
  let mins = dat.getMinutes();
  let secs = dat.getSeconds();
  
  
  (hours < 10) ? hour.textContent = `0${hours}` : hour.textContent = hours;
  (mins < 10) ? min.textContent = `: 0${mins} :` : min.textContent = `: ${mins} :`;
  (secs < 10) ? sec.textContent = `0${secs}` : sec.textContent = `${secs}`;
  (hours < 12) ? ampm.textContent = "am" : ampm.textContent = "pm";
}

setInterval(chngtm, 1000);





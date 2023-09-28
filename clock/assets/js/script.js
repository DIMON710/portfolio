function Clock() {
let myDate = new Date();
let gMonth = myDate.getMonth();
let gDay = myDate.getDay();
let date = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate();
let hours = myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours();
let minutes = myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes();
let seconds = myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds();

let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let month = months[gMonth];
let day = days[gDay];

document.getElementById('month').innerHTML = month;
document.getElementById('day').innerHTML = day;
document.getElementById('date').innerHTML = date;
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;
};
setInterval(Clock, 1000);
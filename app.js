const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date (
    2021, 5, 26, 12, 30, 0
);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();


let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays [futureDate.getDay()];

giveaway.textContent = `Giveaway Ends On ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am `;

console.log(futureDate);

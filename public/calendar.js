window.addEventListener('DOMContentLoaded', main);

function main() {
    console.log('Hiloow fellow!');
}




let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calender = document.getElementById('calender');
const weekdays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

function load() {
    const dt = new Date();

    console.log(dt);

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

}

load();









/* 13:30 i videon  */


window.addEventListener('DOMContentLoaded', main);

function main() {
    console.log('Hiloow fellow!');
}



const calender = document.getElementById('calenderdays');

function createCalender(daysINMonth) {
    calender.innerHTML = '';

    for (let day = 1; day <= daysINMonth; day++) {
        const calenderDay = document.createElement('div');
        calenderDay.classList.add('calendarDay');
        calenderDay.textContent = day;
        calender.appendChild(calenderDay);


    }
}

createCalender(30);



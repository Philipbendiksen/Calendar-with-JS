let nav = 0;
let clicked = null;
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

const calendar = document.getElementById("calendarNumber");
const weekdays = [
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Tors",
  "Fred",
  "Lördag",
  "Söndag",
];

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  let paddingDays = dt.getDay() + 1;
  if (paddingDays === -1) {
    paddingDays = 4;
  }
  if (paddingDays === 7) {
    paddingDays = 0;
  }

  document.getElementById("Monthdisplay").innerText = `${dt.toLocaleDateString(
    "en-us",
    { month: "long" }
  )} ${year}`;

  calendar.innerHTML =
    ""; /* skapar en empty string som nollställer kalendern */

  updateTodosCount();

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement("div");
    const dayWithinSquare = document.createElement("div");
    dayWithinSquare.className = "dateCell";
    dayWithinSquare.dataset.cy = "calendar-cell-date";
    daySquare.classList.add("day");
    daySquare.dataset.cy = "calendar-cell";

    if (i > paddingDays) {
      // add id to calendar cell date, and a div that contains the number of todos for that date
      const dayId = `day-${year}-${month + 1}-${i - paddingDays}`;
      dayWithinSquare.id = dayId;
      dayWithinSquare.innerText = i - paddingDays;
      const totodCountValue = getTodoCount(dayId);
      if (totodCountValue !== "undefined" && totodCountValue !== "") {
        const todoCount = document.createElement("div");
        todoCount.className = "todoCount";
        todoCount.setAttribute("data-cy", "calendar-cell-todos");
        todoCount.textContent = totodCountValue;
        dayWithinSquare.innerText = i - paddingDays;
        dayWithinSquare.appendChild(todoCount);
      }

      daySquare.addEventListener("click", (e) => {
        let result = e.target.id.substring(4);
        updateToDoWithSelectedDate(result);
        renderDay(result);
      });

      if (i - paddingDays === day && nav === 0) {
        /* Ska visa aktuell dag  */

        daySquare.className = "currentDay day";
      }
    } else {
      daySquare.classList.add("padding");
    }
    daySquare.appendChild(dayWithinSquare);
    calendar.appendChild(
      daySquare
    ); /* appendChild används för att skriva ut JS på sidan */
  }
}

function initbuttons() {
  document.getElementById("nextMonth").addEventListener("click", () => {
    nav++;
    load();
  });

  document.getElementById("lastMonth").addEventListener("click", () => {
    nav--;
    load();
  });
}

initbuttons();

load();

/* Kalendern börjar inte på nr 1, kolla upp varför det inte fungerar och var 1an tagit vägen  */

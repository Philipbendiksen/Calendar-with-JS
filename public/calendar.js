let nav = 0;
let clicked = null;
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

const calendar = document.getElementById("calenderNumber");
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

  console.log(
    daysInMonth
  ); /* kollar så antal dagar i månaden stämmer (stämmer) */

  const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  console.log(
    dateString
  ); /*  kollar vilken dag som är första dagen i månaden, vilket stämmer, men kanlendern börjar inte där  */

  let paddingDays = dt.getDay() - 1;
  if (paddingDays === -1) {
    paddingDays = 6;
  }

  document.getElementById("Monthdisplay").innerText = `${dt.toLocaleDateString(
    "en-us",
    { month: "long" }
  )} ${year}`;

  calendar.innerHTML =
    ""; /* skapar en empty string som nollställer kalendern */

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement("div");
    const dayWithinSquare = document.createElement("div");
    dayWithinSquare.dataset.cy = "calendar-cell-date";
    daySquare.classList.add("day");
    daySquare.dataset.cy = "calendar-cell";

    if (i > paddingDays) {
      dayWithinSquare.innerText = i - paddingDays;

      daySquare.addEventListener("click", () => console.log("click"));

      if (i - paddingDays === day && nav === 0) {
        /* Ska visa aktuell dag  */

        daySquare.className = "currentDay";
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

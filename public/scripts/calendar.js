let nav = 0;

function initCalendar() {
  initbuttons();
  renderCalendar();
}

function renderCalendar() {
  const date = new Date();
  const calendar = document.getElementById("calendarNumber");

  if (nav !== 0) {
    date.setMonth(new Date().getMonth() + nav);
  }

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let paddingDays = firstDayOfMonth.getDay() - 1;
  if (paddingDays === 6) {
    paddingDays = 0;
  }
  if (paddingDays === -1) {
    paddingDays = 6;
  }

  document.getElementById("Monthdisplay").innerText = `${dt.toLocaleDateString(
    "sv-us",
    { month: "long" }
  )} ${year}`;

  calendar.innerHTML = "";

  updateTodosCount();

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement("div");
    const dayWithinSquare = document.createElement("div");
    dayWithinSquare.className = "dateCell";
    dayWithinSquare.dataset.cy = "calendar-cell-date";
    daySquare.classList.add("day");
    daySquare.dataset.cy = "calendar-cell";

    if (i > paddingDays) {
      // Add id to calendar cell date, and a div that contains the number of todos for that date
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
        const clickedDate = e.target.id.substring(4);
        const convertedClickedDate = convertToDate(clickedDate);
        renderSelectedDate(convertedClickedDate);
      });

      // Adds class to active day.
      if (i - paddingDays === day && nav === 0) {
        daySquare.className = "currentDay day";
      }
    } else {
      daySquare.classList.add("padding");
    }
    daySquare.appendChild(dayWithinSquare);
    calendar.appendChild(daySquare);
  }
}
// Initiate month-control buttons
function initbuttons() {
  document.getElementById("nextMonth").addEventListener("click", () => {
    nav++;
    renderCalendar();
  });
  document.getElementById("lastMonth").addEventListener("click", () => {
    nav--;
    renderCalendar();
  });
}

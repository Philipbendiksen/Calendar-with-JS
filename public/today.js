function updateActiveDate(date) {
  const activeDateSpan = document.getElementById("activeDate");
  activeDateSpan.textContent = date;
}

function todayString() {
  const monthNames = [
    "Januari",
    "Februari",
    "Maj",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
  ];
  const now = new Date();
  const year = now.getFullYear();
  const month = monthNames[now.getMonth()];
  const day = now.getDate();
  return String(day) + " " + month + " " + String(year);
}

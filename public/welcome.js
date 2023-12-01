function initWelcomeSegment() {
  document
    .querySelector("header")
    .appendChild(createWelcomeSegment("welcomeSegment-mobile"));
  document
    .querySelector("aside")
    .prepend(createWelcomeSegment("welcomeSegment-desktop"));
}
function createCommonHeader() {
  const header = document.createElement("header");
  document.body.prepend(header);

  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  titleDiv.innerHTML = "SEPO kalender";
  header.appendChild(titleDiv);
}

function createWelcomeSegment(welcomeSegmentClassName) {
  const welcomeSegment = document.createElement("div");
  welcomeSegment.className = welcomeSegmentClassName;
  welcomeSegment.setAttribute("data-cy", "welcome-segment");

  const dayAndIconDiv = document.createElement("div");
  dayAndIconDiv.className = "dayAndSeasonIcon";
  welcomeSegment.appendChild(dayAndIconDiv);

  const welcomeDayDiv = document.createElement("div");
  welcomeDayDiv.className = "welcomeDay";
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saterday",
    "Sunday",
  ];
  const now = new Date();
  const day = dayNames[now.getDay() - 1];
  welcomeDayDiv.textContent = day;
  dayAndIconDiv.appendChild(welcomeDayDiv);

  const iconDiv = document.createElement("div");
  iconDiv.className = "seasonalIcon";
  iconDiv.textContent = "⛄️❄️";
  dayAndIconDiv.appendChild(iconDiv);

  const welcomeTimeDiv = document.createElement("div");
  welcomeTimeDiv.className = "welcomeTime";
  updateWelcomeTime();
  welcomeSegment.appendChild(welcomeTimeDiv);

  const welcomeDateDiv = document.createElement("div");
  welcomeDateDiv.className = "welcomeDate";
  updateWelcomeDate();
  welcomeSegment.appendChild(welcomeDateDiv);

  function updateWelcomeTime() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const timeString = hour + ":" + (minutes < 10 ? "0" : "") + minutes;
    welcomeTimeDiv.textContent = timeString;
  }
  setInterval(updateWelcomeTime, 1000);

  function updateWelcomeDate() {
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const dateString = year + "-" + month + "-" + date;
    welcomeDateDiv.textContent = dateString;
  }

  setInterval(updateWelcomeDate, 1000); //  updates every second

  return welcomeSegment;
}

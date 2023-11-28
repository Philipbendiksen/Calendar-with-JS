function createWelcomeSegment() {
  const header = document.createElement("header");
  document.body.prepend(header);

  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  titleDiv.innerHTML = "SEPO kalender";
  header.appendChild(titleDiv);

  const iconDiv = document.createElement("div");
  iconDiv.className = "seasonalIcon";
  iconDiv.textContent = "⛄️❄️";
  header.appendChild(iconDiv);

  const welcomeMobile = document.createElement("div");
  welcomeMobile.className = "welcomeSegment-mobile";
  welcomeMobile.setAttribute("data-cy", "welcome-segment");
  header.appendChild(welcomeMobile);

  const welcomeDayDiv = document.createElement("div");
  welcomeDayDiv.className = "welcomeDay";
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wedensday",
    "Thursday",
    "Friday",
    "Saterday",
    "Sunday",
  ];
  const now = new Date();
  const day = dayNames[now.getDay()];
  welcomeDayDiv.textContent = day;
  welcomeMobile.appendChild(welcomeDayDiv);

  const welcomeTimeDiv = document.createElement("div");
  welcomeTimeDiv.className = "welcomeTime";
  welcomeMobile.appendChild(welcomeTimeDiv);

  const welcomeDateDiv = document.createElement("div");
  welcomeDateDiv.className = "welcomeDate";

  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const dateString = year + "-" + month + "-" + date;
  welcomeDateDiv.textContent = dateString;
  welcomeMobile.appendChild(welcomeDateDiv);

  function updateWelcomeTime() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const timeString = hour + ":" + (minutes < 10 ? "0" : "") + minutes;
    welcomeTimeDiv.textContent = timeString;
  }
  updateWelcomeTime();

  setInterval(updateWelcomeTime, 60000); // 60000 milliseconds = 1 minute
}

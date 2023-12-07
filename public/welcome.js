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

  const welcomeDateDiv = document.createElement("div");
  welcomeDateDiv.className = "welcomeDate";
  updateWelcomeDate();
  welcomeSegment.appendChild(welcomeDateDiv);

  function updateWelcomeDate() {
    const now = new Date();
    const formatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const dateString = now
      .toLocaleDateString("sv", formatOptions)
      .replace(/,/g, ""); // Remove commas
    welcomeDateDiv.textContent = dateString;
  }

  setInterval(updateWelcomeDate, 1000); //  updates every second

  const timeAndIconDiv = document.createElement("div");
  timeAndIconDiv.className = "timeAndSeasonIcon";
  welcomeSegment.appendChild(timeAndIconDiv);

  /* const welcomeDayDiv = document.createElement("div");
  welcomeDayDiv.className = "welcomeDay";
  const dayNames = [
    "sun", 
    "mon", 
    "tue", 
    "wed", 
    "thu", 
    "fri", 
    "sat"];
  const now = new Date();
  const day = dayNames[now.getDay() - 1];
  welcomeDayDiv.textContent = day;
  dayAndIconDiv.appendChild(welcomeDayDiv); */

  const welcomeTimeDiv = document.createElement("div");
  welcomeTimeDiv.className = "welcomeTime";
  updateWelcomeTime();
  timeAndIconDiv.appendChild(welcomeTimeDiv);

  function updateWelcomeTime() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const timeString = `${hour < 10 ? "0" : ""}${hour}:${
      minutes < 10 ? "0" : ""
    }${minutes}`;
    welcomeTimeDiv.textContent = timeString;
  }
  setInterval(updateWelcomeTime, 1000);

  const iconDiv = document.createElement("div");
  iconDiv.className = "seasonalIcon";
  iconDiv.textContent = "⛄️❄️";
  timeAndIconDiv.appendChild(iconDiv);

  return welcomeSegment;
}

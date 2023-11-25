function createWelcomeSegment() {
    const header = document.createElement('header');
 
    document.body.prepend(header);

    const titleDiv = document.createElement("div");
    titleDiv.className = "title";
    titleDiv.innerHTML = "SEPO kalender";
    
    header.appendChild(titleDiv); 

    const iconDiv = document.createElement("div");
    iconDiv.className = "seasonalIcon";
    iconDiv.textContent = "⛄️❄️";

    header.appendChild(iconDiv);
}

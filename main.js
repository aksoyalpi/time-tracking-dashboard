const timeframeSelection = document.getElementById("timeframe-selection");
let timeframe = "weekly";


fetch("/data.json").then((response) => {
    if(!response.ok) return console.log("Oops! Something went wrong.");

    return response.json();
}).then((data) => {

});

const handleTimeframeChange = (e) => {
    timeframe = e.target.textContent.toLowerCase();
    timeframeSelection.dataset.timeframe = timeframe;
}

timeframeSelection.addEventListener("click", handleTimeframeChange);
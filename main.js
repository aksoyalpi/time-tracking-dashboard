const timeframeSelection = document.getElementById("timeframe-selection");
const activityCards = document.getElementsByClassName("activity");
const activities = ["work", "play", "study", "exercise", "social", "self-care"]
let timeframe = "weekly";
let json;


fetch("/data.json").then((response) => {
    if(!response.ok) return console.log("Oops! Something went wrong.");

    return response.json();
}).then((data) => {
    json = data;
});

const changeActivityStats = (activity) => {
    const data = json.filter((item) => {
        return item.title.toLowerCase() === activity;
    })[0];
    console.log(data);
    const newStats = data["timeframes"][timeframe];
    const current = newStats["current"];
    const previous = newStats["previous"];

    // gets card element for given activity
    const card = activityCards[activities.indexOf(activity)];
    card.querySelector("#current").textContent = current +"hrs";


    let word;
    if (timeframe === "daily") word = "Day";
    else if (timeframe === "weekly") word = "Week";
    else word = "Month";

    card.querySelector("#previous").textContent = "Last " + word + " - " + previous + "hrs";

}

const handleTimeframeChange = (e) => {
    timeframe = e.target.textContent.toLowerCase();
    timeframeSelection.dataset.timeframe = timeframe;

    activities.forEach(changeActivityStats);
}

timeframeSelection.addEventListener("click", handleTimeframeChange);
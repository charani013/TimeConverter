let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg")
let convertBtnJs = document.getElementById("convertBtn");

convertBtn.addEventListener("click", function() {
    if (hoursInput.value === "") {
        errorMsg.textContent = "Please enter a valid number of hours";
        timeInSeconds.textContent = "";
        timeInSeconds.classList.remove("result-bg", "paragraph-element", "mt-5", "pt-2");
    } else if (minutesInput.value === "") {
        errorMsg.textContent = "Please enter a valid number of minutes";
        timeInSecondsValues.textContent = ""
        timeInSeconds.classList.remove("result-bg", "paragraph-element", "mt-5", "pt-2")
    } else {
        errorMsg.textContent = ""
        timeInSecondsValues();
    }
})

function timeInSecondsValues() {
    let timeInSecondsValuesJs = ((parseInt(hoursInput.value) * 60 + parseInt(minutesInput.value)) * 60)
    timeInSeconds.textContent = timeInSecondsValuesJs + "s"
    timeInSeconds.classList.add("result-bg", "paragraph-element", "mt-5", "pt-2")
}
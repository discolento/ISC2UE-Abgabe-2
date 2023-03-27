let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

let dateSiteLoad = new Date();
//document.getElementById('zeit').innerHTML = datum;
function currentDay() {
    // console.log("Current Day Called")
    let date = new Date()
    let month = months[date.getMonth()]
    let day = addLeadingZero(date.getDate())
    let year = date.getFullYear()
    let weekday = days[date.getDay()]
    // console.log(weekday + ", " + month + " " + day + ", " + year)
    document.getElementById("date").innerText = weekday + ", " + month + " " + day + ", " + year
}


function currentTime() {
    console.log("Current Time Called")
    let time = new Date()
    let hours = addLeadingZero(time.getHours())
    let minutes = addLeadingZero(time.getMinutes())
    let seconds = addLeadingZero(time.getSeconds())
    document.getElementById("time").innerText = hours + ":" + minutes + ":" + seconds

}


function addLeadingZero(value) {
    if (value < 10){
        return "0" + value
    } else {
        return value
    }
}


function timeOnPage() {
    let actualDate = new Date()
    // console.log(dateSiteLoad.getTime())
    // console.log(actualDate.getTime())
    let timeDifference = new Date(actualDate.getTime() - dateSiteLoad.getTime())
    // console.log(timeDifference.toTimeString())
    let hours = addLeadingZero(timeDifference.getUTCHours())
    let minutes = addLeadingZero(timeDifference.getUTCMinutes())
    let seconds = addLeadingZero(timeDifference.getUTCSeconds())
    alert("You have been on this page for " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds.")
}

function refresh() {
    window.location.reload();
}

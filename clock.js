let userName = prompt("isminiz nedir?")
let myName = document.querySelector("#myName")
myName.innerHTML = userName

function time() {
    let now = new Date()
        //hour
    let hour = now.getHours()
        //minute
    let minute = now.getMinutes()
        //second
    let second = now.getSeconds()
        //day
    let day = new Date()
        //days of week
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    let innerId = document.querySelector("#myClock")

    innerId.innerHTML = hour + ":" + minute + ":" + second + " " + days[day.getDay()]
}

let now = setInterval(time, 100)

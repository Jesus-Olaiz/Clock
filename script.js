const startTime = document.getElementById("start")
const timer = document.getElementById("test")
const workMin = document.querySelector(".wMin")
const workSec = document.querySelector(".wSec")
const breakMin = document.querySelector(".bMin")
const breakSec = document.querySelector(".bSec")
const bAdd = document.querySelector("#bTimeUp")
const bSub = document.querySelector("#bTimeDown")
const wAdd = document.querySelector("#wTimeUp")
const wSub = document.querySelector("#wTimeDown")


breakSec.textContent = 00;

//start button functionality 


startTime.addEventListener("click", () => {
    pomodoro();
})


//Time removal and addition buttons 
bAdd.addEventListener("click", () => {
    let bMin = parseInt(breakMin.textContent)
    let bSec = parseInt(breakSec.textContent)
    if (bSec>=45){
        breakSec.textContent = "00"
        breakMin.textContent = bMin + 20;
    }else{
        breakSec.textContent = bSec + 15
    }

})






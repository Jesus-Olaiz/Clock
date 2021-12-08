const startTime = document.getElementById("start")
const stopTime = document.getElementById("stop")
const timer = document.getElementById("test")
const bAdd = document.querySelector("#bTimeUp")
const bSub = document.querySelector("#bTimeDown")
const wAdd = document.querySelector("#wTimeUp")
const wSub = document.querySelector("#wTimeDown")
const workMin = document.querySelector(".wMin")
const workSec = document.querySelector(".wSec")
const breakMin = document.querySelector(".bMin")
const breakSec = document.querySelector(".bSec")


let startTimeValue = 0;


stopTime.addEventListener("click", () => {
    // if you add a boolean as a parameter to the pomodoro function it is possible to achieve a true pause of the loop. Just a small consideration and idea from you, yourself, and I. 
    startTimeValue = 0;
    console.log(startTimeValue)
    pomodoro();
})

//Setting wait time between pomodoros
let setBreakTime = [breakMin.textContent, breakSec.textContent]
let setWorkTime =  [workMin.textContent, workSec.textContent]
        var a = setBreakTime[0]
        var b = setBreakTime[1]
        var c = setWorkTime[0]
        var d = setWorkTime[1]

        let waitTime = ((a*60000)+(b*1000)) + ((c*60000)+(d*1000))



//start button functionality 
startTime.addEventListener("click", () => {
    
    startTimeValue = 1
    console.log(startTimeValue)

    function delay(time){
        return new Promise(resolve => setTimeout(resolve,time));
}
    async function runCycles(){
        pomodoro()
        await delay(waitTime);
        pomodoro();
    }

    runCycles();
    
})










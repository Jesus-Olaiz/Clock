//Time removal and addition buttons for the Break timer
bAdd.addEventListener("click", () => {
    let bMin = parseInt(breakMin.textContent)
    let bSec = parseInt(breakSec.textContent)
    if (bSec>=45){
        breakSec.textContent = "00"
        breakMin.textContent = bMin + 15;
    }else{
        breakSec.textContent = bSec + 15
    }

})
bSub.addEventListener("click", () => {
    let bMin = parseInt(breakMin.textContent)
    let bSec = parseInt(breakSec.textContent)
    if (bSec===0 && bMin>0){
        breakMin.textContent = bMin - 15
        bSec = 60
        breakSec.textContent = bSec - 15
    
    }else if (bSec===0 && bMin===0){
        breakSec.textContent = "00"
        breakMin.textContent= "00"


    }else {
        breakSec.textContent = bSec - 15
    }

})

//Time addition and removal for the Work timer

wAdd.addEventListener("click", () => {
    let wMin = parseInt(workMin.textContent)
    let wSec = parseInt(workSec.textContent)
    if (wSec>=45){
        workSec.textContent = "00"
        workMin.textContent = wMin + 15;
    }else{
        workSec.textContent = wSec + 15
    }

})

wSub.addEventListener("click", () => {
    let wMin = parseInt(workMin.textContent)
    let wSec = parseInt(workSec.textContent)
    if (wSec===0 && wMin>0){
        workMin.textContent = wMin - 15
        wSec = 60
        workSec.textContent = wSec - 15
    
    }else if (wSec===0 && wMin===0){
        workSec.textContent = "00"
        workMin.textContent= "00"


    }else {
        workSec.textContent = wSec - 15
    }

})
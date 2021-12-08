

function pomodoro() {

        //callback function to wait for set time
        function delay(time){
            return new Promise(resolve => setTimeout(resolve,time));
    }

            sec = parseInt(workSec.textContent)
            min = parseInt(workMin.textContent)


        async function countdown() {
            if(startTimeValue === 1){
                do {

                    if (min===0 && sec===0){
                        breakMin.textContent = 10
                        breakSec.textContent = 10 
                        alert("Start Break Timer?")
                        break;
    
                    }else{
                    if ( sec === 0 ) {      
            //starting seconds over and subtracting a minute once seconds = 0
                            console.log(sec)
                        
                            min--
                            sec = 60
                    
                            workMin.textContent = min
                            workSec.textContent = "0"+sec
                        
                        
                        }else{
                            sec--
                            workSec.textContent = sec
                            await delay(1000)
                            console.log(sec)
    
                // making the seconds double digits once they become singular
                            if (sec < 10){
                                workSec.textContent = "0"+sec
                            }
                            
                        } 
                    }
                    
                } while (min>=0);
    
    //BEGINING OF BREAK TIMER
                min = parseInt(breakMin.textContent)
                sec = parseInt(breakSec.textContent)
                do {
                    if (min===0 && sec===0){
                        workMin.textContent = 10
                        workSec.textContent = 10
                        alert("Start Next Pomodoro?")
                        break;
    
                    }else{
                        if ( sec === 0 ) {      
                            //starting seconds over and subtracting a minute once seconds = 0
                                            console.log(sec)
                                        
                                            min--
                                            
                                    
                                            breakMin.textContent = min
                                            breakSec.textContent = "0"+sec
                                            sec = 60
                                        
                                        }else{
                                            sec--
                                            breakSec.textContent = sec
                                            await delay(1000)
                                            console.log(sec)
                    
                                // making the seconds double digits once they become singular
                                            if (sec < 10){
                                                breakSec.textContent = "0"+sec
                                            }
                                            
                                        }
                    } 
                    
                } while (min>=0);
            }else {
                alert("Click OK to Continue")
            }
        }
        countdown();
          
    
}

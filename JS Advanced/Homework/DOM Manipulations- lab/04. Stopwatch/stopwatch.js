function stopwatch() {
    let startButton=document.getElementById('startBtn');
    let stopButton=document.getElementById('stopBtn');

    startButton.addEventListener('click',timerFunc=>{
        let time=document.getElementById('time');
        time.innerHTML='00:00';
        
        stopButton.disabled = false;
        startButton.disabled=true;
        let timer = setInterval(handler,1000);

        let countSec=0;
        let countMin=0;
        function handler(){
            countSec++;
            if(countSec===60){
                countMin++;
                countSec=0;
            }
            time.innerHTML=`${countMin<10?`0${countMin}`:countMin}:${countSec<10?`0${countSec}`:countSec}`;
        }

        stopButton.addEventListener('click',(e)=>{
            stopButton.disabled = true;
            startButton.disabled=false;        
            clearInterval(timer);     
        });
    });
}
function attachEventsListeners() {
    let $daysInput=document.getElementById('days');
    let $hoursInput=document.getElementById('hours');
    let $minutesInput=document.getElementById('minutes');
    let $secondsInput=document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click',(e)=>{
        let days=$daysInput.value;
        $hoursInput.value=days*24;
        $minutesInput.value=days*24*60;
        $secondsInput.value=days*24*60*60;
    });
    document.getElementById('hoursBtn').addEventListener('click',()=>{
        let hours=$hoursInput.value
        $daysInput.value=hours/24;
        $minutesInput.value=hours*60;
        $secondsInput.value=hours*60*60;
    });
    document.getElementById('minutesBtn').addEventListener('click',()=>{
        let minutes=$minutesInput.value;
        $daysInput.value=minutes/60/24;
        $hoursInput.value=minutes/60;
        $secondsInput.value=minutes*60;
    });
    document.getElementById('secondsBtn').addEventListener('click',()=>{
        let seconds=$secondsInput.value;
        $daysInput.value=seconds/60/60/24;
        $hoursInput.value=seconds/60/60;
        $minutesInput.value=seconds/60;
    });
}
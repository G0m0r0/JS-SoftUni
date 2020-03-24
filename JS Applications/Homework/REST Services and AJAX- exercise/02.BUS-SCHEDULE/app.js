function solve() {
    let departButton=document.getElementById('depart');
    let arriveButton=document.getElementById('arrive');
    let infoStop=document.getElementById('info').getElementsByTagName('span')[0];
    let currentStop='depot';
    let nextStop='';

    function depart() {
       fetch(`https://judgetests.firebaseio.com/schedule/${currentStop}.json`)
       .then(x=>x.json())
       .then(x=>{       
           console.log(x.name);
            departButton.disabled=true;
            arriveButton.disabled=false;
            infoStop.textContent=`Next stop ${x.name}`

            nextStop=x.next;
       })
    }

    function arrive() {
        departButton.disabled=false;
        arriveButton.disabled=true;

        infoStop.textContent=`Arriving at ${currentStop}`;
        currentStop=nextStop;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
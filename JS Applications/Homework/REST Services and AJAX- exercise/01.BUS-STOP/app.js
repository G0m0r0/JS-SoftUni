function getInfo() {
    let id=document.getElementById('stopId');
    let stopName=document.getElementById('stopName');
    let buses=document.getElementById('buses');

    for (let i = 0; i < buses.childNodes.length; i++) {
        buses.removeChild(buses.childNodes[i--])        
    }


   fetch(`https://judgetests.firebaseio.com/businfo/${id.value}.json`)
    .then(x=>x.json())
    .then(x=>{     
        let busesAll=x.buses;
        let name=x.name;
        
        if(busesAll===undefined){
            stopName.innerHTML="Error";
            return;
        }
       
        stopName.textContent=name;
        Object.entries(busesAll).forEach(([busId,time])=>{
            let li=document.createElement('li');
            li.innerHTML=`Bus ${busId} arrives in ${time}`;
            buses.appendChild(li);
        });                  
    });
}
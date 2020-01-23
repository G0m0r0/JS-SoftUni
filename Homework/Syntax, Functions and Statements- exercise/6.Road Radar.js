//function speedLimit([speed,area]);
function speedLimitByArea(input){
    let speed=input[0];
    let area=input[1];

    let limit=0;

    if(area==="motorway"){
        limit=130;
    }
    else if(area==="interstate"){
        limit=90;
    }
    else if(area==="city"){
        limit=50;
    }
    else if(area==="residential"){
        limit=20;
    }

    if(limit+40<speed)
    {
        console.log("reckless driving");
    }
    else if(limit+20<speed)
    {
        console.log("excessive speeding");
    }
    else if(limit<speed)
    {
        console.log("speeding");
    }
}

speedLimitByArea([120, 'interstate']);
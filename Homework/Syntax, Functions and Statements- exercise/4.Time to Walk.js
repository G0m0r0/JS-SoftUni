function calculateDistanceToUniversity(steps,footprintLength,speedInKmH){
    let distanceToUniversity=steps*footprintLength;
    let minutes=distanceToUniversity/speedInKmH/1000*60;
    
    let totalRest=Math.floor( distanceToUniversity/500);
    //minutes+totalRest;

    let totalTimeInSeconds=Math.ceil( (totalRest+minutes)*60);
    let result=new Date(null,null,null,null,null,totalTimeInSeconds);

    return result.toTimeString().split(' ')[0];
}

console.log(calculateDistanceToUniversity(4000, 0.60, 5));
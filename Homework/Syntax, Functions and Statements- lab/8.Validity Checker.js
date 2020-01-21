function validityPointsChecker(params){
    x1=params[0];
    y1=params[1];
    x2=params[2];
    y2=params[3];
    
    if(!Number.isInteger(validPoint(x1,y1,0,0)))
    {
       console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    else 
    {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }

    if(!Number.isInteger(validPoint(0,0,x2,y2)))
    {
       console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    else 
    {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }

    if(!Number.isInteger(validPoint(x1,y1,x2,y2)))
    {
       console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
    else 
    {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }


    function validPoint(a,b,c,d)
    {
         return Math.sqrt( (a-c)*(a-c)+(b-d)*(b-d));
    } 
}

validityPointsChecker([2, 1, 1, 1]);
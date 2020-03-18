function calculateCircleArea(radius)
{
    if(typeof(radius) === 'number')
    {
        console.log((Math.PI*radius*radius).toFixed(2));
        return;
    }

    console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`);
}

calculateCircleArea('t');

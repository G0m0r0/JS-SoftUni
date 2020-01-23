function arrayLength(a,b,c)
{
    let tokens=[a,b,c];
    let length=tokens.join("").length;
    let averageLenght=length/tokens.length;

    console.log(length);
    console.log(Math.round(averageLenght));
}

arrayLength('pasta', '5', '22.3');
function largerOfThreeNumbers(a,b,c)
{
    function largerOfTwoNumbers(d,e)
    {
        if(d>e)
         return d;
        else
         return e;
    }

    let num=largerOfTwoNumbers(a,b);
    console.log(`The largest number is ${largerOfTwoNumbers(num,c)}.`);
}

largerOfThreeNumbers(5, -3, 16);
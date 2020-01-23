function sumOfNumbers(num1,num2)
{
    let sum=0;
    num1=+num1;
    num2=+num2;

    for(let i=num1; i<=num2; i++)
    {
        sum+=i;
    }


    console.log(sum);
}

sumOfNumbers('-8', '20');
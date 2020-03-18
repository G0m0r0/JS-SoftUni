function sumFirstAndLast(input)
{
    let first=+input[0];
    let last=+input[input.length-1];

    let sum=first+last;

    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
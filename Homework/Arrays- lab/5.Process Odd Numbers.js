function processOddNumbers(array)
{
    const newArray=[];
    for (let i = 1; i < array.length; i+=2) {
        newArray.push(array[i]*2);
    }

    console.log(newArray.reverse());
}

processOddNumbers([10, 15, 20, 25]);
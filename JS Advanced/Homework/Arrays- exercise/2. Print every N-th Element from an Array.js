function printEveryNthElement(array)
{
    let nthElement=+array.pop();

    for (let i = 0; i < array.length; i+=nthElement) {
        console.log(array[i]);        
    }
}

printEveryNthElement(['5', '20', '31', '4', '20', '2']);
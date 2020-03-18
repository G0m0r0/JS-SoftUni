function arrayOperations(array)
{
    let sumInverse=0;
    array.forEach(element => {
        sumInverse+=1/element;
    });

    console.log(array.reduce((a, b) => a + b, 0));
    console.log(sumInverse);
    console.log(array.join(""));
}

arrayOperations([1, 2, 3]);
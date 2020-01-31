function findEvenPositions(input)
{
    let str=input[0]+" ";
    for(let i = 2; i < input.length; i+=2) {
        str+=input[i]+" ";
    }

    console.log(str.trim())
}


findEvenPositions(['20', '30', '40']);
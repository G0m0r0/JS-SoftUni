function negativePositiveNum(input)
{
    const newArray=[];
    for (let i = 0; i < input.length; i++) {
        if(input[i]<0){
            newArray.unshift(input[i]);
        }else
        {
            newArray.push(input[i]);
        }        
    }

    console.log(newArray.join("\n"));
}

negativePositiveNum([7, -2, 8, 9]);
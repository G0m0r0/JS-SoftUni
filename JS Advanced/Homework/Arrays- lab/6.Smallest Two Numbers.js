function smallestOfTwoNumbers(array)
{
    if(array.length==1)
    {
        console.log(`${array[0]}`);
        return;
    }
    let numToCompare1=Number.MAX_SAFE_INTEGER;
    let index=0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]<numToCompare1){
            numToCompare1=array[i];
            index=i;
        }        
    }
    array.splice(index--,1);


    let numToCompare2=Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < array.length; j++) {
        if(array[j]<numToCompare2){
            numToCompare2=array[j];
            index=j;            
        }
    }
    array.splice(index--,1);
    
    console.log(numToCompare1+" "+numToCompare2);
}

smallestOfTwoNumbers([30, 15, 50, 5, 1, 1]);
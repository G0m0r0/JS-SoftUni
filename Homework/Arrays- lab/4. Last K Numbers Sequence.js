function lastKelements(n,k)
{
    const newArray=[];

    newArray.push(1);
    
    for (let i = 1; i < n; i++) {
        let sumToPush=0;
        for (let j = newArray.length-1; j > newArray.length-k-1; j--) {
            if(j<0)
            {
                break;
            }
                sumToPush+=newArray[j];                            
        }    
        newArray.push(sumToPush);
    }

    return newArray.join(" ");
}

console.log(lastKelements(6,3));
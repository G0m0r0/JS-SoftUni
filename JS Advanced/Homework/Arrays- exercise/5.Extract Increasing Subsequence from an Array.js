function extractIncreasingSubSequence(array)
{
    let element=array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i]>=element)
        {
            console.log(array[i]);
            element=array[i];
        }
        
    }
}

extractIncreasingSubSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);

function extractWithReduce(array)
{
   let output= array.reduce((acc,curr)=>{
        const lastElement=acc[acc.length-1];

        if(curr>=lastElement||lastElement===undefined)
        {
            acc.push(curr)
        }

        return acc;
    },[])

    console.log(output.join('\n'));
}
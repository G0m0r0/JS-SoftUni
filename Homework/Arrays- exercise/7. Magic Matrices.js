function checkIfMatrixIsMagical(matrix)
{
    const num=+matrix[0].reduce((a,c)=>a+c,0);

    for (let i = 1; i < matrix.length; i++) {
        if(+matrix[i].reduce((a,c)=>a+c)!==num)
        {
            return console.log("false");
        }        
    }
    
    if(matrix.length>1)
    for (let i = 0; i < matrix.length; i++) {
        let currentNum=0;
        for (let j = 0; j < matrix[i].length; j++) {
             currentNum+=+matrix[j][i];
        }
        if(currentNum!==num)
        {
            return console.log("false");
        }
    }

    return console.log("true");
}

checkIfMatrixIsMagical([
    [0,5,0],
    [5,0,0],
    [0,5,0]]);

function magicMatrixWithReduce(input)
{
   let arr=[];

   for(let i in input)
   {
       const rowSum=input[i].reduce((a,b)=>a+b,0);
       const colSum=input.reduce((acc,cur)=>{
           acc+=cur[i];
           return acc;
       },0);

       if(rowSum!==colSum||(arr.length>0&&(rowSum!==arr[0]||colSum!==arr[1]))) {
           return false;
       }
       else if(i==='0'){
           arr.push(rowSum,colSum);
       }

   }
   return true;
}
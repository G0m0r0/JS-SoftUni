function checkIfMatrixIsMagical(matrix)
{
    const num=+matrix[0].reduce((a,c)=>a+c);

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

checkIfMatrixIsMagical([[0,0],[0,1]]);
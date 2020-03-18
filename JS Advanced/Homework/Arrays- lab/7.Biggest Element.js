function findBiggestElementInMatrix(matrix2D){    
    let minElement=Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < matrix2D.length; i++) {
        for (let j = 0; j < matrix2D[i].length; j++) {
            if(matrix2D[i][j]>minElement){
                minElement=matrix2D[i][j];
            }            
        }        
    }

    console.log(minElement);
}

findBiggestElementInMatrix([[20, 50, 10],
    [8, 33, 145]]
   );
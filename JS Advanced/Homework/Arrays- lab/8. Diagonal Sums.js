function diagonalSum(array2D)
{
    let diagonalSumMain=0;
    let diagonalsumsecond=0;
    for (let i = 0; i < array2D.length; i++) {
        for (let j = 0; j < array2D[i].length; j++) {
            if(i==j)
            {
                diagonalSumMain+=array2D[i][j];
            }  
            if(i+j==array2D.length-1)          
            {
                diagonalsumsecond+=array2D[i][j];
            }
        }        
    }

    console.log(diagonalSumMain+" "+diagonalsumsecond);
}

diagonalSum([[20, 40],
    [10, 60]]
   );
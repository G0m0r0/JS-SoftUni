function equalPairs(array2D)
{
    let countPairs=0;

    for (let i = 0; i < array2D.length; i++) {
        let n=i;
        for (let j = 0; j < array2D[i].length; j++) {
            let m=j;
        if(Valid(++n,j)){
            if(array2D[i][j]===array2D[n][j])
            {
                countPairs++;
            }
        }
        n--;
        if(Valid(--n,j)){
            if(array2D[i][j]===array2D[n][j])
            {
                countPairs++;
            }
        }
        n++;
        if(Valid(i,++m)){
            if(array2D[i][j]===array2D[i][m])
            {
                countPairs++;
            }
        }
        m--;
        if(Valid(i,--m)){
            if(array2D[i][j]===array2D[i][m])
            {
                countPairs++;
            }
        }
        m++;
    }
    }

    function Valid(i,j){
        if(i<0||j<0)
        {
            return false;
        }
        if(i>array2D.length-1||j>array2D[i].length-1)
        {
            return false;
        }
        return true;
    }

    console.log(countPairs/2);
}

equalPairs([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])
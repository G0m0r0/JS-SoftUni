function diagonalSumChangeOtherElements(input)
{
    const matrix=[];
    for (let i = 0; i < input.length; i++) {
        matrix.push(input[i].split(" ").map(function(num){
            return +num;
        }));
    }
    
    let mainDiagonal=0;
    let secondDiagonal=0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(i===j)
            {
                mainDiagonal+=matrix[i][j];
            }
            if(i+j===matrix.length-1)
            {
                secondDiagonal+=matrix[i][j];
            }
        }        
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(i===j)
            {
                continue;
            }
            if(i+j===matrix.length-1)
            {
                continue;
            }

            matrix[i][j]=mainDiagonal;
        }        
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }

}

diagonalSumChangeOtherElements(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);
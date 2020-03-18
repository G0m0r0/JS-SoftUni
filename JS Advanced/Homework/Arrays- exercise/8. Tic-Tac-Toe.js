function tictactoe(moves)
{
    const matrix=initializeMatrix();

    let countOfMoves=0;
    while (moves.length>0) {
        let move=moves.shift().split(" ");
        let x=+move[0];
        let y=+move[1];

        if(matrix[x][y]===false)
        {
            if(countOfMoves%2===0)
            matrix[x][y]="X";
            else 
            matrix[x][y]="O";
        }
        else 
        {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        if(checkIfSomebodyWins(matrix)){
            console.log(`Player ${checkIfSomebodyWins(matrix)} wins`);
            break;
        }

        if(countOfMoves++===9)
        {
            console.log("The game ended! Nobody wins :(");
        }
    }

    printMatrix(matrix);
}

//tictactoe(["0 0","0 0","1 1","0 1","1 2","0 2","2 2","1 2","2 2","2 1"]);

function checkIfSomebodyWins(matrix)
{
    for (let i = 0; i < matrix.length; i++) {
        if(matrix[i][0]===matrix[i][1]&&matrix[i][2]===matrix[i][0])
        {
            if(matrix[i][0]==='X')
            return 'X';
            else if(matrix[i][0]==='O')
            return 'O';
        }
    }  
    for (let i = 0; i < matrix.length; i++) {
        if(matrix[0][i]===matrix[1][i]&&matrix[2][i]===matrix[0][i])
        {
            if(matrix[0][i]==='X')
            return 'X';
            else if(matrix[0][i]==='O')
            return 'O';
        }
    }  

        //console.log(matrix[0][0]);
        //console.log(typeof(matrix[0][0]));
        if(matrix[0][0]===matrix[1][1]&&matrix[0][0]===matrix[2][2])
        {
            if(matrix[0][0]==='O')
            return 'O';
            else if(matrix[0][0]==='O')
            return 'X'
        }
    
        if(matrix[0][2]===matrix[1][1]&&matrix[2][0]===matrix[0][2])
        {
            if(matrix[0][2]==='X')
            return 'X';
            else if(matrix[0][2]==='O')
            return 'O'
        }
    return false;
}

function initializeMatrix()
{
   return matrix=[[false,false,false],[false,false,false],[false,false,false]];
}

function printMatrix(matrix)
{
    matrix.forEach(element => {
        console.log(element.join("\t"));
    });
}
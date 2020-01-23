function printRectangle(sideSize=5)
{
    let matrix="";
    for(let i=0;i<sideSize; i++)
    {
        matrix+=(' *'.repeat(sideSize))+'\n';
    }

    console.log(matrix);
}

printRectangle();


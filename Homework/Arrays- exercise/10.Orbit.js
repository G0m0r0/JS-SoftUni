function surroudingOrbits(input)
{
    let width=input[0];
    let height=input[1];
    let x=input[2];
    let y=input[3];

    function exceptionArea(i,j)
    {
        if(i<0||j<0)
        {
            return false;
        }

        if(i>x-1||j>y-1)
        {
            return false;
        }

        return true;
    }
}
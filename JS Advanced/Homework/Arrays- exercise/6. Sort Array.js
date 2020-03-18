function sortArrayByCriteria(array)
{
    let sortedArray=array.sort((a,b)=>{
        if(a.length-b.length===0)
        {
            if(a.toLowerCase()>b.toLowerCase())
            {
                return 1;
            }
            else if(a.toLowerCase()===b.toLowerCase())
            {
                return 0;
            }
            
            return -1;
        }
        else 
        {
            return a.length-b.length;
        }
    });

    array.forEach(element => {
        console.log(element);
    });
}

sortArrayByCriteria(['test', 'Deny', 'omen', 'Default']);
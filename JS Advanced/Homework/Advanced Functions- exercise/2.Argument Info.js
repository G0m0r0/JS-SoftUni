function argumentsValue(...input)
{
    const obj={};
    //for (let index = 0; index < input.length; index++) {
    //    console.log(typeof(input[index])+' : '+ input[index]);    
    //}

    //or
    input.forEach(el=>{
        const elType=typeof el;

        console.log(`${typeof el}: ${el}`);

        if(!obj.hasOwnProperty(elType)){
            obj[elType]=0;
        }

        obj[elType]++;
    });
    //console.log(obj);
    const arr= Object.entries(obj);

    const sortedEntries=arr.sort((a,b)=>{
        //destructioning
        const [aKey,aValue]=a;
        const [bKey,bValue]=b;
        //or
        //const aKey=a[0];
        //const aValue=a[1];

        return bValue-aValue;
    });

    sortedEntries.forEach((el)=>{
        const [type,value]=el;
        console.log(`${type} = ${value}`);
    })
}

argumentsValue('cat', 42, 50, function () { console.log('Hello world!'); });
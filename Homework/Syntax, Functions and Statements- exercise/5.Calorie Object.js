function caloriesObject(elements)
{
    let result={};

    for(let i=0; i<elements.length; i+=2){
        result[elements[i]]=parseInt(elements[i+1]);
    }

    return result;
}

console.log(caloriesObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
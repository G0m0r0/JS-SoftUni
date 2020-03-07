function sorting(array,typeOfSort){
    if(typeOfSort==='asc'){
        array.sort((a,b)=>a-b);
    }else if(typeOfSort==='desc'){
        array.sort((a,b)=>b-a);
    }
    return array;
}

console.log(sorting([14, 7, 17, 6, 8], 'asc'));
console.log(sorting([14, 7, 17, 6, 8], 'desc'));


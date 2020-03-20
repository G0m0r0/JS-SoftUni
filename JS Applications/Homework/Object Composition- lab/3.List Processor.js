function solve(data){
    let array=[];
    for (let i = 0; i < data.length; i++) {
        let[operation,str]=data[i].split(' ');
        if(operation==='add'){
            array.push(str);
        }else if(operation==='remove'){
            array= array.filter(x=>x!==str);
        }else{
            console.log(array.join(','));
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
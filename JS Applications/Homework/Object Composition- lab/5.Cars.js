function solve(data){   
    let allObj={} ;
    for (let i = 0; i < data.length; i++) {
        const[command,name]=data[i].split(' ');

        if(command==='create'){
            let newObj={
                name: name,
            }
            if(allObj[name]===undefined){
                allObj[name]=Object.create(newObj);
            }
        }        
    }   
   console.log(allObj);
}

solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']);

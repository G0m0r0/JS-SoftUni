function sortStoreCataloge(input){
    let objectProducts= input.reduce((acc,row)=>{
       // let tokens=row.split(' : ')
       // let product=tokens[0];
       // let price=tokens[1];

       let[name,price]=row.split(' : ').map(x=>x.trim());

        if(acc[name[0]]){
            acc[name[0]]=[...acc[name[0]],row]
        }else{
            acc[name[0]]=[row]
        }

        return acc;
    },{})

  Object.keys(objectProducts).sort().map(x=>{
    console.log(x);
    objectProducts[x].sort().map(name=>{
        console.log(` ${name.split(' : ').join(': ')}`);
    })
  });
}

sortStoreCataloge(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300','Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);
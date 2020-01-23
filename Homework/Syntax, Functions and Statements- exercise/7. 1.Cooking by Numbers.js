function cooking(params){
    let num=parseInt(params[0]);

    let functions={
         chop: (x)=>x/2,
         dice: (x)=>Math.sqrt(x),
         spice: (x)=>x+1,
         bake: (x)=>x*3,
         fillet: (x)=>0.8*x
    }

    for(let i=1; i<params.length; i++)
    {
        num=functions[params[i]](num)
        console.log(num);
    }
}

cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
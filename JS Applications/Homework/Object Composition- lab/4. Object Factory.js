function solve(data){
    let parseData=JSON.parse(data);
    console.log(parseData);

    const delegate=(a,b)=>Object.assign(Object.create(a),b);
    const newObj=parseData.reduceRight(delegate,{});

   return newObj;
}

solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`);
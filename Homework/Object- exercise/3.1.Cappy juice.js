function juiceFactoryWithReduce(data)
{
    let parsedData=data.reduce((juiceAcc, juiceKVP)=>{
        let[juiceName,quantity]=juiceKVP.split(' => ');

        if(juiceAcc.currentJuiceQuantity[juiceName]){
            juiceAcc.currentJuiceQuantity[juiceName]+=Number(quantity);
        }else{
            juiceAcc.currentJuiceQuantity[juiceName]=Number(quantity);
        }

        let bottleQ=Math.floor(juiceAcc.currentJuiceQuantity[juiceName]/1000)
        if(bottleQ>0&& !juiceAcc.completedJuices.includes(juiceName)){
            juiceAcc.completedJuices.push(juiceName);
        }

        return juiceAcc;

    },{completedJuices: [] ,currentJuiceQuantity: {} })

    parsedData.completedJuices.map(juice=>{
        console.log(`${juice}=> ${Math.floor(parsedData.currentJuiceQuantity[juice]/1000)}`)
    })
    return parsedData;
}

juiceFactoryWithReduce(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);
function printJason(input)
{
    input.splice(0,1);
    
    return JSON.stringify(input.reduce((acc,row,i,arr)=>{
        let [Town,Latitude,Longitude]=row.substring(2,row.length-2).split(' | ');

        acc.push({Town,Latitude: Math.round(Latitude* 100) / 100,Longitude:Math.round(Longitude * 100) / 100});

        return acc;
    },[]));
}

console.log(printJason(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));
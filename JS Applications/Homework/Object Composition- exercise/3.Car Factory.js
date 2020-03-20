function solve({model,power,color,carriage,wheelsize}){
    let posibilities=[
       { power: 90, volume: 1800 },
       { power: 120, volume: 2400 },
       { power: 200, volume: 3500 },
    ]

    return{
        model,
        engine:posibilities.find((p)=>power<=p.power),
        carriage: {type: carriage,color},
        wheels: Array(4).fill(Math.floor(wheelsize%2===0?wheelsize-1:wheelsize)),
    };   
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));
const obj=[
    {name: 'Peter',age:35},
    {age: 22},
    {name: 'Stivan'},
    {height: 180},
];

const delegate=(a,b)=>Object.assign(Object.create(a),b);
const d=obj.reduceRight(delegate,{});
console.log(d); //{name: 'Peter',age: 35};
console.log(d.height)//180

function convertToHTML(input)
{
    //input is array of json
    //create html table with two coloums name and score

    let parseInputJson=input.map(x=>JSON.parse(x));

    let createTable=content=> `<table>${content}\n</table>`
    let createRow=(name,score)=> `<tr><th>${name}</th><th>${score}</th></tr>`

    let result=parseInputJson.reduce((accRow,row)=>{

    },'')
}

console.log([{"name":"Pesho","score":479},
{"name":"Gosho","score":205}]
);
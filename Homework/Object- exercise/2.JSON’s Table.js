function jsonToHtml(inputJson){
    let parseInputJson=inputJson.map(x=>JSON.parse(x));

    let createTable=content=> `<table>${content}\n</table>`
    let createRow=content=> `\n\t<tr>${content}\n\t</tr>`
    let createData=content=> `\n\t\t<td>${content}</td>`

    let result=parseInputJson.reduce((accRows, row)=>{
        console.log(row);
        console.log(Object.values(row));
        let tdForPerson=Object.values(row).reduce((tdAcc,td)=>{
            return tdAcc+createData(td);
        },'')

        return accRows+createRow(tdForPerson);
    },'')

    return createTable(result);
}

console.log(jsonToHtml(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
));
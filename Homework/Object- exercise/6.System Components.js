function componentDB(data){
    let parsedData=data.reduce((acc,componentsData)=>{
        let [systemName,componentName,subcomponentName]=componentsData.split('|').map(x=>x.trim());

        if(!acc[systemName]){
            acc[systemName]={[componentName]:[subcomponentName]};
            return acc;
        }

        if(!acc[systemName][componentName]){
            acc[systemName][componentName]=[subcomponentName];
            return acc;
        }

        acc[systemName][componentName]=[...acc[systemName][componentName],subcomponentName];

        return acc;
    },{})

    let sortedsytem=Object.keys(parsedData).sort((a,b)=>{
        if(Object.keys(parsedData[a]).length!==Object.keys(parsedData[b]).length){
            return  parsedData[b].length-parsedData[a].length;
        }
        return a.localeCompare(b);
    })

    console.log(sortedsytem);
}

componentDB(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
);
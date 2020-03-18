function juicesFactory(input){
    let parseInput={};
    let juice={};

    for (let i = 0; i < input.length; i++) {
        let tokens=input[i].split(' => ');

        let sort=tokens[0];
        let quantity=tokens[1];

        if(parseInput[sort]){
            parseInput[sort]+=Number(quantity);
        }
        else{
            parseInput[sort]=Number(quantity);
        }

        let bottleQ=Math.floor(parseInput[sort]/1000);

        if(bottleQ>0)
        {
            juice[sort]=bottleQ;
        }
    }

    console.log(parseInput);
    console.log(juice);
    console.log(Object.entries(juice));

    let finalParsedData=Object.entries(juice);

    for (let i = 0; i < finalParsedData.length; i++) {
                console.log(finalParsedData[i].join(' => '));
    }
}


juicesFactory(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);
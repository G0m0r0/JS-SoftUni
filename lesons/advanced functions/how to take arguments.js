function solve1(input){
    console.log(arguments);
}


solve1(1,2,3);


//or

function solve2(...input){
    for (let index = 0; index < input.length; index++) {
       console.log(input[index]);        
    }
}


solve2(1,2,3);
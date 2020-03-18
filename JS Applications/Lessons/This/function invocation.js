console.log(this); //{} //browser will return window
console.log(global);

function solve1(){
    console.log(this); //same as global this mean its the global object
}

solve1();

function solve2(){
    "use strict";
    console.log(this); //undefined
}

solve2();
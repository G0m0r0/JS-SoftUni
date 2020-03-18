//IIFE
const add=(function functionalSum(){
    //clouser in add function
    let sum=0;

    function add(addend){
        sum+=addend;

        return add;
    };

    add.toString=function(){
        return sum;
    }

    return add;
})();

//Function
//or without iife const add=functionalSum();

//curring
console.log(
    add(1)(3)(-4)(13).toString());
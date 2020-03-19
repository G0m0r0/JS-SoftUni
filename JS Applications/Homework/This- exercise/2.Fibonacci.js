function getFibonator(){
    let value1=0;
    let value2=1;

    var nexElement=()=>{    
       let result=value2;
       [value2,value1]=[value2+value1,value2];

       return result;
    }
    return nexElement;
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

function getFibonator(){
    let value1=0;
    let value2=1;
    currFibElement=0;
    var nexElement=()=>{    
       currFibElement++;
       if(currFibElement<=1){
           return 1;
       }

       let result= value1+value2;
       value1=value2;
       value2=result;
       return result;
    }
    return nexElement;
}
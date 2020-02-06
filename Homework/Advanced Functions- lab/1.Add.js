function solution(number1)
{
    return function (number2){
        return number1+number2;
    };
}

let add7=solution(7);
console.log(add7(2));
console.log(add7(3));
console.log(add7(100));
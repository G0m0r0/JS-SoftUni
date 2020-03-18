function greetings(){
    return function (){
        console.log('Hi!');
    };
};

var sayHi=greetings();
sayHi();

//without cyrring

function trippleSum(a,b,c)
{
    return a+b+c;
}

console.log(trippleSum(1,2,3));

//curring

function trippleSumC(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}

let first=trippleSumC(5);
let second=first(4);
let thritd=second(5);
let thritdPrim=second(100);
console.log(thritdPrim);
//or 
console.log(trippleSumC(1)(2)(3));

//closure
console.log('------------------------------------------------closure')
var person=(function(){
    var age=0;
    var name;

    function grow(){
        if(age>100){
            reborn();
        }        
        age++;
    }

    function howOld(){
        return age;
    }

    //we can accesses this function only inside becaus we are not returning it in the object
    function reborn(){
        age=0;
    }
    return {
        name: name,
        grow: grow,
        howOldAreYou: howOld
    }
})();
//we can add more to object but it adds only to the object person not to the immediatly invoked functions expressions
person.lastName='petrov';

person.name='Gosho';
console.log(person.howOldAreYou());
person.grow();
console.log(person.howOldAreYou());

console.log('------------------------------------------------closure---counter')

var sequence=(function(){
    var counter=0;
    
    function getCurrentValue(){
        return counter;
    }

    function getNextValue(){
        return ++counter;
    }

    return {
        getCurrentValue,
        getNextValue,
    };
})();


console.log(sequence.getCurrentValue());
console.log(sequence.getNextValue());

console.log('------------------------------------------------clouser')

var proc=(function(){
        var text=' ';

        function append(str){
            text+=str;
        }

        function removeStart(n){
            text= text.substring(n);
        }

        function removeEnd(n){
            if(text.length>=n){
                text=text.substring(0,text.length-n);
            }        
        }

        function print(){
            console.log(text);
        }

        return {
            append,
            removeEnd,
            removeStart,
            print,
        };
})();

proc.print();
proc.append('Marko');
proc.removeEnd(2);
proc.print();

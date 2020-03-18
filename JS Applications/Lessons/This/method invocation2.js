var fullName=function(){
    return this.firstName+" "+this.lastName;
}

var person1={
    firstName: 'pesho',
    lastName: 'petrov',
    fullName:  fullName
}
var person2={
    firstName: 'gosho',
    lastName: 'goshev',
    fullName:  fullName
}

console.log(fullName()); //undefined undefined
console.log(person1.fullName()); //pesho petrov
console.log(person2.fullName()); //gosho goshev
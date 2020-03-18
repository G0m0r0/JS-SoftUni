var person={
    firstName: 'pesho',
    lastName: 'petrov',
    fullName: function(){
        return  this.firstName+' '+this.lastName;
    }
}

console.log(person.fullName());

let myfunc=person.fullName; //izkrvame q ot konteksta
console.log(myfunc()); //undefined undefined
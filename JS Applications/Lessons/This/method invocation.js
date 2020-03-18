var person={
    firstName: 'pesho',
    lastName: 'petrov',
    fullName: function(){
        return  this.firstName+' '+this.lastName;
    }
}

console.log(person.fullName());
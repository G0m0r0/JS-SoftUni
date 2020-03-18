function greet(arg1,arg2){
    console.log(this.name);
}

let person={name: 'pesho'};

greet(); //undefined
greet.call(person,arg1,arg2);   
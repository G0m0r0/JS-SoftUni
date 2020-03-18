function tablePeople(){
    class Person{
        constructor(firstName,lastName,age,email){
            this.firstName=firstName;
            this.lastName=lastName;
            this.age=age;
            this.email=email;
        }
    
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let persons=[];

    let person11=new Person('Anna',	'Simpson',	22,	'anna@yahoo.com');
    let person22=new Person('SoftUni');
    let person33=new Person('Stephan',	'Johnson',	25);
    let person44=new Person('Gabriel',	'Peterson',	24,	'g.p@gmail.com');
    persons.push(person11,person22,person33,person44);

    return persons;
}

console.log(tablePeople());

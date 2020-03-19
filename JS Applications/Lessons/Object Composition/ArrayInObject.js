const company={
    employees: ['John','Ivan','Pesho'],
    name: 'Quick Build',
}

const {employees: [employee]}=company;

console.log(employee); //John

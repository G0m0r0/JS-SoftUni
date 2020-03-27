let handlebars=require('handlebars');

var template=handlebars.compile( 'Hello, my name is {{name}} {{familyName}}!');
console.log(template({name: 'Pesho',familyName: 'Petrov'}));


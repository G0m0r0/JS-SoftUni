let handlebars=require('handlebars');

var template=handlebars.compile('<ul id="contacts">\
{{#each contacts}}<li>{{name}}: {{email}}</li>\
    {{/each}}\
    </ul>');


    let context={
        contacts:[
        {name: 'Pesho1',email:'myimail1'},
        {name: 'Pesho2',email:'myimail2'},
        {name: 'Pesho3',email:'myimail3'},
    ]}

    console.log(template(context));




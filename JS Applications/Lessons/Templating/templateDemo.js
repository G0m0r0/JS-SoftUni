let myTemplate=(function(){
    var startDelimiter='{{';
    var endDelimiter='}}';

    var searchStr=`${startDelimiter}?([A-Za-z]+)${endDelimiter}`;

    var compile=function(template){
        var searchExp=new RegExp(searchStr);

        return function(obj){
            var match;
            var result=template;  

            while(match=searchExp.exec(result)){
                result=result.replace(match[0],obj[match[1]]);
            }

            return result;
        };
    };

    return{
        compile
    };
}());

var template=myTemplate.compile( 'Hello, my name is {{name}} {{familyName}}!');
console.log(template({name: 'Pesho',familyName: 'Petrov'}));
class TemplateEngine{
    constructor(start,end){
        this.startDelimeter=start;
        this.endDelimiter=end;
        this.searchStr=`${start}?([A-Za-z]+)${end}`;
    }

    compile(template){
        var searchExp=new RegExp(this.searchStr);
 
        return function(obj){
            var match;
            var result=template;  

            while(match=searchExp.exec(result)){
                result=result.replace(match[0],obj[match[1]]);
            }

            return result;
        };
    }
}

var myTemplate=new TemplateEngine('{{','}}');
var template=myTemplate.compile( 'Hello, my name is {{name}} {{familyName}}!');
console.log(template({name: 'Pesho',familyName: 'Petrov'}));
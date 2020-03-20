(function () {
    String.prototype.ensureStart=function(str){
        if(!this.toString().startsWith(str)){
            return str.concat(this.toString());
        }

        return this.toString();
    }

    String.prototype.ensureEnd=function(str){
        
        if(!this.toString().endsWith(str)){
            return this.toString().concat(str);
        }

        return this.toString().toString();
    }

    String.prototype.isEmpty=function(str){
        return this.length===0;
    }
    
    String.prototype.truncate=function(n){
        if(n<4){
            return '.'.repeat(n);
        }

        if(this.length<=n){
            {
                return this.toString(); 
            }            
        }else if(this.length>n){
            let whiteSpaceIndex=this.lastIndexOf(" ");
            let slicedPart=this.slice(0,whiteSpaceIndex);

            if(whiteSpaceIndex>-1){                
                if(n+3>=slicedPart.length){
                    return slicedPart+"...";
                }
            }else{
                return slicedPart.slice(0,n-3)+'...' ;
            }
        }
    }

    String.prototype.format=function(string,...params){
        for (let i = 1; i < arguments.length; i++) {
            string=string.replace(`{${i-1}}`,arguments[i]);
        }
        return string;
    };
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');

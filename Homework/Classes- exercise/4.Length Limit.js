class Stringer{
    constructor(str,length){
        this.innerString=str;
        this.innerLength=length;
    }

    increase(length){
        this.innerLength+=length;
    }

    decrease(length){
        if(this.innerLength-length>0){
            this.innerLength-=length;
        }else{
            this.innerLength=0;
        }
    }

    toString(){
      /* if(this.innerLength<this.innerString.length){
            let newStr='';
            for (let i = 0; i < this.innerLength; i++) {
                newStr+=this.innerString[i];                
            }
            return newStr+'...';
        }else if(this.innerLength===0){
            return '...';
        }else{
            return this.innerString;
        } */
        if(this.innerLength===0){
            return '...';            
        }

        return this.innerString.slice(0,this.innerLength)+(this.innerLength<this.innerString.length?'...':'');
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

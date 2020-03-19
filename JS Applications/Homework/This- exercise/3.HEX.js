class Hex{
    constructor(value){
        this.value=value;
    }
    valueOf(){
        return this.value;
    }
    toString(){
        return 'Ox'+this.valueOf().toString(16).toUpperCase();
    }
    plus(number){   
        return new Hex(this.value+number);
    }
    minus(number){
        if(number instanceof Hex){
            this.value-=number.valueOf();
            return new Hex(this.value);
        }

        this.value-=Number(number);

        return new Hex(this.value);
    }
    parse(hexNum){
        return parseInt(hexNum,10);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
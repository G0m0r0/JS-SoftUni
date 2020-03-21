class Foo{
    constructor(own){
        this.me=own;
        this.test=function(){
            console.log('test');
        };
    }

    identify(){
        return "I am"+this.me;
    }
}

class Bar extends Foo{
    constructor(own){
        super(own);
    }

    speak(){
        console.log("Hello, "+this.identify()+".");
    }
}
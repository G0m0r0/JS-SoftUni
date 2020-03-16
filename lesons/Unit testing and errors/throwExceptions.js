function test(){
    try{
        //throw 42;
        throw new SyntaxError('Message');
        
    }catch(ex){
        console.log(ex.name);
    }
}

test();
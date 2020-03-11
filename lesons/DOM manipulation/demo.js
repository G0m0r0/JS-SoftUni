//callback like in foreach
function doSomething(callback){
    if(true&&typeof(callback)==='function'){
        callback();
    }
}

function printHelloWorld(){
    console.log('Hello world!');
}

doSomething(printHelloWorld);
function test(){
    console.log('Hello from test!');
    setTimeout(console.log,0,'Hello from Event');
    console.log('This is after event');
}

test();
function solution(){
    let strOrigin=' ';

    function append(str){
        strOrigin+=str;
    };

    function removeStart(n){
        strOrigin=strOrigin.substring(n+1);
    };

    function removeEnd(n){
        strOrigin=strOrigin.substring(0,strOrigin.length-n);
    };

    function print(){
        console.log(strOrigin);
    };

    return{
        append,
        removeEnd,
        removeStart,
        print,
    };
};

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

//console.log(secondZeroTest.print())




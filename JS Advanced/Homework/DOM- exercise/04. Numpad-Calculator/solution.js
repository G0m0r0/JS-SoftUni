function solve() {
    let output=document.getElementById("expressionOutput");
    let result=document.getElementById('resultOutput');
    let buttons=document.getElementsByClassName('keys')[0];
    let clearButton=document.getElementsByClassName('clear')[0];

    let operators=['+','-','/','*']

    let operations={
        '+': (a,b)=>+a+(+b),
        '-':(a,b)=>+a-(+b),
        '*':(a,b)=>+a*(+b),
        '/':(a,b)=>+a/(+b),
    }

    clearButton.addEventListener('click',e=>{
        output.innerHTML='';
        result.innerHTML='';
    })

    buttons.addEventListener('click',({target:{value}})=>{
        if(!value){
            return;
        }

        if(operators.includes(value)){
            output.innerHTML+=" "+value+" ";
            return;
        }

        if(value==='='){
            let numbers=output.innerHTML.split(' ').filter(el=>el);
            if(numbers.length<3){
                result.innerHTML="NaN";
            }
            else
            {
                result.innerHTML=operations[numbers[1]](numbers[0],numbers[2]);
            }
                       
            return;
        }

        output.innerHTML+=value;
    })
}
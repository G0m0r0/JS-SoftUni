function solve() {
    let button=document.getElementsByTagName('button')[0];


    button.addEventListener('click',(e)=>{
        let input=document.getElementsByTagName('input')[0].value;
        let firstLetter=input.toUpperCase().charCodeAt(0) - 65;
        //console.log(input.value);

        if (input) {
            let currentName='';
            currentName += input[0].toUpperCase();
 
            for (let i = 1; i < input.length; i++) {
                currentName += input[i].toLowerCase();
            }
            input=currentName;
        }
 
        
        let table=document.getElementsByTagName('li');
        if(table[firstLetter].innerHTML==''){
            table[firstLetter].innerHTML=input;
        }else{
            table[firstLetter].innerHTML+=", "+input;
        }
        
    })
   
}
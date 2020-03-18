function solve() {
    let button=document.getElementsByTagName('button')[0];
    let selectMenu=document.getElementById('selectMenuTo');
    let numDecimal=document.getElementById('input');

    //selectMenu.removeChild("");
    let newElementOption1=document.createElement('option');    
    newElementOption1.innerHTML="Binary"
    newElementOption1.value='binary';

    let newElementOption2=document.createElement('option');
    newElementOption2.innerHTML="Hexadecimal";
    newElementOption2.value='hexadecimal';
    
    selectMenu.appendChild(newElementOption1);
    selectMenu.appendChild(newElementOption2);

    button.addEventListener('click',(e)=>{
        let result='';

        if(selectMenu.value==="binary"){
            result=(+numDecimal.value).toString(2);
        }
        else if(selectMenu.value==="hexadecimal"){
            result=(+numDecimal.value).toString(16).toUpperCase();
        }
        
        document.getElementById('result').value=result;
    })
}
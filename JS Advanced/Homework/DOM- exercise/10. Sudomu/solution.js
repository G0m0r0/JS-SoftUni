function solve() {
    let buttons=document.getElementsByTagName('button');
    let check=buttons[0];
    let clear=buttons[1];
    let result=document.getElementById('check').getElementsByTagName('p')[0];
    //document.getElementsByClassName('table')[0].style.border = "thick solid #0000FF";
    size=document.querySelectorAll('tbody tr').length;

    clear.addEventListener('click',(e)=>{
        let cells=document.querySelectorAll('tbody input');
        for (let index = 0; index < cells.length; index++) {
            cells[index].value='';
        }
    })

    check.addEventListener('click',(e)=>{        
         let matrix=[];
         let counter=0;
         let flag=true;

        let cells=Array.from(document.querySelectorAll('tbody input')).map(x=>x.value);
        console.log(cells);
        for (let i = 0; i < size; i++) {
            matrix.push([...cells.slice(i*size,(i+1)*size)]);
        }
        //console.log(matrix);

        for (let i = 0; i < size; i++) {
            let lineResult=(new Set(matrix[i])).size===size;
        }

    let sum1=0;
    if(matrix[0][0]===matrix[0][1]){
        flag=false;
    }

    for (let index = 0; index < size; index++) {
        sum1+=matrix[0][index];            
    }
        
    for (let i = 1; i < size; i++) {
        let sum=0;
        for (let j = 0; j < size; j++) {
            sum+=matrix[i][j];
        }
        if(sum1!=sum&&sum1!=0){
            flag=false;
            return;
        }
    }
    for (let i = 0; i < size; i++) {
        let sum=0;
        for (let j = 0; j < size; j++) {
           sum+=matrix[j][i];       
        } 
        if(sum1!=sum&&sum1!=0)       {
            flag=false;
            return;
        }
    }

    if(flag){
        result.innerHTML="You solve it! Congratulations!";
        return;
    }else{
        result.innerHTML="NOP! You are not done yet..." ;
    }
    });
};
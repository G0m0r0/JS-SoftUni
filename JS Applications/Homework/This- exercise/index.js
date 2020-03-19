   function solve(){
      let rows=document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
      //let initialColor=rows[0].style.backgroundColor;

      for (let i = 0; i < rows.length; i++) {
      rows[i].addEventListener('click',()=>{
         if(rows[i].style.backgroundColor!=="rgb(65, 63, 94)"){
            for (let j = 0; j < rows.length; j++) {
               rows[j].style.backgroundColor='';              
            }
               rows[i].style.backgroundColor="#413f5e";        
         }else{
               rows[i].style.backgroundColor='';
         }      
      })      
      }
   }

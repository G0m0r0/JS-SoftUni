function solve() {
  let table=document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  let button=document.getElementById('searchBtn');
  
  button.addEventListener('click',(e)=>{
     let searchWord=document.getElementById('searchField').value;

     for (let i = 0; i < table.length; i++) {
        table[i].classList.remove('select');
      let information= table[i].getElementsByTagName('td');

      for (let j = 0; j < information.length; j++) {

         if(information[j].innerHTML.includes(searchWord)&&searchWord!=''){
           table[i].classList.add('select');
         }
      }        
     }

     document.getElementById('searchField').value='';
  })
}
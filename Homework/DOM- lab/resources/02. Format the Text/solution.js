function solve() {
  let text=document.getElementById('input').textContent;
  let sentances=text.split('.').filter(x=>x);
  let output=document.getElementById('output');
  
  let paragraph='';
  for (let i = 1; i <= sentances.length; i++) {
    paragraph+=sentances[i-1]+'.';
   
    if(i%3==0){
      child=document.createElement('p');
      child.innerHTML=paragraph;
      output.appendChild(child);
      paragraph='';
    }
  }
  if(paragraph!=''){
    child=document.createElement('p');
      child.innerHTML=paragraph;
      output.appendChild(child);
      paragraph='';
  }
}
function solve() {

  const links = document.querySelectorAll("a");
  const visits = document.querySelectorAll("p");
  
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click',(e)=>{
      let count=+(visits[i].innerHTML.slice(8,10));
      visits[i].innerHTML=visits[i].innerHTML.replace(count,++count);
      console.log(visits[i].innerHTML);
    })    
  } 
}
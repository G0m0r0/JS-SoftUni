function create(words) {
   let $content=document.getElementById('content');

   for (let i = 0; i < words.length; i++) {
      let divElement=document.createElement("div");
      let paragraph=document.createElement('p');

      paragraph.textContent=words[i];
      divElement.appendChild(paragraph);
      paragraph.style.display="none";
      $content.appendChild(divElement);
   }

   let $paragraphs=$content.getElementsByTagName('div');
   for (let i = 0; i < $paragraphs.length; i++) {
      $paragraphs[i].addEventListener('click',(e)=>{
         console.log($paragraphs[i]);
         $paragraphs[i].getElementsByTagName('p')[0].style.display="block";
      })      
   }
}
function solve() {
   let sendButton=document.getElementById('send');
   let input=document.getElementById('chat_input');
   let messageField=document.getElementById('chat_messages');

   //document.addEventListener('click',(e)=>{
  //    console.log(e);
  // });

   sendButton.addEventListener('click',(e)=>{
      let newElement=document.createElement('div');
      newElement.innerHTML=input.value;
      newElement.classList.add('message','my-message'); //there is many ways
      messageField.appendChild(newElement);
      input.value='';
   })
}



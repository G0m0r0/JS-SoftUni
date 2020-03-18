function growingWord() {
  let text = document.getElementById('exercise').getElementsByTagName('p')[0];

  if(text.style.color===''&&text.style.fontSize===''){
    text.style.color='blue';
    text.style.fontSize='2px';
  }else if(text.style.color==='red'){
    text.style.color='blue';
    text.style.fontSize=parseInt(text.style.fontSize)*2+'px';
  }else if(text.style.color==='blue'){
    text.style.color='green';
    text.style.fontSize=parseInt(text.style.fontSize)*2+'px';
  }else if(text.style.color==='green'){
    text.style.color='red';
    text.style.fontSize=parseInt(text.style.fontSize)*2+'px';
  }
}
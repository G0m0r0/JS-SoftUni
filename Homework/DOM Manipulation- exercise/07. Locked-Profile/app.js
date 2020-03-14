function lockedProfile() {
  const $buttons=document.querySelectorAll('div#container main#main div.profile button');

  [...$buttons].forEach((button)=>{
      button.addEventListener('click',(event)=>{
        const parent=event.currentTarget.parentNode;
        console.log(parent);
  })});
}
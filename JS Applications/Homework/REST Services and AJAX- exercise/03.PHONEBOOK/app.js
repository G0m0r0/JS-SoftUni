function attachEvents() {
    let loadButton=document.getElementById('btnLoad');
    let createButton=document.getElementById('btnCreate');
    let ulToLoad=document.getElementById('phonebook');

    loadButton.addEventListener('click',()=>{
        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json')
        .then(x=>x.json())
        .then(x=>{
            let array=Object.values(x);
          for (let i = 0; i < array.length; i++) {
              if(typeof(array[i])==='object'){
                  let name=array[i].person;
                  let phone=array[i].hpne;
                  let li=document.createElement('li');
                  li.textContent=`${name}: ${phone} `
                  let buttonDelete=document.createElement('button');
                  buttonDelete.innerHTML="Delete";
                  li.appendChild(buttonDelete);
                  ulToLoad.appendChild(li);
                
              }
        }})
    });

    createButton.addEventListener('click',()=>{
        let={
            person: newPesonValue.value,
            phone: newPhoneValue.value,
        }

        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json',{
            method: 'PATCH',
            body: JSON.stringify(newPeson);
        })
    })
}

attachEvents();
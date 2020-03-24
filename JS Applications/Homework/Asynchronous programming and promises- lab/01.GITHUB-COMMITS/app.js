function loadCommits() {
    let inputUsername=document.getElementById('username');
    let inputRepo=document.getElementById('repo');
    let container=document.getElementById('commits');
    container.innerHTML='';

   fetch(`https://api.github.com/repos/${inputUsername.value}/${inputRepo.value}/commits`)
   .then((response)=>{
    if(response.status<400){
        return response.json();
    }else{
        throw({
            status: response.status,
            statusText: response.statusText
        });
    }
   }).then((data)=>{
       data.forEach(element=>{
        let li=document.createElement('li');
        li.innerHTML=`${element.commit.author.name}: ${element.commit.message}`;
        container.appendChild(li);
       });
   })
   .catch((error)=>{
       let li=document.createElement('li');
       li.innerHTML=`Error: ${error.status} (${error.statusText})`;
       container.appendChild(li);
   });
}
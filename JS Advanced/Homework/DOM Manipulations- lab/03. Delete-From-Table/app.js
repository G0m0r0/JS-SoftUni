function deleteByEmail() {
    let elements=document.getElementsByTagName('tr');
    let searchEmail=document.getElementsByTagName('input')[0].value;
    let resultMEssage=document.getElementById('result');
    //console.log(resultMEssage);
    
    for (let i = 1; i < elements.length; i++) {
        let email=elements[i].getElementsByTagName('td')[1].innerHTML;

        if(email===searchEmail){
            elements[i].remove();
            resultMEssage.textContent="Deleted.";
        }else{
            resultMEssage.textContent='Not found.';
        }              
    }

    document.getElementsByTagName('input')[0].value='';
}
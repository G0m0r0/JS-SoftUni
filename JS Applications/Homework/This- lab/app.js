function solve() {
    let dropdownButton=document.getElementById('dropdown');
    let dropdownOptions=document.getElementById('dropdown-ul');
    let box=document.getElementById('box');
    let initialStyle=box.style.backgroundColor;

    dropdownButton.addEventListener('click',()=>{
        if(dropdownOptions.style.display==="none"||dropdownOptions.style.display===''){
             dropdownOptions.style.display="block";
             dropdownOptions.addEventListener('click',(e)=>{
                 let rgb=e.target.textContent;
                 box.style.backgroundColor=rgb;
                 box.style.color="black";
             });
        }else{
            dropdownOptions.style.display="none";
            box.style.backgroundColor="black";
            box.style.color="white";
        }
    });
}
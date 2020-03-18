function addItem() {
    let input=document.getElementById('newItemText');
    let listOfItems=document.getElementById('items');

    let newListItem=document.createElement('li');
    newListItem.innerHTML=input.value;

    listOfItems.appendChild(newListItem);
    input.value='';
}
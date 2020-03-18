function addItem() {
    const $elements={
        itemText: document.getElementById('newItemText'),
        itemValue: document.getElementById('newItemValue'),
        menu: document.getElementById('menu'),
    };

    let $option=document.createElement('option');
    $option.textContent=$elements.itemText.value
    $option.value=$elements.itemValue.value;

    $elements.menu.appendChild($option);
    $elements.itemValue.value='';
    $elements.itemText.value='';
}
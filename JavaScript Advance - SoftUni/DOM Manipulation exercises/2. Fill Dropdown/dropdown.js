let itemText = document.getElementById('newItemText').value;
let itemValue = document.getElementById('newItemValue').value;
let menu = document.getElementById('menu');


function addItem() {
    let option = document.createElement('option');
    option.textContent = itemText;
    option.label = itemValue;
    menu.appendChild(option);
}
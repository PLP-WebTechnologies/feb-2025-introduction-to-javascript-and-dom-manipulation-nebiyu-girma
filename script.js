// Text Content Modification
document.getElementById('changeTextBtn').addEventListener('click', () => {
    const dynamicText = document.getElementById('dynamicText');
    dynamicText.textContent = 'Text changed successfully!';
});

// Style Modification
document.getElementById('toggleStyleBtn').addEventListener('click', () => {
    const styleBox = document.getElementById('styleBox');
    styleBox.classList.toggle('highlight');
});

// Element Management
let itemCounter = 1;
const itemContainer = document.getElementById('itemContainer');

document.getElementById('addItemBtn').addEventListener('click', () => {
    const newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.textContent = `Item ${itemCounter++}`;
    itemContainer.appendChild(newItem);
});

document.getElementById('removeItemBtn').addEventListener('click', () => {
    if (itemContainer.lastElementChild) {
        itemContainer.removeChild(itemContainer.lastElementChild);
        itemCounter = Math.max(1, itemCounter - 1);
    }
});

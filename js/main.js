const todoButton = document.getElementById('todo-btn');
const itemContainer = document.getElementById('todo-container');
const fieldInput = document.getElementById('txt');

// Event listener to btn
todoButton.addEventListener('click', () =>{
    let text = document.createElement('p')
    text.innerText = fieldInput.value;
    itemContainer.appendChild(text)
    fieldInput.value = '';
    //p-tags
    //Single click
    text.addEventListener('click', () =>{
    text.style.textDecoration = 'line-through'
})
    //dooby doo double-click
text.addEventListener('dblclick', () => {
    text.remove()
   // text.removeChild();
    
})
})


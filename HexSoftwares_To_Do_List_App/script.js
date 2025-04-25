const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');



const addTodo = () => {
    /*alert('Added to list!');*/
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert('Forgot to add a task! Try again!');
        return false;
    }

    //Create a new list item / p tag
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = inputText;
    li.appendChild(p);

    //Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    li.appendChild(deleteBtn);

    //Create an edit button
    //Create a delete button
    const editBtn = document.createElement('button');
    deleteBtn.innerText = 'Edit';
    li.appendChild(editBtn);
    

    todoList.appendChild(li);
    inputBox.value = "";
}

addBtn.addEventListener('click', addTodo);


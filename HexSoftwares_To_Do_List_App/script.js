const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editTodo = null;


const addTodo = () => {
    /*alert('Added to list!');*/
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert('Forgot to add a task! Try again!');
        return false;
    }
    else{
        
    }


    if(addBtn.value === "Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    }
 
    //Create a new list item / p tag
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = inputText;
    li.appendChild(p);

    //Create an edit button
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

     //Create a delete button
     const deleteBtn = document.createElement('button');
     deleteBtn.innerText = 'Delete';
     deleteBtn.classList.add("btn", "deleteBtn");
     li.appendChild(deleteBtn);
    

    todoList.appendChild(li);
    inputBox.value = "";
}

const updateTodo = (e) => {
    if(e.target.innerHTML === "Delete"){
        todoList.removeChild(e.target.parentElement);
    }
    if(e.target.innerHTML === "Edit"){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
    }
}

   
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo );


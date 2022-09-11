const todoList = document.querySelector('.todoList');
const clear = document.querySelector('.clear');
const add = document.querySelector('.add')

let todos = [
    {
        Name:"User Can View Todos",
        Status:"done"
    },
    {
        Name:"User Can Edit Todos",
        Status:""
    },
    {
        Name:"User Can Add Todos",
        Status:"done"
    },
    {
        Name:"User Can Clear Completed Todos",
        Status:""
    },
    {
        Name:"User Can Delete Todos",
        Status:"done"
    },
    {
        Name:"User Can view Uncompleted Todos",
        Status:"done"
    },
]

function completeNumber(list) {
    const doneNum = document.querySelector('.doneNum')
    let i = 0;
    list.forEach(function(todo) {
        if (todo.Status == "") {
            i++
        }
    });
    doneNum.textContent = "You have " + i + " pending tasks."
}

function singleItem(item, todos) {
    let listItem = document.createElement('li');
        let listTrashSpan = document.createElement('span');
        let listTrashIcon = document.createElement('i');
        listItem.textContent = item.Name
        listItem.className = item.Status;
        listTrashIcon.className = "fa fa-trash"
        listTrashSpan.appendChild(listTrashIcon);  
        listTrashSpan.addEventListener('click', (index) => {
            todoList.removeChild(listItem)
            console.log(todos);
            todos.splice(index, 1);
            completeNumber(todos);
        })      
            let listEditSpan = document.createElement('span');
            listEditSpan.className = "editBtn"
            let listEditIcon = document.createElement('i');
            listEditIcon.className = "fa fa-edit"
            listEditSpan.addEventListener('click', () => {
            });
            listEditSpan.appendChild(listEditIcon);
            listItem.appendChild(listEditSpan);
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('done');
            if (item.Status == "") {
                item.Status = "done"
            } else {
                item.Status = ""
            }
            completeNumber(todos);
            console.log(todos);
        })
        listItem.appendChild(listTrashSpan);
        todoList.appendChild(listItem);
    clear.addEventListener('click', (index) => {
        if (item.Status == "done") {
            todoList.removeChild(listItem)
            console.log(todos);
            todos.splice(index, 1); 
        }
    })
} 

function todoItems(list) {
    console.log(list);
    list.forEach(function(todo) {
        singleItem(todo, list)
    })
    
    let hasNodes = todoList.hasChildNodes();
    
    console.log(hasNodes);

    completeNumber(list);
}

function addItem(arr) {
    let input = document.getElementById('newTodo').value
    let newItem = {
        Name: input,
        Status: ""
    }
    arr.push(newItem);

    let listItem = document.createElement('li');
        let listTrashSpan = document.createElement('span');
        let listTrashIcon = document.createElement('i');
        listItem.textContent = newItem.Name
        listItem.className = newItem.Status;
        listTrashIcon.className = "fa fa-trash"
        listTrashSpan.appendChild(listTrashIcon);  
        listTrashSpan.addEventListener('click', (index) => {
            todoList.removeChild(listItem)
            console.log(todos);
            todos.splice(index, 1);
        })      
            let listEditSpan = document.createElement('span');
            listEditSpan.className = "editBtn"
            let listEditIcon = document.createElement('i');
            listEditIcon.className = "fa fa-edit"
            listEditSpan.addEventListener('click', () => {
            });
            listEditSpan.appendChild(listEditIcon);
            listItem.appendChild(listEditSpan);
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('done');
            if (newItem.Status == "") {
                newItem.Status = "done"
            } else {
                newItem.Status = ""
            }
            completeNumber(todos);
            console.log(todos);
        })
        listItem.appendChild(listTrashSpan);
        todoList.appendChild(listItem);

    completeNumber(arr);

    console.log(arr);
}

function addbuttonClick() {
    addItem(todos);
}

add.addEventListener('click', addbuttonClick)

todoItems(todos);
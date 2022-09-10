const todoList = document.querySelector('.todoList');
const clear = document.querySelector('.clear');

let todos = [
    {
        Name:"Sample1",
        Status:"done"
    },
    {
        Name:"Sample2",
        Status:""
    }
]

function singleItem(item) {
    let listItem = document.createElement('li');
        let listTrashSpan = document.createElement('span');
        let listTrashIcon = document.createElement('i');
        listItem.textContent = item.Name
        listItem.className = item.Status;
        listTrashIcon.className = "fa fa-trash"
        listTrashSpan.addEventListener('click', deleteTodo)
        listTrashSpan.appendChild(listTrashIcon);
        if (item.Status == "") {
            let listEditSpan = document.createElement('span');
            listEditSpan.className = "editBtn"
            let listEditIcon = document.createElement('i');
            listEditIcon.className = "fa fa-edit"
            listEditSpan.addEventListener('click', editTodo);
            listEditSpan.appendChild(listEditIcon);
            listItem.appendChild(listEditSpan);
        }
        listItem.appendChild(listTrashSpan);
        todoList.appendChild(listItem);
} 

function todoItems(list) {
    // let todoList = document.getElementsByClassName("todoList");
    console.log(list);
    list.forEach(function(todo) {
        singleItem(todo)
    })
    
    let hasNodes = todoList.hasChildNodes();
    
    console.log(hasNodes);
}

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

function addItem(arr) {
    let input = document.getElementById('newTodo').value
    let newItem = {
        Name: input,
        Status: ""
    }
    arr.push(newItem);

    singleItem(newItem);

    completeNumber(arr);

}

function changeTodo(message) {
    console.log(message);
}

function editTodo() {
    changeTodo("edit onClick working");
}

function removeTodo(message) {
    console.log(message);
}

function deleteTodo() {
    removeTodo("delete onClick working");
}

function removeComplete(list) {
    let completeItems = list.filter(todo => todo.Status == "done");
    console.log(completeItems);
}

function clearTodos() {
    removeComplete(todos)
}

todoItems(todos);

completeNumber(todos);

clear.addEventListener("click", clearTodos)
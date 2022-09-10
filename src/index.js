const todoList = document.querySelector('.todoList');

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

function todoItems(list) {
    // let todoList = document.getElementsByClassName("todoList");
    console.log(list);
    list.forEach(function(todo) {
        let listItem = document.createElement('li');
        let listTrashSpan = document.createElement('span');
        let listTrashIcon = document.createElement('i');
        listItem.textContent = todo.Name
        listItem.className = todo.Status;
        listTrashIcon.className = "fa fa-trash"
        listTrashSpan.appendChild(listTrashIcon);
        if (todo.Status == "") {
            let listEditSpan = document.createElement('span');
            listEditSpan.className = "editBtn"
            let listEditIcon = document.createElement('i');
            listEditIcon.className = "fa fa-edit"
            listEditIcon.textContent = ""
            listEditSpan.appendChild(listEditIcon);
            listItem.appendChild(listEditSpan);
        }
        listItem.appendChild(listTrashSpan);
        todoList.appendChild(listItem);
    })      
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

function removeComplete(list) {
    let completeItems = list.filter(todo => todo.Status == "done");
    console.log(completeItems);
}

todoItems(todos);

completeNumber(todos);

removeComplete(todos);
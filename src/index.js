const todoList = document.querySelector('.todoList');

let todos = [
    {
        Name:"Sample1",
        Status:"Complete"
    },
    {
        Name:"Sample2",
        Status:"Incomplete"
    }
]

function todoItem(Name, Status) {
    let listItem = document.createElement('li');
    listItem.className = Status
}

function todoList(todos) {
    while(let i = 0; i <= todos.length; i++;) {
        todoItem(todos[i].name, todo[i].status);
    }   
}

todoList(todos);
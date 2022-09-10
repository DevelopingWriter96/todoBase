const todoList = document.querySelector('.todoList');

let todos = [
    {
        Name:"Sample1",
        Status:"done"
    },
    {
        Name:"Sample2",
        Status:"not done"
    }
]

function todoItems(list) {
    let i = 0;
    while (i > list.length, i++) {
        let listItem = document.createElement('li');
        listItem.textContent = list[i].Name;
        listItem.className = list[i].Status;
        todoList.appendChild(listItem);
        console.log(listItem)
    }
}

todoItems(todos);
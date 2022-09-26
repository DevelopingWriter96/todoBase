const todoList = document.querySelector('.todoList');
const clear = document.querySelector('.clear');
const add = document.querySelector('.add')
const drop = document.querySelector('.dropdown');

let todos = [
    {
        Name:"View todos by category",
        Category: "Deleting",
        Status:""
    },
    {
        Name:"Add categories",
        Category: "Random",
        Status:""
    },
    {
        Name:"Select a category",
        Category: "Editing",
        Status:""
    },
    {
        Name:"Delete categories",
        Category: "Adding",
        Status:""
    },
    {
        Name:"Edit categories",
        Category: "Editing",
        Status:""
    },
    {
        Name:"Good user experience",
        Category: "Deleting",
        Status:""
    },
]

let todosCategory = [];

function getCategories(todos) {
    todos.forEach(todo => {
        let cat = todo.Category;
        if (todosCategory.includes(cat) == false) {
            todosCategory.push(cat);
        }
    })
}

getCategories(todos);

function categoryDropdown(todosCategory) {
    let defaultItem = document.createElement('option');
    defaultItem.textContent = "Choose One";
    drop.appendChild(defaultItem); 
    defaultItem.value = "Choose One";
    todosCategory.forEach(category => {
        let listCategory = document.createElement('option');
        listCategory.textContent = category;
        listCategory.value = category;
        drop.appendChild(listCategory);
    })
    let addItem = document.createElement('option');
    addItem.textContent = "Add a Category";
    drop.appendChild(addItem);
    addItem.value = "Add a Category";
    let editItem = document.createElement('option');
    editItem.textContent = "Edit a Category";
    drop.appendChild(editItem);
    editItem.value = "Edit a Category";
    let removeItem = document.createElement('option');
    removeItem.textContent = "Delete a Category"
    drop.appendChild(removeItem);
    removeItem.value = "Delete a Category";

}

categoryDropdown(todosCategory);

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
            listEditSpan.addEventListener('click', (index) => {
                let editInput = prompt('What is the new name?')
                let editedTodo = {
                    Name: editInput,
                    Status: ""
                 }
                todoList.removeChild(listItem)
                console.log(todos);
                todos.splice(index, 1);
                todos.push(editedTodo);
                singleItem(editedTodo, todos);
                completeNumber(todos)
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
        category: categoryInput,
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
            listEditSpan.addEventListener('click', (index) => {
                let editInput = prompt('What is the new name?')
                let editedTodo = {
                    Name: editInput,
                    Status: ""
                 }
                todoList.removeChild(listItem)
                console.log(todos);
                todos.splice(index, 1);
                todos.push(editedTodo);
                singleItem(editedTodo, todos);
                completeNumber(todos)
            });
            listEditSpan.appendChild(listEditIcon);
            listItem.appendChild(listEditSpan);
            listItem.addEventListener('click', () => {
                listItem.classList.toggle('done');
                if (listItem.Status == "") {
                    listItem.Status = "done"
                } else {
                    listItem.Status = ""
                }
                completeNumber(todos);
                console.log(todos);
            })
        listItem.addEventListener('click', () => {
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

function addCat() {
    console.log("Adding a Category");
}

function editCat() {
    console.log("Editing a Category");
}

function deleteCat() {
    console.log("Deleting a Category");
}

function sortCat(todos) {
    //let sortedArray = [];
    console.log(drop.value);
}

drop.addEventListener('change', () => {
    switch(drop.value) {
        case "Choose One":
            console.log("Please choose something")
            break;
        case "Add a Category":
            addCat();
            break;
        case "Edit a Category":
            editCat();
            break;
        case "Delete a Category":
            deleteCat();
            break;
        default:
            sortCat(todos);
    }
    
})

todoItems(todos);
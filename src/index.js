const todoList = document.querySelector('.todoList');
const clear = document.querySelector('.clear');
const add = document.querySelector('.add')
const drop = document.querySelector('#drop1');
const drop2 = document.querySelector('#drop2');
const addcat = document.querySelector('.addcat');
const deletecat = document.querySelector('.deletecat');
const editcat = document.querySelector('.editcat');
const sortcat = document.querySelector('.sortcat');

// let todos = [
//     {
//         Name:"View todos by category",
//         Category: "Deleting",
//         Status:"done"
//     },
//     {
//         Name:"Add categories",
//         Category: "Random",
//         Status:"done"
//     },
//     {
//         Name:"Select a category",
//         Category: "Editing",
//         Status:"done"
//     },
//     {
//         Name:"Delete categories",
//         Category: "Adding",
//         Status:""
//     },
//     {
//         Name:"Edit categories",
//         Category: "Editing",
//         Status:""
//     },
//     {
//         Name:"Good user experience",
//         Category: "Deleting",
//         Status:"done"
//     },
// ]

// let todosCategory = [];

async function getTodos() {
    let response = await fetch('/todos');
    let data = await response.json()

    return data;
}

async function getCategories() {
    let response = await fetch('/category')
    let data = await response.json()

    return data;
}

// function getCategories(todos) {
//     todos.forEach(todo => {
//         let cat = todo.Category;
//         if (todosCategory.includes(cat) == false) {
//             todosCategory.push(cat);
//         }
//     })
// }

//getCategories(todos);

function singleCat(todoCat) {
    let listCategory = document.createElement('option');
    listCategory.textContent = todoCat;
    listCategory.value = todoCat;
    listCategory.className = todoCat;
    drop.appendChild(listCategory);
}

function categoryDropdown(todosCategory) {
    drop.innerHTML = innerHTML = null;
    let defaultItem = document.createElement('option');
    defaultItem.textContent = "Choose One";
    drop.appendChild(defaultItem); 
    defaultItem.value = "Choose One";
    todosCategory.forEach(category => {
        singleCat(category)
    })
}

//categoryDropdown(todosCategory);

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
        listTrashSpan.addEventListener('click', () => {
            let id = item.id 
            fetch('/todos', {
                method: 'DELETE',
                body: JSON.stringify({ index: id }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(id)
                    console.log(data);
                    todoItems(data)
                })
        })      
            let listEditSpan = document.createElement('span');
            listEditSpan.className = "editBtn"
            let listEditIcon = document.createElement('i');
            listEditIcon.className = "fa fa-edit"
            listEditSpan.addEventListener('click', () => {
                let editInput = prompt('What is the new name?')
                let id = item.id  
                fetch('/todos', {
                    method: 'PUT',
                    body: JSON.stringify({ Name: editInput, index: id }),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        todoItems(data)
                    })
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
            todos.splice(index, 1);
            console.log(todos); 
        }
    })
} 

function todoItems(list) {
    // console.log(list);
    todoList.innerHTML = null;
    list.forEach(function(todo) {
        singleItem(todo, list)
    })
    
    let hasNodes = todoList.hasChildNodes();
    
    console.log(hasNodes);

    completeNumber(list);
}

function addItem(arr) {
    let input = document.getElementById('newTodo').value
    let newItem = {};
    if (drop.value === "Choose One") {
        alert("Please choose a category")
        return;
    }  else {  
        newItem = {
            Name: input,
            category: drop.value,
            Status: ""
        }
    }
    arr.push(newItem);

    let listItem = document.createElement('li');
        let listTrashSpan = document.createElement('span');
        let listTrashIcon = document.createElement('i');
        listItem.textContent = newItem.Name
        listItem.className = newItem.Status;
        listTrashIcon.className = "fa fa-trash"
        listTrashSpan.appendChild(listTrashIcon);  
        listTrashSpan.addEventListener('click', () => {
            let id = item.id 
            fetch('/todos', {
                method: 'DELETE',
                body: JSON.stringify({ index: id }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(id)
                    console.log(data);
                    todoItems(data)
                })
        })      
            let listEditSpan = document.createElement('span');
            listEditSpan.className = "editBtn"
            let listEditIcon = document.createElement('i');
            listEditIcon.className = "fa fa-edit"
            listEditSpan.addEventListener('click', () => {
                let editInput = prompt('What is the new name?')
                let id = item.id 
                fetch('/todos', {
                    method: 'PUT',
                    body: JSON.stringify({ Name: editInput, index: id }),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        todoItems(data)
                    })
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

// function addbuttonClick() {
//     addItem(todos);
// }

// add.addEventListener('click', addbuttonClick)

// addcat.addEventListener('click', () => {
//     let newCat = prompt('What is the new Category?')
//     todosCategory.push(newCat);
//     singleCat(newCat);
// })

editcat.addEventListener('click', () => {
    let value = drop.value
    let index = drop.selectedIndex - 1;
    if (drop.value === "Choose One") {
        alert("Please choose a category")
        return;
    }  else {
        let editedCat = prompt('What will the new Category be?')
        fetch('/category', {
            method: 'PUT',
            body: JSON.stringify({ Value: value, Category: editedCat, index: index }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                categoryDropdown(data);
                console.log(data);
            }) 
    }
})

deletecat.addEventListener('click', () => {
    let value = drop.value
    let index = drop.selectedIndex - 1;
    if (drop.value === "Choose One") {
        alert("Please choose a category")
        return;
    }  else {
        fetch('/category', {
            method: 'DELETE',
            body: JSON.stringify({ Value: value, index: index }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                categoryDropdown(data);
                console.log(data);
            }) 
        }
})

// sortcat.addEventListener('click', () => {
//     let sortedArray = [];
//     if (drop.value === "Choose One") {
//         alert("Please choose a category")
//         return;
//     }  else {
//     todos.forEach(todo => {
//         if (todo.Category === drop.value){
//             sortedArray.push(todo);
//         }
//     })
//     console.log(sortedArray);
//     todoList.innerHTML =
//         null;
//     todoItems(sortedArray);
// }
// })

// todoItems(data);

getTodos().then(todos =>{
    console.log(todos)
    todoItems(todos)
    
})

getCategories().then(categories =>{
    console.log(categories)
    categoryDropdown(categories)
    
})

add.addEventListener('click', () => {
    let input = document.getElementById('newTodo').value;
    let cat = drop.value
    if (cat === "Choose One") {
        alert("Please choose a category")
        return;
    } else {
    fetch('/todos', {
        method: 'POST',
        body: JSON.stringify({ Name: input,  Category: cat}),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => {
            todoItems(data)
            console.log(data)
        })
    }
})

sortcat.addEventListener('click', () => {
    let sortCat = drop.value;
    if (sortCat === "Choose One") {
        alert("Please choose a category")
        return;
    }  else {
    fetch(`/sort?Category=${sortCat}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => {
            todoItems(data)
            console.log(data)
        })
    }
})

addcat.addEventListener('click', () => {
    let newCat = prompt('What is the new Category?')
    fetch('/category', {
        method: 'POST',
        body: JSON.stringify({ Category: newCat }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            categoryDropdown(data);
        })
})


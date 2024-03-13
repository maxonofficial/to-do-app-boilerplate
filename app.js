const addBtn = document.getElementById("button");
const input = document.querySelector("#input");
const list = document.querySelector('#todolist');

let todoList = [];

function createList(listItem, value) {
    let content = document.createElement('p');
    content.innerText = value;
    listItem.append(content);
    let editBtn = document.createElement('a');
    editBtn.innerText = 'Edit';
    editBtn.setAttribute('class', 'edit');
    listItem.append(editBtn);
    let seperator = document.createElement('span');
    seperator.innerText = ' | '
    listItem.append(seperator);
    let delBtn = document.createElement('a');
    delBtn.innerText = 'x';
    delBtn.setAttribute('class', 'delete');
    listItem.append(delBtn);
}

function addTask(task) {
    if (task === '') {
        alert("Enter a valid input");
        input.value = ""
        return;
    }
    if (todoList.indexOf(task) != -1) {
        alert("task already present");
        input.value = ""
        return;
    }
    todoList.push(task);
    let listItem = document.createElement('li');
    // listItem.textContent = task;
    listItem.setAttribute('id', todoList.indexOf(task));
    createList(listItem, task);
    list.append(listItem);
    input.value = ""
    // console.log(todoList);
}

function editTask(id) {
    let edited = prompt("Edit the text", todoList[id]);
    if (edited == "") {
        alert("Enter a valid input");
        return;
    }
    todoList[id] = edited;
    let li = document.getElementById(id)
    li.querySelector('p').innerText = edited;
    // console.log(todoList);
}

function removeTask(id) {
    delete todoList[id];
    // console.log(todoList);
}


addBtn.addEventListener("click", () =>
    addTask(input.value)
);

list.addEventListener('click', (listItem) => {
    if (listItem.target.innerText === 'x') {
        removeTask(listItem.target.parentElement.id);
        list.removeChild(listItem.target.parentElement);
    };
    if (listItem.target.innerText === 'Edit') {
        editTask(listItem.target.parentElement.id);
    }
})


'use strict';

const listName = "taskList";
const newTaskInp = document.getElementById('newTaskInp');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoOutput = document.getElementById('todoList');
let toDoList = [];

class toDo {
    constructor (id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}

function getList () {
    const listJson = localStorage.getItem(listName);
    if (listJson) {
        toDoList = JSON.parse(listJson);
    } else { saveList(); }
}

function saveList () {
    const listStr = JSON.stringify(toDoList);

    localStorage.setItem(listName, listStr);
}

function showList () {
    
    for (let i = 0; i < toDoList.length; i++) {
        const task = toDoList[i].content;
        let outputStr = "";
        const taskId = toDoList[i].id;
        
        outputStr += '<input type="checkbox" class="checkBox" id="' + taskId + '"';
        if (toDoList[i].completed == true) { outputStr += ' checked'; }
        outputStr += '><div class="tasks">' 
        + task + '</div><button class="taskBtn">X</button><br><br>';

        todoOutput.innerHTML += outputStr;
    }

}

function addNewTask () {
    const newTask = newTaskInp.value;

    if (newTask) {
        const newToDo = new toDo(Date.now(), newTask, false);
        toDoList.push(newToDo);
        
        saveList();
        console.log(localStorage);
        location.reload();
    }

}

function completeTask () {
    const checkedTask = this;
    const taskId = this.id;

    console.log(taskId);

    toDoList.forEach(function(task, index) {
        if (task.id == taskId) {
            toDoList[index].completed = true;
        }
    })

    saveList();

}

//removeTask: () => {},

//filterTasks: () => {}

addTaskBtn.addEventListener('click', this.addNewTask, false);

getList();
showList();

const taskBoxes = document.getElementsByClassName("checkBox");

for (var i = 0; i < taskBoxes.length; i++) {
    taskBoxes[i].addEventListener('click', this.completeTask, false);
}

//module.exports = functions;
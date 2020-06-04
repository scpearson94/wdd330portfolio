'use strict';

const listName = "taskList";
const newTaskInp = document.getElementById('newTaskInp');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoOutput = document.getElementById('output');
let toDoList = [];
let activeOption = true;
let completedOption = true;

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
    todoOutput.innerHTML = ""; 
    
    for (let i = 0; i < toDoList.length; i++) {
        const task = toDoList[i].content;
        const notActive = toDoList[i].completed;
        const taskId = toDoList[i].id;
        let outputStr = "";
        
        outputStr += '<div class="todoElement"><input type="checkbox" class="checkBox" id="' + taskId + '"';
        if (notActive == true) { outputStr += ' checked'; }
        outputStr += '><div class="tasks';
        if (notActive == true) { outputStr += ' completedTasks'; }
        outputStr += '">' + task + '</div><button class="taskBtn" id="' + i + '">X</button></div>';

        //filter
        if (this.innerHTML == "Active.") {
            activeOption = true;
            completedOption = false;
            if (notActive == false) {
                todoOutput.innerHTML += outputStr;
            }
            activeSelector.style.border = "1px solid black";
            completedSelector.style.border = "none";
            allSelector.style.border = "none";
        } else if (this.innerHTML == "Completed.") {
            activeOption = false;
            completedOption = true;
            if (notActive == true) {
                todoOutput.innerHTML += outputStr;
            }
            activeSelector.style.border = "none";
            completedSelector.style.border = "1px solid black";
            allSelector.style.border = "none";
        } else {
            activeOption = true;
            completedOption = true;
            todoOutput.innerHTML += outputStr;
            activeSelector.style.border = "none";
            completedSelector.style.border = "none";
            allSelector.style.border = "1px solid black";
        }
    }
    addTaskListeners();
    countActiveTasks();
    newTaskInp.value = "";
    newTaskInp.focus();
}

function countActiveTasks () {
    const activeList = toDoList.filter(toDoItem => toDoItem.completed == false);
    const activeTaskCount = activeList.length;
    document.getElementById("taskCount").innerHTML = activeTaskCount + " tasks left";
}

function addNewTask () {
    const newTask = newTaskInp.value;

    if (newTask) {
        const newToDo = new toDo(Date.now(), newTask, false);
        toDoList.push(newToDo);
        
        saveList();
        reloadList();
    }

}

function completeTask () {
    const checkedTask = this;
    const taskId = this.id;

    toDoList.forEach(function(task, index) {
        if (task.id == taskId) {
            if (checkedTask.checked) {
                toDoList[index].completed = true;
            } else {
                toDoList[index].completed = false;
            }
        }
    })

    saveList();
    reloadList();
}

function removeTask () {
    const removeTaskIndex = this.id;
    toDoList.splice(removeTaskIndex, 1);

    saveList();
    reloadList();
}

function reloadList () {
    if (activeOption == true && completedOption == false) {
        activeSelector.click();
    } else if (completedOption == true && activeOption == false) {
        completedSelector.click();
    } else {
        allSelector.click();
    }
}

addTaskBtn.addEventListener('click', this.addNewTask, false);

getList();

const allSelector = document.getElementById("selectAll");
const activeSelector = document.getElementById("selectActive");
const completedSelector = document.getElementById("selectCompleted");

allSelector.addEventListener('click', showList, false);
activeSelector.addEventListener('click', showList, false);
completedSelector.addEventListener('click', showList, false);

allSelector.click();

function addTaskListeners () {
    const taskBoxes = document.getElementsByClassName("checkBox");
    const removeTaskBtns = document.getElementsByClassName("taskBtn");

    for (var i = 0; i < taskBoxes.length; i++) {
        taskBoxes[i].addEventListener('click', completeTask, false);
    }

    for (var i = 0; i < removeTaskBtns.length; i++) {
        removeTaskBtns[i].addEventListener('click', removeTask, false);
    }
}

//module.exports = functions;
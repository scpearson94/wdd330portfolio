'use strict';

const listName = "groceryList";
const newItemName = document.getElementById('newItemName');
const purchaseDate = document.getElementById('purchaseDate');
const repurchaseDate = document.getElementById('repurchaseDate');
const addItemBtn = document.getElementById('addItemBtn');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
let toDoList = [];
let activeOption = true;
let completedOption = true;

class Item {
    constructor (id, content, completed, pDate, rDate) {
        this.id = id;
        this.content = content;
        this.completed = completed;
        this.pDate = new Date(pDate);
        this.rDate = new Date(rDate);
    }
}

function showList () {
    output1.innerHTML = ""; 
    output2.innerHTML = "";
    
    for (let i = 0; i < toDoList.length; i++) {
        const item = toDoList[i].content;
        const notActive = toDoList[i].completed;
        const taskId = toDoList[i].id;
        const rDate = toDoList[i].rDate;
        let outputStr = "";
        var today = new Date();
        var date = new Date(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate());
        
        outputStr += '<div class="todoElement"><input type="checkbox" class="checkBox" id="' + taskId + '"';
        if (notActive == true) { outputStr += ' checked'; }
        outputStr += '><div class="tasks';
        if (notActive == true) { outputStr += ' completedTasks'; }
        outputStr += '">' + item + '</div><button class="taskBtn" id="' + i + '">X</button></div>';

        console.log(today);
        console.log(rDate);
        //filter
        if (rDate <= date) {
            output1.innerHTML += outputStr;
        } else {
            output2.innerHTML += outputStr;
        }

        /*if (this.innerHTML == "Active.") {
            activeOption = true;
            completedOption = false;
            if (notActive == false) {
                output1.innerHTML += outputStr;
            }
            activeSelector.style.border = "1px solid black";
            completedSelector.style.border = "none";
            allSelector.style.border = "none";
        } else if (this.innerHTML == "Completed.") {
            activeOption = false;
            completedOption = true;
            if (notActive == true) {
                output1.innerHTML += outputStr;
            }
            activeSelector.style.border = "none";
            completedSelector.style.border = "1px solid black";
            allSelector.style.border = "none";
        } else {
            activeOption = true;
            completedOption = true;
            output1.innerHTML += outputStr;
            activeSelector.style.border = "none";
            completedSelector.style.border = "none";
            allSelector.style.border = "1px solid black";
        }*/
    }
    addTaskListeners();
    countActiveTasks();
    newItemName.value = "";
    newItemName.focus();
}

function countActiveTasks () {
    const activeList = toDoList.filter(toDoItem => toDoItem.completed == false);
    const activeTaskCount = activeList.length;
    document.getElementById("taskCount").innerHTML = activeTaskCount + " tasks left";
}

function reloadList () {
    showList();
}

toDoList = getList();

const allSelector = document.getElementById("selectAll");
const activeSelector = document.getElementById("selectActive");
const completedSelector = document.getElementById("selectCompleted");

addItemBtn.addEventListener('click', this.addNewItem, false);

showList();

function addTaskListeners () {
    const taskBoxes = document.getElementsByClassName("checkBox");
    const removeTaskBtns = document.getElementsByClassName("taskBtn");

    for (var i = 0; i < taskBoxes.length; i++) {
        taskBoxes[i].addEventListener('click', completeTask, false);
    }

    for (var i = 0; i < removeTaskBtns.length; i++) {
        removeTaskBtns[i].addEventListener('click', removeItem, false);
    }
}
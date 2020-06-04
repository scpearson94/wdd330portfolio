'use strict';

function addNewTask () {
    const newTask = newTaskInp.value;

    if (newTask) {
        const newToDo = new toDo(Date.now(), newTask, false);
        toDoList.push(newToDo);
        
        saveList(toDoList);
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

    saveList(toDoList);
    reloadList();
}

function removeTask () {
    const removeTaskIndex = this.id;
    toDoList.splice(removeTaskIndex, 1);

    saveList(toDoList);
    reloadList();
}
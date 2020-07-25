'use strict';

function addNewItem () {
    const itemName = newItemName.value;
    const pDate = purchaseDate.value;
    const rDate = repurchaseDate.value;

    if (itemName && pDate && rDate) {
        if (pDate < rDate) {
            const newItem = new Item(Date.now(), itemName, false, pDate, rDate);
            toDoList.push(newItem);
            
            saveList(toDoList);
            reloadList();
        }
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

function removeItem () {
    const removeItemIndex = this.id;
    toDoList.splice(removeItemIndex, 1);

    saveList(toDoList);
    reloadList();
}
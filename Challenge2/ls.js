'use strict';

function getList () {
    const listJson = localStorage.getItem(listName);
    if (listJson) {
        toDoList = JSON.parse(listJson);
    } else { saveList(toDoList); }

    return toDoList;
}

function saveList (toDoList) {
    const listStr = JSON.stringify(toDoList);

    localStorage.setItem(listName, listStr);
}
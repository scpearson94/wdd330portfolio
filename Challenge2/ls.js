'use strict';

function getList () {
    const listJson = localStorage.getItem(listName);
    if (listJson) {
        const itemListObj = JSON.parse(listJson);
        itemListObj.forEach( item => 
            itemList.push(new Item(item.id, item.name, item.completed, new Date(item.pDate), new Date(item.rDate))));
    } else { saveList(itemList); }

    return itemList;
}

function saveList (itemList) {
    const listStr = JSON.stringify(itemList);

    localStorage.setItem(listName, listStr);
}
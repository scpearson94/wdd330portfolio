'use strict';

function addNewItem () {
    const itemName = newItemName.value;
    const pDate = new Date(purchaseDate.value);
    const rDate = new Date(repurchaseDate.value);

    if (itemName && pDate && rDate) {
        if (pDate < rDate) {
            const newItem = new Item(Date.now(), itemName, false, pDate, rDate);
            itemList.push(newItem);
            
            saveList(itemList);
            showList();
        }
    }

}

function completeItem () {
    const checkedItem = this;
    const itemId = this.id;

    itemList.forEach(function(item, index) {
        if (item.id == itemId) {
            if (checkedItem.checked) {
                itemList[index].completed = true;
            } else {
                itemList[index].completed = false;
            }
        }
    })

    saveList(itemList);
    showList();
}

function removeItem () {
    const removeItemIndex = this.id;
    itemList.splice(removeItemIndex, 1);

    saveList(itemList);
    showList();
}
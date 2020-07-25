'use strict';

const listName = "groceryList";
const newItemName = document.getElementById('newItemName');
const purchaseDate = document.getElementById('purchaseDate');
const repurchaseDate = document.getElementById('repurchaseDate');
const addItemBtn = document.getElementById('addItemBtn');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
let itemList = [];
let activeOption = true;
let completedOption = true;

class Item {
    constructor (id, name, completed, pDate, rDate) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.pDate = new Date(pDate);
        this.rDate = new Date(rDate);
    }
}

function showList () {
    output1.innerHTML = ""; 
    output2.innerHTML = "";
    
    for (let i = 0; i < itemList.length; i++) {
        const item = itemList[i].name;
        const notActive = itemList[i].completed;
        const itemId = itemList[i].id;
        const rDate = itemList[i].rDate;
        let outputStr = "";
        var today = new Date();
        
        outputStr += '<div class="listElement"><input type="checkbox" class="checkBox" id="' + itemId + '"';
        if (notActive == true) { outputStr += ' checked'; }
        outputStr += '><div class="items';
        if (notActive == true) { outputStr += ' completedItems'; }
        outputStr += '">' + item + '</div><button class="itemBtn" id="' + i + '">X</button></div>';

        //filter
        if (rDate <= today) {
            output1.innerHTML += outputStr;
        } else {
            output2.innerHTML += outputStr;
        }
    }
    addItemListeners();
    countActiveItems();
    newItemName.value = "";
    newItemName.focus();
}

function countActiveItems () {
    const repurchaseList = itemList.filter(item => item.rDate <= new Date());
    const reItemCount = repurchaseList.length;
    const toPurchaseList = itemList.filter(item => item.rDate > new Date());
    const toItemCount = toPurchaseList.length;
    document.getElementById("itemCount1").innerHTML = reItemCount + " items";
    document.getElementById("itemCount2").innerHTML = toItemCount + " items";
}

itemList = getList();

const allSelector = document.getElementById("selectAll");
const activeSelector = document.getElementById("selectActive");
const completedSelector = document.getElementById("selectCompleted");

addItemBtn.addEventListener('click', this.addNewItem, false);

showList();

function addItemListeners () {
    const itemBoxes = document.getElementsByClassName("checkBox");
    const removeitemBtns = document.getElementsByClassName("itemBtn");

    for (var i = 0; i < itemBoxes.length; i++) {
        itemBoxes[i].addEventListener('click', completeItem, false);
    }

    for (var i = 0; i < removeitemBtns.length; i++) {
        removeitemBtns[i].addEventListener('click', removeItem, false);
    }
}
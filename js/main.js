function calcAmount() {
let price = 1000;
let amountinput = document. querySelector("input[name='amount-input']");
let showAmount = document.querySelector("span.show-amount");
let amountNumber= parseInt(amountinput.value);
amountNumber= isNaN(amountNumber) ? 0 : amountNumber;



if (amountNumber > 10) {
    alert("Maximum 10 termék rendelhető!");

 } else if (amountNumber < 1) {
alert("minimum 1 terméket rendelhet!");
 }  else {
     let amount = parseInt (amountinput.value)*price;
showAmount.innerHTML = amount;
}

function massModify( selector, attribute, value) {
let nodeList= document.querySelectorAll(selector);
for ( let i=0; i < nodeList.length; i++) {
nodeList[i] [attribute]= value;
        }
}
massModify ( "input", "placeholder", "Tamas")

let myList = document.querySelectorAll("input");
for ( let i=0; i < myList.length; i++) {
myList[i].style.border = "solid 2px green";}
}
myList[i];

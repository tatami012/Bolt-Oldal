function calcAmount() {
let price = 1000;
let amountinput = document. querySelector("input[name='amount-input']");
let amount = parseInt (amountinput.value)*price;
alert("Fizetendő:"+ amount + "Ft");
}

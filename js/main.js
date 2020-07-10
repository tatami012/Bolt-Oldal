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
}

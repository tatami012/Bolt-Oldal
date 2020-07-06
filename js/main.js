function calcAmount() {
let price = 1000;
let amountinput = document. querySelector("input[name='amount-input']");
let showAmount = document.querySelector("span.show-amount");
let amount = parseInt (amountinput.value)*price;


showAmount.innerHTML = amount;

}

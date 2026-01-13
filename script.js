const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");


let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction(textValue, amountValue) {
  let transaction = {
    id: Date.now(),
    text: textValue,
    amount: amountValue
  };
  transactions.push(transaction);

  addTransactionDOM(transaction);
  updateValues()

}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const textValue = text.value;
  const amountValue = amount.value;

  addTransaction(text.value, +amount.value);

});
function addTransactionDOM(transaction) {
  const li = document.createElement("li");
  li.innerHTML = `
    ${transaction.text} 
    <span>₹${Math.abs(transaction.amount)}</span>
    <button onclick="removeTransaction(${transaction.id})">x</button>
  `;
  list.appendChild(li);

}

function updateValues() {
  let total = 0;
  transactions.forEach((t) => {
    total += t.amount;
  });
  balance.innerText = total;

  let incomeTotal = 0;
  let expenseTotal = 0;

  transactions.forEach((t) => {
    if (t.amount > 0) {
      incomeTotal += t.amount;
    } else {
      expenseTotal += t.amount;
    }
  });
  income.innerText = incomeTotal;
  expense.innerText = Math.abs(expenseTotal);
}

function removeTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  init();
}
function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactionDOM);
  updateValues();
}

localStorage.setItem("transactions",JSON.stringify(transactions));
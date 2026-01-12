const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");


let transactions = [];

function addTransaction(text,amount){
  let transaction = {
    text :text,
    amount : amount,
  };
  transactions.push(transaction);
  console.log(transactions);
}

form.addEventListener("submit", function(e){
  e.preventDefault();
  console.log("form submitted");
})
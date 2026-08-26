document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  // Load expenses from localStorage or initialize empty array
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Render initial expenses and calculate total
  renderExpenses();
  updateTotal();

  // Add Expense Event
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      };

      expenses.push(newExpense);
      saveExpensesToLocalStorage();
      renderExpenses();
      updateTotal();

      // Clear input fields
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  // Event Delegation for Delete Button
  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => expense.id !== expenseId);
      saveExpensesToLocalStorage();
      renderExpenses();
      updateTotal();
    }
  });

  // Function to render expenses list
  function renderExpenses() {
    expenseList.innerHTML = "";

    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${expense.name} - $${expense.amount.toFixed(2)}</span>
        <button data-id="${expense.id}">Delete</button>
      `;
      expenseList.appendChild(li);
    });
  }

  // Function to calculate total amount
  function updateTotal() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalAmountDisplay.textContent = total.toFixed(2);
  }

  // Function to save array in localStorage
  function saveExpensesToLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
});
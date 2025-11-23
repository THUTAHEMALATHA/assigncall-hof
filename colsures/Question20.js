function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      console.log("Current count:", count);
      return count;
    },
    decrement: function() {
      count--;
      console.log("Current count:", count);
      return count;
    }
  };
}

// Usage Example
const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1
// 2
function createBankAccount() {
  let balance = 0;
  let transactionHistory = [];

  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        transactionHistory.push({ type: "deposit", amount: amount });
        console.log("Deposited:", amount);
      }
      return balance;
    },
    withdraw: function(amount) {
      if (amount <= balance && amount > 0) {
        balance -= amount;
        transactionHistory.push({ type: "withdraw", amount: amount });
        console.log("Withdrawn:", amount);
      } else {
        console.log("Insufficient balance");
      }
      return balance;
    },
    getBalance: function() {
      console.log("Current balance:", balance);
      return balance;
    },
    getTransactionHistory: function() {
      return transactionHistory;
    }
  };
}

// Usage Example
const account = createBankAccount();
account.deposit(500);      // Output: Deposited: 500
account.withdraw(200);     // Output: Withdrawn: 200
account.withdraw(400);     // Output: Insufficient balance
account.getBalance();      // Output: Current balance: 300
console.log(account.balance); // Output: undefined
console.log(account.getTransactionHistory());
// Output: Array of transaction objects

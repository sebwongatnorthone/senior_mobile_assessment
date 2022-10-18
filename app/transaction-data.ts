import { type Transaction } from "./types";

let transactions = generateTransactions(2499);

/**
 * Fetch the "current" user's transactions.
 */
export async function fetchTransactions(): Promise<Response> {
  transactions = [...transactions, generateDebit(transactions.length, 20)];
  const response = new Response(JSON.stringify(transactions), {
    status: 200,
    statusText: "OK",
  });

  return Promise.resolve(response);
}

function generateTransactions(count: number): Transaction[] {
  let balance = 0;
  let lastCreditAmount = balance;

  let transactions: Transaction[] = [];
  for (let i = 0; i < count; i++) {
    let transaction: Transaction;
    if (balance < 100) {
      transaction = generateCredit(i);
      lastCreditAmount = transaction.amount;
    } else {
      transaction = generateDebit(i, lastCreditAmount / 10);
    }

    balance += transaction.amount;
    transactions = [...transactions, transaction];
  }

  // Top off account to keep balance roughly positive as new debits are
  // generated each time `fetchTransactions()` is called.
  transactions = [...transactions, generateCredit(transactions.length)];

  return transactions;
}

function generateCredit(id: number): Transaction {
  return {
    id,
    type: "deposit",
    amount: Math.floor(randomAmount(10, 50)) * 100,
  };
}

function generateDebit(id: number, maxAmount = 10): Transaction {
  const debitTypes: Transaction["type"][] = ["creditCard", "debitCard", "wire"];
  return {
    id,
    type: debitTypes[Math.floor(Math.random() * debitTypes.length)],
    amount: -randomAmount(1, maxAmount),
  };
}

function randomAmount(min: number, max: number) {
  const n = Math.random() * (max - min) + min;
  return Math.trunc(n * 100) / 100.0;
}

export interface Transaction {
  id: number;
  type: "creditCard" | "debitCard" | "deposit" | "wire";
  amount: number;
}

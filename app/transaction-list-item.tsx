import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { type Transaction } from "./types";

export const TransactionListItem = ({
  transaction,
}: {
  transaction: Transaction;
}) => {
  return (
    <ListCard
      amount={transaction.amount}
      title={`#${transaction.id} ${transaction.type}`}
    /**
     * TODO: For wires,
     *       1. add subtitle="A fee may apply" under the title
     *       2. downsize the font by 2 points
     *       3. use font color "slategray"
     */
    /**
     * TODO: For deposits,
     *       1. add subtitle="A fee may apply" under the title
     *       2. keep the regular font size
     *       3. use font color "slategray"
     */
    />
  );
};

// Note: This component is intentionally separate from `TransactionListItem`.
// Avoid inlining this, regardless of how strong the temptation is!
const ListCard = ({ title, amount }: { title: string; amount: number }) => (
  <TouchableOpacity
    style={{
      padding: 10,
      borderRadius: 2,
      backgroundColor: "#eee",
      marginHorizontal: 15,
      marginVertical: 2,
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    {amount > 0 ? (
      <>
        <Text style={{ fontSize: 14, color: "navy" }}>{title}</Text>
        <Text style={{ color: "green", fontWeight: "400" }}>{amount}</Text>
      </>
    ) : (
      <>
        <Text style={{ fontSize: 14, color: "navy" }}>{title}</Text>
        <Text style={{ fontWeight: "200" }}>{amount}</Text>
      </>
    )}
  </TouchableOpacity>
);

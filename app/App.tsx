import React from "react";
import { Button, SafeAreaView, StatusBar, Text, View } from "react-native";

import { fetchTransactions } from "./transaction-data";
import { TransactionList } from "./transaction-list";

const App = () => {
  const balance = undefined;
  const [transactions, setTransactions] = React.useState([]);

  return (
    <SafeAreaView>
      <StatusBar />
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 20,
          marginVertical: 20,
        }}>
        Balance: {balance !== undefined ? balance : "?"}
      </Text>
      <View
        style={{
          paddingBottom: 10,
          marginBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}>
        <Button
          title="Update (JS)"
          onPress={async () => {
            // TODO: Compute and set balance.

            const response = await fetchTransactions();
            const newTransactions = await response.json();
            setTransactions(newTransactions);
          }}
        />
        <Button
          title="Update (Native)"
          onPress={() => {
            // TODO: Compute balance via native module and set.
            // TODO: Update transaction list.
          }}
        />
      </View>
      <TransactionList transactions={transactions} />
    </SafeAreaView>
  );
};

export default App;

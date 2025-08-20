import React, { useState } from "react";
import { Text, TextInput, View, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform } from "react-native";

export default function Index() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleAddition = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
      Alert.alert("Virheellinen syöte", "Syötä vain numeroita.");
      return;
    }

    setResult(parsedNum1 + parsedNum2);
  };

  const handleSubtraction = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
      Alert.alert("Virheellinen syöte", "Syötä vain numeroita.");
      return;
    }

    setResult(parsedNum1 - parsedNum2);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Laskin</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Syötä ensimmäinen numero"
          value={num1}
          onChangeText={setNum1}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Syötä toinen numero"
          value={num2}
          onChangeText={setNum2}
        />
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={handleAddition} />
          <Button title="-" onPress={handleSubtraction} />
        </View>
        {result !== null && <Text style={styles.result}>Tulos: {result}</Text>}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginVertical: 12,
  },
  result: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
  },
});

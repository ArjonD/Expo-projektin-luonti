import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Button,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    StyleSheet, Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

type Rates = Record<string, number>;

export default function CurrencyConverter() {
    const [rates, setRates] = useState<Rates>({});
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json")
            .then((res) => res.json())
            .then((data) => {
                setRates(data.eur);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching rates:", err);
                setLoading(false);
            });
    }, []);

    const handleConvert = () => {
        const num = parseFloat(amount);
        if (!isNaN(num) && selectedCurrency && rates[selectedCurrency]) {
            const valueInEUR = num / rates[selectedCurrency];
            setResult(valueInEUR);
        } else {
            setResult(null);
        }
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.container}>
                <StatusBar hidden={true} />

                {result !== null && (
                    <Text style={styles.result}>{result.toFixed(2)} €</Text>
                )}

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Amount"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />
                </View>

                <FlatList
                    data={Object.keys(rates)}
                    keyExtractor={(item) => item}
                    numColumns={3}
                    contentContainerStyle={styles.tableContainer}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.tableCell,
                                item === selectedCurrency && styles.selectedCell,
                            ]}
                            onPress={() => setSelectedCurrency(item)}
                        >
                            <Text
                                style={[
                                    styles.cellText,
                                    item === selectedCurrency && styles.selectedText,
                                ]}
                            >
                                {item.toUpperCase()}
                            </Text>
                        </TouchableOpacity>
                    )}
                />

                <View style={styles.buttonContainer}>
                    <Button title="CONVERT" onPress={handleConvert} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    inputContainer: {
        width: "90%",
        alignItems: "center",
        marginBottom: 16,
    },
    input: {
        width: "100%",
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 12,
        paddingHorizontal: 8,
        textAlign: "center",
    },
    buttonContainer: {
        width: "90%",
        marginVertical: 12,
    },
    result: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
    },
    tableContainer: {
        paddingVertical: 10,
    },
    tableCell: {
        flexBasis: "30%",    
        margin: 5,
        height: 60,          
        backgroundColor: "#f0f0f0",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    selectedCell: {
        backgroundColor: "#4c8bf5",
    },
    cellText: {
        fontSize: 16,
        color: "#000",       
    },
    selectedText: {
        color: "#fff",       
    },
});


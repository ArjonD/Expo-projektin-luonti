import React, { useState } from "react";
import { Button, KeyboardAvoidingView, Platform, StyleSheet, FlatList, Text, TextInput, View } from "react-native";

export default function Shoppinglist() {
    const [item, setItem] = useState("");
    const [items, setItems] = useState<{ key: String }[]>([]);

    const handleAddition = () => {
        setItems([...items, { key: item }]);
        setItem("");
    };

    const handleClear = () => {
        setItems([]);
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <View style={styles.container}>
                <Text style={styles.title}>Shopping list</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Item"
                    value={item}
                    onChangeText={text => setItem(text)}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Add" onPress={handleAddition} />
                    <Button title="Clear" onPress={handleClear} />
                </View>
                <FlatList
                    data={items}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                />
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
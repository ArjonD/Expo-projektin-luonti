import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Hello() {
    const [temp, setTemp] = useState("");
    const [name, setName] = useState("etunimi");

    return <View style={styles.container}>
        <Text>Hello {name}</Text>
        <TextInput
            value={temp}
            style={styles.firstName}
            onChangeText={text => setTemp(text)}
        />
        <Button title="Ok" onPress={() => setName(temp)} />
    </View>;
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "silver",
        padding: 10,
        gap: 10,
        justifyContent: "center",
        flex: 1
    },
    firstName: {
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white"
    }
});
// Import useState hook function
import React, { useState } from 'react';
import { Button, KeyboardAvoidingView, Platform, StyleSheet, FlatList, Text, TextInput, View, Image } from "react-native";

export default function Reseptilista () {
// declare states
const [keyword, setKeyword] = useState('');
const [reseptit, setReseptit] = useState<{ idMeal: string; [key: string]: any }[]>([]);

    const handleFetch = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`);
        if (!response.ok) {
            console.error("Error in fetch:" + response.statusText);
            return;
        }
        const data = await response.json();
        setReseptit(data.meals);
    };

return (
    <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='keyword'
                value={keyword}
                onChangeText={text => setKeyword(text)}
            />
            <Button title="Find" onPress={handleFetch} />
            <FlatList
                data={reseptit}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item }) => 
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            {item.strMeal}
                        </Text>
                        <Image source={{ uri: item.strMealThumb }} style={{ width: 100, height: 100 }} />
                    </View>
                }
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
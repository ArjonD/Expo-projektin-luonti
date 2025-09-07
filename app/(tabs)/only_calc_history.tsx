import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useCalcHistory } from '../../contexts/CalcHistoryContext';

export default function OnlyCalcHistory() {
    const { history } = useCalcHistory();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Laskin historia</Text>
            <FlatList
                data={history}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.equation}</Text>
                )}
                ListEmptyComponent={<Text style={styles.empty}>Tyhjä :/</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    item: {
        fontSize: 18,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    empty: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginTop: 32,
    },
});

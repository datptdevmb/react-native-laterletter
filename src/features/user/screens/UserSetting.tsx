import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cài đặt</Text>

            <View style={styles.row}>
                <Text style={styles.label}>Chế độ tối</Text>
                <Switch value={false} onValueChange={() => { }} />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Thông báo</Text>
                <Switch value={true} onValueChange={() => { }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    label: { fontSize: 16 },
});

export default SettingsScreen;

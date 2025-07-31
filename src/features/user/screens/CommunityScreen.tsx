import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyData = [
    { id: '1', title: 'Thư từ ẩn danh', content: 'Chúc bạn luôn vững vàng trong mọi chuyện...' },
    { id: '2', title: 'Thư theo chủ đề: Yêu thương', content: 'Dù ở đâu, bạn vẫn luôn được yêu quý.' },
];

const CommunityScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Cộng đồng cảm xúc 💌</Text>

            <FlatList
                data={dummyData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.content}>{item.content}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
    card: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#f1f1f1',
        marginBottom: 10,
    },
    title: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
    content: { fontSize: 14, color: '#444' },
});

export default CommunityScreen;

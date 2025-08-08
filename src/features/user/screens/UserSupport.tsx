import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SupportScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hỗ trợ & Góp ý</Text>
            <Text style={styles.text}>Nếu bạn gặp sự cố hoặc có đề xuất cải tiến, hãy liên hệ chúng tôi qua:</Text>
            <Text style={styles.email}>📧 support@laterletter.app</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    text: { fontSize: 16, lineHeight: 22 },
    email: { fontSize: 16, marginTop: 10, fontWeight: '600', color: '#3478f6' },
});

export default SupportScreen;

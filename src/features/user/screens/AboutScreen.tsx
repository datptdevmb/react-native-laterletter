import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Giới thiệu về ứng dụng</Text>
            <Text style={styles.text}>
                LaterLetter là ứng dụng cho phép bạn viết thư gửi đến tương lai – cho chính mình, người thân hay cộng đồng.
                Chúng tôi tin rằng cảm xúc được lưu giữ là điều quý giá.
            </Text>

            <Text style={styles.subtitle}>Thông tin</Text>
            <Text style={styles.text}>Phiên bản: 1.0.0</Text>
            <Text style={styles.text}>Website:
                <Text style={styles.link} onPress={() => Linking.openURL('https://laterletter.app')}>
                    {' '}laterletter.app
                </Text>
            </Text>

            <Text style={styles.text}>© 2025 Vietwin | All rights reserved.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
    subtitle: { fontSize: 18, fontWeight: '600', marginTop: 20, marginBottom: 10 },
    text: { fontSize: 15, lineHeight: 22, marginBottom: 10 },
    link: { color: '#1e90ff' }
});

export default AboutScreen;

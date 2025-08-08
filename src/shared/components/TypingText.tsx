import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';

// Chỉ một gợi ý mỗi lần mở app
const rainSuggestions = [
    '🌧️ Cơn mưa này gợi cho bạn nhớ đến ai?',
    '💭 Có điều gì bạn từng muốn nói nhưng chưa kịp?',
    '📮 Bạn có từng nhớ ai đó vào một ngày mưa như hôm nay?',
    '🕰️ Viết vài dòng gửi về tương lai, như một chiếc lọ thời gian trong mưa.',
    '✍️ Một lá thư gửi chính bạn của ngày mai, được không?',
];

const getRandomMessage = () => {
    const index = Math.floor(Math.random() * rainSuggestions.length);
    return rainSuggestions[index];
};

const TypingText: React.FC = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [message] = useState(getRandomMessage); // Random duy nhất khi mở app

    useEffect(() => {
        let index = 0;
        let currentText = '';
        const interval = setInterval(() => {
            if (index < message.length) {
                currentText += message[index];
                setDisplayedText(currentText);
                index++;
            } else {
                clearInterval(interval); // Dừng animation khi xong
            }
        }, 50);
        return () => clearInterval(interval);
    }, [message]);

    return <Text style={styles.text}>{displayedText}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 26,
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 24,
        marginBottom: 20,
    },
});

export default TypingText;

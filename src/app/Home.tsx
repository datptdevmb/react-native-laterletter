import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';

import remoteConfig from '@react-native-firebase/remote-config';

const rainSuggestions = [
    '🌧️ Cơn mưa này gợi cho bạn nhớ đến ai?',
    '💭 Có điều gì bạn từng muốn nói nhưng chưa kịp?',
    '📮 Bạn có từng nhớ ai đó vào một ngày mưa như hôm nay?',
    '🕰️ Viết vài dòng gửi về tương lai, như một chiếc lọ thời gian trong mưa.',
    '✍️ Một lá thư gửi chính bạn của ngày mai, được không?',
];

const quoteSuggestions = [
    '“Mọi cơn mưa rồi sẽ tạnh thôi.”',
    '“Người không nói, nhưng lòng chưa từng quên.”',
    '“Gửi đi, vì đôi khi viết chính là cách để chữa lành.”',
    '“Bạn sẽ ổn thôi, như vẫn luôn như vậy.”',
];

const getRandomMessage = () => {
    const index = Math.floor(Math.random() * rainSuggestions.length);
    return rainSuggestions[index];
};

const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quoteSuggestions.length);
    return quoteSuggestions[index];
};

const HomeScreen: React.FC = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const message = useRef(getRandomMessage()).current;
    const quote = useRef(getRandomQuote()).current;
    const [userName, setUserName] = React.useState('Bạn');

    useEffect(() => {
        const fetchRemoteConfig = async () => {
            try {
                await remoteConfig().setDefaults({
                    name: 'Bạn',
                });

                await remoteConfig().fetchAndActivate();

                const nameValue = remoteConfig().getValue('name').asString();
                setUserName(nameValue);
            } catch (err) {
                console.log('❌ Remote Config error:', err);
            }
        };

        fetchRemoteConfig();
    }, []);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1600,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <LinearGradient colors={['#3c2f2f', '#7e5e4c']} style={styles.container}>
            {/* Lottie effect mưa rơi */}
            <LottieView
                source={require('../assets/lottie/rain.json')}
                autoPlay
                loop
                style={styles.rainEffect}
            />



            {/* Nội dung cảm xúc */}
            <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
                {message}
            </Animated.Text>

            <Text style={styles.subText}>(Tất cả sẽ ổn thôi...)</Text>
            <Text style={styles.username}>Chào {userName} 👋</Text>

            <Button
                icon="email"
                mode="contained"
                onPress={() => { }}
                style={styles.button}
                labelStyle={{ fontWeight: 'bold', fontSize: 16 }}
                buttonColor="#7c3aed"
            >
                GỬI THƯ
            </Button>

            {/* Quote nhỏ ở dưới */}
            <Text style={styles.quote}>{quote}</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rainEffect: {
        position: 'absolute',
        top: -300,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // opacity: 0.15,
    },
    userInfo: {
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginBottom: 8,
    },
    username: {
        fontSize: 18,
        color: '#fff',
    },
    text: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
    },
    subText: {
        fontSize: 14,
        color: '#ffffffaa',
        textAlign: 'center',
        marginBottom: 24,
    },
    button: {
        borderRadius: 999,
        paddingHorizontal: 24,
        paddingVertical: 6,
        elevation: 4,
    },
    quote: {
        marginTop: 28,
        fontSize: 14,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#ffffff99',
    },
});

export default HomeScreen;

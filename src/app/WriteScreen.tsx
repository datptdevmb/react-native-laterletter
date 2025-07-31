import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    PanResponder
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const tabs = ['Đã gửi', 'Đã nhận', 'Cộng đồng'];

const WriteScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => {
                return gestureState.dx > 20 && Math.abs(gestureState.dy) < 20;
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx > screenWidth * 0.2) {
                    navigation.goBack(); // Vuốt từ trái qua phải để về home
                }
            },
        })
    ).current;

    const renderContent = () => {
        switch (currentIndex) {
            case 0:
                return <Text style={styles.text}>📤 Những thư bạn đã gửi</Text>;
            case 1:
                return <Text style={styles.text}>📥 Những thư bạn đã nhận</Text>;
            case 2:
                return <Text style={styles.text}>🌍 Những thư cộng đồng</Text>;
            default:
                return null;
        }
    };

    return (
        <LinearGradient colors={['#5a3f2f', '#7c5325']} style={styles.container} {...panResponder.panHandlers}>
            <View style={styles.tabBar}>
                {tabs.map((title, idx) => (
                    <TouchableOpacity
                        key={idx}
                        onPress={() => setCurrentIndex(idx)}
                        style={styles.tab}
                    >
                        <Text style={[styles.tabText, currentIndex === idx && styles.activeTab]}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.scene}>
                {renderContent()}
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        backgroundColor: 'transparent',
    },
    tab: {
        paddingVertical: 6,
        paddingHorizontal: 16,
    },
    tabText: {
        color: '#ccc',
        fontSize: 16,
    },
    activeTab: {
        color: '#fff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    scene: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default WriteScreen;

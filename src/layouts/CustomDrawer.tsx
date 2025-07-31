import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import { LogOut } from 'lucide-react-native'; 

const CustomDrawer = (props: any) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            <View style={styles.header}>
                <Image style={styles.avatar} />
                <Text style={styles.name}>Nguyễn Văn A</Text>
                <Text style={styles.status}>🌤️ Đang cảm thấy tích cực</Text>
            </View>

            <DrawerItemList {...props} />

            <View style={styles.footer}>
                <TouchableOpacity style={styles.logout} onPress={() => { }}>
                    {/* <LogOut size={20} color="#555" />  */}
                    <Text style={styles.logoutText}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
    },
    avatar: { width: 70, height: 70, borderRadius: 35 },
    name: { fontWeight: 'bold', fontSize: 16, marginTop: 8 },
    status: { fontSize: 13, color: '#777', marginTop: 4 },
    footer: {
        marginTop: 'auto',
        padding: 20,
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    logout: { flexDirection: 'row', alignItems: 'center' },
    logoutText: { marginLeft: 10, fontSize: 15, color: '#555' },
});

export default CustomDrawer;

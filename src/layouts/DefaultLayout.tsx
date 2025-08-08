import { SafeAreaView } from "react-native";
import Header from "../components/base/Header";
import config from "../configs/app.config";


const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: config.themes.light.background, padding: 10 }}>
            <Header />
            {children}
        </SafeAreaView>
    );
}


export default DefaultLayout;
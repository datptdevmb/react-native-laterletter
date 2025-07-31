import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import HomeScreen from './Home';
import WriteScreen from './WriteScreen';

const SwipeNavigator = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);

    const routes = [
        { key: 'home', title: 'Home' },
        { key: 'write', title: 'Write' },
    ];

    const renderScene = SceneMap({
        home: HomeScreen,
        write: WriteScreen,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => null} // Ẩn thanh tab
            swipeEnabled={true}
        />
    );
};

export default SwipeNavigator;

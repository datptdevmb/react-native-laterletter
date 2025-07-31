

import remoteConfig from '@react-native-firebase/remote-config';


const remoteConfigDefaults = {
    theme_event: 'mid_autumn',
    theme_background_url: 'https://cdn.yoursite.com/bg/mid-autumn.jpg',
    theme_title_vi: 'Trung thu sum vầy 🍂',
    theme_title_en: 'Mid-Autumn Gathering 🌕',
    theme_message_vi: 'Bạn đã sẵn sàng viết điều ước chưa?',
    theme_enabled: 'true',
}



export const RemoteConfigService = {



    async init(): Promise<void> {
        await remoteConfig().setDefaults(remoteConfigDefaults);
        await remoteConfig().fetch(0);
        await remoteConfig().activate();
    },


    getString(key: string): string {
        return remoteConfig().getValue(key).asString();
    },


    getBool(key: string): boolean {
        return remoteConfig().getValue(key).asBoolean();
    },

};

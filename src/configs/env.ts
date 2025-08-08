import Config from 'react-native-config';

const ENV = Config.ENV || 'development';

const ENV_MAP = {
    development: {
        API_URL: Config.DEV_API_URL,
        GOOGLE_KEY: Config.DEV_GOOGLE_KEY,
    },
    staging: {
        API_URL: Config.STG_API_URL,
        GOOGLE_KEY: Config.STG_GOOGLE_KEY,
    },
    production: {
        API_URL: Config.PROD_API_URL,
        GOOGLE_KEY: Config.PROD_GOOGLE_KEY,
    },
};

export const AppEnv = {
    ENV,
    ...ENV_MAP[ENV as keyof typeof ENV_MAP],
};

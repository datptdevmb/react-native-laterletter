import { ACCESSIBLE, getGenericPassword, resetGenericPassword, setGenericPassword } from 'react-native-keychain';

const SERVICE_NAME = 'laterletter_tokens';

export const getTokens = async (): Promise<{
    accessToken: string;
    refreshToken: string;
} | null> => {
    try {
        const credentials = await getGenericPassword({ service: SERVICE_NAME });

        if (!credentials) return null;

        return {
            accessToken: credentials.username,
            refreshToken: credentials.password,
        };
    } catch (error) {
        console.error('[getTokens] Error reading tokens:', error);
        return null;
    }
};


export const saveTokens = async (accessToken: string, refreshToken: string) => {
    await setGenericPassword(accessToken, refreshToken, {
        service: SERVICE_NAME,
        accessible: ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });
};

export const clearTokens = async () => {
    await resetGenericPassword({ service: SERVICE_NAME });
};

import { getGenericPassword, setGenericPassword, ACCESSIBLE } from 'react-native-keychain';

const SERVICE_NAME = 'encryption_key';
/**
 * Retrieves or creates an encryption key for secure storage.
 * If the key already exists, it returns the existing key.
 * If not, it generates a new key, stores it securely, and returns it.
 *
 * @returns {Promise<string>} The encryption key.
 */
export async function getOrCreateKey(): Promise<string> {
    const credentials = await getGenericPassword({ service: SERVICE_NAME });

    if (credentials) {
        return credentials.password;
    }

    const newKey = generateRandomKey();
    await setGenericPassword('user', newKey, {
        service: SERVICE_NAME,
        accessible: ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });

    return newKey;
}

function generateRandomKey(length = 32): string {
    return [...Array(length)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join('');
}

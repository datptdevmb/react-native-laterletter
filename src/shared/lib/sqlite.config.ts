

import { open, NitroSQLiteConnection } from 'react-native-nitro-sqlite';

let dbInstance: NitroSQLiteConnection | null = null;


export const getDBInstance = (): NitroSQLiteConnection => {
    if (!dbInstance) {
        dbInstance = open({ name: 'laterletter.db', });
    }
    return dbInstance;
};

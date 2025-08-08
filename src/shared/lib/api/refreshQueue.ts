
import { AxiosError } from 'axios';

let isRefreshing = false;
let failedQueue: {
    resolve: (token: string) => void;
    reject: (err: AxiosError) => void;
}[] = [];

export const refreshQueue = {
    isRefreshing: () => isRefreshing,
    setRefreshing: (val: boolean) => {
        isRefreshing = val;
    },
    push: (promiseHandlers: {
        resolve: (token: string) => void;
        reject: (err: AxiosError) => void;
    }) => {
        failedQueue.push(promiseHandlers);
    },
    process: (error: AxiosError | null, token: string | null) => {
        failedQueue.forEach(prom => {
            if (error) prom.reject(error);
            else if (token) prom.resolve(token);
        });
        failedQueue = [];
    }
};

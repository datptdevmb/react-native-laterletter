

import { ApiClientOptions } from './type';
import { useApiErrorHandler } from './handleApiError';
import { refreshQueue } from './refreshQueue';
import { AppEnv } from '../../../configs/env';
import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';


const API_VERSION = 'v1';
const defaultBaseURL = `${AppEnv.API_URL}${API_VERSION}`;


export function createApiClient(baseURL: string, options: ApiClientOptions = {
    onErrorLog: function (error: Error): void {
        throw new Error('Function not implemented.');
    }
}) {
    const client: AxiosInstance = axios.create({
        baseURL: `${defaultBaseURL}/${baseURL}`,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    const { handleApiError } = useApiErrorHandler();


    client.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
        const token = "tokenStore.getAccess();"
        if (token && config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    });

    /**?
     * Handles 401 Unauthorized errors by refreshing the token and retrying the request.
     * If the refresh fails, it clears the token and rejects the request.                   
     */
    client.interceptors.response.use(
        (res) => res,
        async (error: AxiosError) => {
            const original = error.config as AxiosRequestConfig & { _retry?: boolean };
            const refresh = "tokenStore.getRefresh();"

            if (error.response?.status === 401 && !original._retry && refresh) {
                original._retry = true;

                if (refreshQueue.isRefreshing()) {
                    return new Promise((resolve, reject) => {
                        refreshQueue.push({
                            resolve: (token: string) => {
                                original.headers = {
                                    ...original.headers,
                                    Authorization: `Bearer ${token}`,
                                };
                                resolve(client(original));
                            },
                            reject,
                        });
                    });
                }

                refreshQueue.setRefreshing(true);

                try {
                    const res = await axios.post(`${baseURL}/auth/refresh`, {
                        refreshToken: refresh,
                    });

                    const newAccess = res.data.accessToken;
                    const newRefresh = res.data.refreshToken;

                    // tokenStore.setTokens(newAccess, newRefresh);
                    refreshQueue.process(null, newAccess);

                    original.headers = {
                        ...original.headers,
                        Authorization: `Bearer ${newAccess}`,
                    };

                    return client(original);
                } catch (err) {
                    refreshQueue.process(err as AxiosError, null);
                    // tokenStore.clear();
                    return Promise.reject(err);
                } finally {
                    refreshQueue.setRefreshing(false);
                }
            }

            return Promise.reject(error);
        }
    );

    // type ApiResult<T> =
    //     | { success: true; data: T }
    //     | { success: false; error: ErrorInfo };

    async function safeRequest<T>(req: Promise<AxiosResponse<T>>) {
        try {
            const res = await req;
            return { success: true, data: res.data };
        } catch (err) {
            handleApiError(err);
        }
    }

    return {
        raw: client,
        safe: {
            get: <T = any>(url: string, config?: AxiosRequestConfig) => safeRequest<T>(client.get(url, config)),
            post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => safeRequest<T>(client.post(url, data, config)),
            put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => safeRequest<T>(client.put(url, data, config)),
            delete: <T = any>(url: string, config?: AxiosRequestConfig) => safeRequest<T>(client.delete(url, config)),
        }
    };
}

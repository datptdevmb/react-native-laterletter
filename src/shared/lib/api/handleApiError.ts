
import { useTranslation } from "../i18n/useTranslation";


export type ErrorInfo = {
    code: string;
    message: string;
};

const errorMap: Record<number, string> = {
    400: 'errors.BAD_REQUEST',
    401: 'errors.UNAUTHORIZED',
    403: 'errors.FORBIDDEN',
    404: 'errors.NOT_FOUND',
    408: 'errors.TIMEOUT',
    429: 'errors.TOO_MANY_REQUESTS',
    500: 'errors.SERVER_ERROR',
    503: 'errors.SERVICE_UNAVAILABLE',
    504: 'errors.GATEWAY_TIMEOUT',
    520: 'errors.UNKNOWN_ERROR',
    521: 'errors.WEB_SERVER_DOWN',
    522: 'errors.CONNECTION_TIMEOUT',
    523: 'errors.ORIGIN_IS_UNREACHABLE',
    524: 'errors.A_TIMEOUT_OCCURRED',
    525: 'errors.SSL_HANDSHAKE_FAILED',
    526: 'errors.INVALID_SSL_CERTIFICATE',
    527: 'errors.RAILWAY_TIMEOUT',
    528: 'errors.RAILWAY_ERROR',
};

export function useApiErrorHandler() {
    const { t } = useTranslation();

    const handleApiError = (error: any): ErrorInfo => {

        if (!error?.response) {
            return {
                code: 'NETWORK_ERROR',
                message: t('errors.NETWORK_ERROR', 'Không có kết nối mạng'),
            };
        }

        const status = error.response.status;
        const i18nKey = errorMap[status];

        return {
            code: i18nKey || 'UNKNOWN_ERROR',
            message: i18nKey ? t(i18nKey) : (error.response.data?.message || t('errors.UNKNOWN_ERROR')),
        };
    };

    return { handleApiError };
}

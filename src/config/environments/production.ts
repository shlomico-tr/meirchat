import { ApiConfiguration } from "../config.interface";

export const productionApiConfig: Partial<ApiConfiguration> = {
    apiHost: 'https://www.etoro.com',
    apiPathPrefix: 'api',
    proxyHost: 'https://www.etoro.com'
};
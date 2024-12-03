import { ApiConfiguration } from "../config.interface";

export const developmentApiConfig: Partial<ApiConfiguration> = {
    apiHost: 'http://localhost:3000',
    apiPathPrefix: '',
    proxyHost: 'https://www.etoro.com'
};
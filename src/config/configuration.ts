import { ApiConfiguration } from "./config.interface";

const defaults: ApiConfiguration = {
    env: 'development',
    apiHost: 'http://www.etoro.com',
    apiPathPrefix: '',
    port: 3000,
    proxyHost: 'https://www.etoro.com',
    applicationIdentifier: 'eToroChatGPTPluginApi',
    applicationVersion: '0.0.1',
    //"X-Client-Name"
}

let config: ApiConfiguration = {
    ...defaults,
    env: process.env.NODE_ENV || defaults.env,
    port: parseInt(process.env.PORT, 10) || defaults.port,
    proxyHost: process.env.PROXY_HOST || defaults.proxyHost,
}

switch (config.env) {
    case 'development':
        config = { ...config, ...require('./environments/development').developmentApiConfig };
        break;
    case 'production':
        config = { ...config, ...require('./environments/production').productionApiConfig };
        break;
    case 'staging':
        config = { ...config, ...require('./environments/staging').stagingApiConfig };
        break;
}

console.log('config', config);

export default () => config;
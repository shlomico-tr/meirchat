import { AxiosResponse } from "axios";
import { AxiosInterceptor, XInternalAxiosRequestConfig } from "./http-proxy.interceptors.models";
import { ConsoleLogger } from "@nestjs/common";

const logger = new ConsoleLogger('HttpOutgoing');

export const perfInterceptor: AxiosInterceptor = {
    request: (config: XInternalAxiosRequestConfig) => {
        config.meta = config.meta || {};
        config.meta.requestStartInMs = Date.now();

        return config;
    },
    response: (response: AxiosResponse) => {
        const config = response.config as XInternalAxiosRequestConfig;
        const meta = config.meta;

        if (meta?.requestStartInMs) {
            meta.requestDurationInMs = Date.now() - meta.requestStartInMs;
        }

        return response;
    },
    responseError: (error: any) => {
        const config = error?.config as XInternalAxiosRequestConfig;
        const meta = config?.meta;

        if (meta?.requestStartInMs) {
            meta.requestDurationInMs = Date.now() - meta.requestStartInMs;
        }

        return Promise.reject(error);
    }
}

export const logInterceptor: AxiosInterceptor = {
    response: (response: AxiosResponse) => {
        const config = response?.config as XInternalAxiosRequestConfig;
        const meta = config?.meta;

        if (meta?.requestDurationInMs) {
            if (response.status >= 400) {
                logger.error(`${config.method} ${config.url} ${meta.requestDurationInMs}ms ${response.status}`);
            } else {
                logger.log(`${config.method} ${config.url} ${meta.requestDurationInMs}ms ${response.status}, ${JSON.stringify(config.params)}`);
            }
        }

        return response;
    },
    responseError: (error: any) => {
        const config = error?.config as XInternalAxiosRequestConfig;
        const meta = config?.meta;

        if (meta?.requestDurationInMs) {
            logger.error(`${config.method} ${config.url} ${meta.requestDurationInMs}ms ${error.response?.status}`);
        } else {
            logger.error(`${config.method} ${config.url} ${error.response?.status}`);
        }

        return Promise.reject(error);
    }
}

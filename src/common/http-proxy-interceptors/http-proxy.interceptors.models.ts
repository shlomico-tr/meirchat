import { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export interface RequestConfigMetadata {
    requestStartInMs?: number;
    requestDurationInMs?: number;
    [key: string]: any;
}

export interface XInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
    meta: RequestConfigMetadata
}

export interface AxiosInterceptor {
    request?: (config: XInternalAxiosRequestConfig) => XInternalAxiosRequestConfig | Promise<XInternalAxiosRequestConfig>;
    requestError?: (error: any) => any;
    response?: (response: AxiosResponse<any,XInternalAxiosRequestConfig>) => AxiosResponse | Promise<AxiosResponse>;
    responseError?: (error: any) => any;
}
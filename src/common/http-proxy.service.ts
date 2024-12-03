
// this service is used to proxy the requests to the backend server

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, firstValueFrom, map } from 'rxjs';
import { logInterceptor, perfInterceptor } from './http-proxy-interceptors/http-proxy.interceptors';

@Injectable()
export class HttpProxyService {
    private defaultHeaders = {
        ApplicationIdentifier: this.configService.get<string>('applicationIdentifier'),
        ApplicationVersion: this.configService.get<string>('applicationVersion'),
        'X-Client-Name': this.configService.get<string>('applicationIdentifier')
    };
    private defaultTimeout = 10000;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ) {
        const interceptors = this.httpService.axiosRef.interceptors;

        interceptors.request.use(perfInterceptor.request);
        interceptors.response.use(perfInterceptor.response, perfInterceptor.responseError);
        interceptors.response.use(logInterceptor.response, logInterceptor.responseError);
    }

    public async get<T>(url: string, params: any = {}, headers: any = {}, timeout: number = this.defaultTimeout): Promise<T> {
        return await this.request<T>('get', url, {}, params, headers, timeout);
    }

    public async post<T>(url: string, data: any = {}, params: any = {}, headers: any = {}, timeout: number = this.defaultTimeout): Promise<T> {
        return await this.request<T>('post', url, data, params, headers, timeout);
    }

    private async request<T>(method: string, url: string, data: any = {}, params: any = {}, headers: any = {}, timeout: number = this.defaultTimeout): Promise<any> {
        let host = this.configService.get<string>('proxyHost');

        if (this.isAbsoluteUrl(url)) {
            host = '';
        }

        // merge headers
        headers = {
            ...this.defaultHeaders,
            ...headers
        };

        return await firstValueFrom(this.httpService.request({
            method,
            url: `${host}${url}`,
            data,
            params,
            headers,
            timeout
        }).pipe(
            map((response) => response.data as T),
            catchError((error) => {
                console.log(error);
                throw error;
            })
        ));
    }

    private isAbsoluteUrl(url: string): boolean {
        // check if url starts with http:// or https://
        return /^https?:\/\//i.test(url);
    }

}
import { Injectable } from '@nestjs/common';
import { SearchData, SearchQueryParams } from './search.interface';
import { HttpProxyService } from 'src/common/http-proxy.service';

@Injectable()
export class SearchService {
    constructor(
        private readonly httpService: HttpProxyService
    ) {

    }

    public async search(prefix: string): Promise<SearchData> {
        const params: SearchQueryParams = {
            prefix,
            startIndex: 0,
            usersCount: 2,
            instrumentsCount: 2,
            UserToken: '12345678',
            ApplicationName: 'ChatGptPlugin'
        }

        return await this.httpService.get<SearchData>(`/api/search-proxy/v1/search`, { ...params });
    }
}

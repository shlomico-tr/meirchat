import { Injectable } from "@nestjs/common";
import { HttpProxyService } from "src/common/http-proxy.service";
import { StocksSearch, StocksSearchItemRO, StocksSearchMetaData, StocksSearchParams, StocksPresets } from "./stocks.intrerfaces";
import { searchFields } from "./stocks.constants";
import { InstrumentType } from "src/instruments/instruments.interface";
import { InstrumentsInfoService } from "src/instruments/instruments-info/instruments-info.service";
import { InstrumentsService } from "src/instruments/instruments.service";

@Injectable()
export class StocksService {
    constructor(
        private readonly httpService: HttpProxyService,
        private readonly instrumentsInfoService: InstrumentsInfoService,
        private readonly instrumentsService: InstrumentsService
    ) {

    }

    async search(params: StocksSearchParams, top: number = 5): Promise<StocksSearchItemRO[]> {
        let fieldsSet = new Set<string>(searchFields);
        let extraFields = [
            ...this.extractFields(params?.sort),
            ...this.extractFields(params?.additionalFields)
        ]
       
        delete params.additionalFields;

        extraFields.forEach((field) => {
            fieldsSet.add(field);
        });

        const fields = Array.from(fieldsSet).join(',');

        const queryParameters = {
            fields,
            internalAssetClassId: InstrumentType.Stocks,
            isdelisted: false,
            ishiddenfromclient: false,
            isInternalInstrument: false,
            ...params,
            page: 1,
            pageSize: 2
        };


        return await this.httpService.post<StocksSearch>(`/api/screener/v1/screener-instruments`, {
            queryParameters
        }).then((data) => {
            return data?.items || []
        }).then(async (items) => {
            // add instrument object to each item in items
            // const instrumentsId = items.map((item) => item.instrumentId)[0];
            // const people = await this.peopleService.search(RankingsPeriod.CurrQuarter, {instrumentid: instrumentsId, popularinvestor: true, pagesize: 1});
            // console.log('people', people, instrumentsId);


            return items.map((item) => {
               
                // if(item?.instrumentId === instrumentsId) {
                //     item['popularInvestor'] = people?.Items?.[0];
                // }
                item.instrument = this.instrumentsService.getById(item.instrumentId);
                return item;
            });

        });
    }

    async getSearchMetadata(): Promise<StocksSearchMetaData> {
        return await this.httpService.get<StocksSearchMetaData>(`/api/screener/v1/metadata/visitor`);
    }

    async getPresets(preset: StocksPresets): Promise<any> {

        switch (preset) {
            case StocksPresets.Debutantes:
                return await this.instrumentsInfoService.getDebutantes();
            case StocksPresets.Dividends:
                return await this.instrumentsInfoService.getDividends();
            case StocksPresets.PopularMarkets:
                return await this.instrumentsInfoService.getPopularInstruments();
            case StocksPresets.UpcomingEarnings:
                return await this.instrumentsInfoService.getUpcomingEarnings();
            default:
                return [];
        }

    }


    private extractFields(fields: string): string[] {
        let validFieldRegex = /^[a-zA-Z0-9,-]+$/;

        if (!fields || typeof fields !== 'string') return [];

        return fields.split(',')
            .map((field) => field?.[0] === '-' ? field.substring(1) : field)
            .filter((field) => field && validFieldRegex.test(field));
    }

}
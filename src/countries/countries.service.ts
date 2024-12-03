import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Country, CountryData } from './countries.interface';
import { HttpProxyService } from 'src/common/http-proxy.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CountriesService {
    private countriesById = new Map<number, Country>();
    private countriesByAbbreviation = new Map<string, Country>();
    private logger = new ConsoleLogger('CountriesService');;
    
    constructor(
        private readonly httpService: HttpProxyService
    ) {
        this.updateCountriesCache().catch((error) => {
            this.logger.error(error);
        });
    }

    public async getCountryById(countryId: number): Promise<Country> {
        return this.countriesById.get(countryId);
    }

    public async find(countryIdsOrAbvs: (number | string)[]): Promise<Country[]> {
        if (countryIdsOrAbvs?.length > 0) {
            return countryIdsOrAbvs.map(id => {
                return this.countriesById.get(+id) || this.countriesByAbbreviation.get(id.toString().toUpperCase())
            }).filter(c => !!c);
        }
        return [];
    }

    public async getCountryByAbbreviations(abbreviations: string[]): Promise<Country[]> {
        if (abbreviations?.length > 0) {
            return abbreviations.map(id => this.countriesByAbbreviation.get(id?.toUpperCase())).filter(c => !!c);
        }
        return [];
    }

    public async getCountryByAbbreviation(abbreviation: string): Promise<Country> {
        return this.countriesByAbbreviation.get(abbreviation?.toUpperCase());
    }

    public async getAll(): Promise<Country[]> {
        return Array.from(this.countriesById.values());
    }

    private async getCountries(): Promise<Country[]> {
        return await this.httpService.get<any>(`/api/account/v1/user/geolocation/countries`).then((data: CountryData) => {
            const countries = data.countries.map((c) => ({ countryId: c.countryId, name: c.name, abbreviation: c.abbreviation }));
            return countries;
        });
    }

    /**
     * This method is called every 3 hours
     */
    @Cron(CronExpression.EVERY_3_HOURS)
    private async updateCountriesCache() {
        const countries = await this.getCountries();
        countries.forEach((c) => {
            this.countriesById.set(c.countryId, c);
            this.countriesByAbbreviation.set(c.abbreviation, c);
        });
    }
   
}

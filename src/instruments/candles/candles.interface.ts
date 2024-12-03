import { ApiProperty } from '@nestjs/swagger';

export class Candle {
  @ApiProperty({ type: 'number' })
  Close: number;

  @ApiProperty({ format: 'date-time' })
  FromDate: string;

  @ApiProperty({ type: 'number' })
  High: number;

  @ApiProperty({ type: 'number' })
  InstrumentID: number;

  @ApiProperty({ type: 'number' })
  Low: number;

  @ApiProperty({ type: 'number' })
  Open: number;
}

export class CandlesData {
  @ApiProperty({ type: [Candle] })
  Candles: Candle[];

  @ApiProperty({ type: 'string' })
  Interval: string;
}

export enum CandlesPeriod {
    OneMinute = 'OneMinute',
    FiveMinutes = 'FiveMinutes',
    TenMinutes = 'TenMinutes',
    FifteenMinutes = 'FifteenMinutes',
    OneHour = 'OneHour',
    OneDay = 'OneDay',
    OneWeek = 'OneWeek'
}

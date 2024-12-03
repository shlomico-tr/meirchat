import { ApiProperty } from "@nestjs/swagger";

export class InstrumentsInfoNewsRO {
    @ApiProperty()
    next_page_token: string
    @ApiProperty()
    stories: InstrumentsInfoNewsStoryRO[]
}

export class InstrumentsInfoNewsStoryRO {
    @ApiProperty()
    id: number
    @ApiProperty()
    publishTime: string
    @ApiProperty()
    title: string
    @ApiProperty()
    description: string
    @ApiProperty()
    url: string
    @ApiProperty()
    imageUrls: string[]
    @ApiProperty()
    domain_name: string
    @ApiProperty()
    domain_cached_large_logo_url: string
    @ApiProperty()
    sentiment: number
}
export class InstrumentInfoHistoricDividends {
    @ApiProperty()
    "DividendAmount": number;
    @ApiProperty()
    "Currency": string;
    @ApiProperty()
    "ExDate": string;
    @ApiProperty()
    "PayDate": string;
    @ApiProperty()
    "RecordDate": string;
    @ApiProperty()
    "DeclaredDate": string;
    @ApiProperty()
    "PaymentFrequency": string;
    @ApiProperty()
    "Type": string;
}
export class InstrumentInfoTraderTrendsRQ {
    @ApiProperty()
    "traders7DayChange": number;
    @ApiProperty()
    "traders14DayChange": number;
    @ApiProperty()
    "traders30DayChange": number;
    @ApiProperty()
    "popularityUniques7Day": number;
    @ApiProperty()
    "popularityUniques14Day": number;
    @ApiProperty()
    "popularityUniques30Day": number;
    @ApiProperty()
    "traders14DayChange-Industry-RankAsc": number;
    @ApiProperty()
    "traders14DayChange-Industry-RankDesc": number;
    @ApiProperty()
    "traders14DayChange-Industry-TotalItems": number;
    @ApiProperty()
    "traders30DayChange-Industry-RankAsc": number;
    @ApiProperty()
    "traders30DayChange-Industry-RankDesc": number;
    @ApiProperty()
    "traders30DayChange-Industry-TotalItems": number;
    @ApiProperty()
    "popularityUniques-Industry-RankAsc": number;
    @ApiProperty()
    "popularityUniques-Industry-RankDesc": number;
    @ApiProperty()
    "traders7DayChange-Industry-RankAsc": number;
    @ApiProperty()
    "traders7DayChange-Industry-RankDesc": number;
    @ApiProperty()
    "traders7DayChange-Industry-TotalItems": number;
    @ApiProperty()
    "traders14DayChange-Sector-RankAsc": number;
    @ApiProperty()
    "traders14DayChange-Sector-RankDesc": number;
    @ApiProperty()
    "traders14DayChange-Sector-TotalItems": number;
    @ApiProperty()
    "traders30DayChange-Sector-RankAsc": number;
    @ApiProperty()
    "traders30DayChange-Sector-RankDesc": number;
    @ApiProperty()
    "traders30DayChange-Sector-TotalItems": number;
    @ApiProperty()
    "popularityUniques-Sector-RankAsc": number;
    @ApiProperty()
    "popularityUniques-Sector-RankDesc": number;
    @ApiProperty()
    "traders7DayChange-Sector-RankAsc": number;
    @ApiProperty()
    "traders7DayChange-Sector-RankDesc": number;
    @ApiProperty()
    "traders7DayChange-Sector-TotalItems": number;
    @ApiProperty()
    "traders14DayChange-System-RankAsc": number;
    @ApiProperty()
    "traders14DayChange-System-RankDesc": number;
    @ApiProperty()
    "traders14DayChange-System-TotalItems": number;
    @ApiProperty()
    "traders30DayChange-System-RankAsc": number;
    @ApiProperty()
    "traders30DayChange-System-RankDesc": number;
    @ApiProperty()
    "traders30DayChange-System-TotalItems": number;
    @ApiProperty()
    "popularityUniques-System-RankAsc": number;
    @ApiProperty()
    "popularityUniques-System-RankDesc": number;
    @ApiProperty()
    "traders7DayChange-System-RankAsc": number;
    @ApiProperty()
    "traders7DayChange-System-RankDesc": number;
    @ApiProperty()
    "traders7DayChange-System-TotalItems": number;
}
export class InstrumentInfoAnalystsForcastRQ {
    @ApiProperty()
    "tipRanksFourStarsAnalystExcessReturn": number;
    @ApiProperty()
    "tipRanksFourStarsAnalystGoodRecommendations": number;
    @ApiProperty()
    "tipRanksFourStarsAnalystName": string;
    @ApiProperty()
    "tipRanksFourStarsAnalystPicture": string;
    @ApiProperty()
    "tipRanksFourStarsAnalystRank": number;
    @ApiProperty()
    "tipRanksFourStarsAnalystsSupportingBuy": number;
    @ApiProperty()
    "tipRanksFourStarsAnalystsSupportingHold": number;
    @ApiProperty()
    "tipRanksFourStarsAnalystStars": number;
    @ApiProperty()
    "tipRanksFourStarsAnalystPriceTarget": number;
    @ApiProperty()
    "tipRanksFourStarsAnalystsSupportingSell": number;
    @ApiProperty()
    "tipRanksFourStarsAnalystStockAverageReturn": number;
    @ApiProperty()
    "tipRanksFourStarsAnalystStockSuccessRate": number;
    @ApiProperty()
    "tipranksTargetPrice": number;
    @ApiProperty()
    "tipRanksFourStarsAnalystSuccessRate": number;
    @ApiProperty()
    "tipranksTargetPriceCurrency": string;
    @ApiProperty()
    "tipRanksFourStarsAnalystTotalRecommendations": number;
    @ApiProperty()
    "tipranksTargetPriceUpside": number;
    @ApiProperty()
    "tipRanksFourStarsConsensus": string;
    @ApiProperty()
    "tipranksTotalAnalysts": number;
    @ApiProperty()
    "tipRanksFourStarsFirmName": string;
    @ApiProperty()
    "tipranksAnalystsSupportingBuy": number;
    @ApiProperty()
    "tipRanksFourStarsHighPriceTarget": number;
    @ApiProperty()
    "tipranksAnalystsSupportingHold": number;
    @ApiProperty()
    "tipRanksFourStarsLowPriceTarget": number;
    @ApiProperty()
    "tipranksAnalystsSupportingSell": number;
    @ApiProperty()
    "tipRanksFourStarsRecommendation": string;
    @ApiProperty()
    "tipranksConsensus": string;
    @ApiProperty()
    "tipRanksFourStarsRecommendationArticleUrl": string;
    @ApiProperty()
    "tipranksHighPriceTarget": number;
    @ApiProperty()
    "tipRanksFourStarsRecommendationDate": string;
    @ApiProperty()
    "tipranksLowPriceTarget": number;
    @ApiProperty()
    "tipRanksFourStarsTargetPriceCurrency": string;
    @ApiProperty()
    "tipRanksFourStarsTargetPrice": number;
    @ApiProperty()
    "tipRanksFourStarsTotalAnalysts": number;
    @ApiProperty()
    "tipRanksFourStarsTotalAnalysts-Industry-RankDesc": number;
    @ApiProperty()
    "tipRanksFourStarsTotalAnalysts-Sector-RankDesc": number;
    @ApiProperty()
    "tipRanksFourStarsTotalAnalysts-System-RankDesc": number;
    @ApiProperty()
    "liveTipranksTargetUpside": number;
    @ApiProperty()
    "liveTipranksTargetUpsideAbsolute": number;
}

export class InstrumentInfoCompanySummary {
    @ApiProperty()
    "address1-TTM": string;
    @ApiProperty()
    "phoneNumber-TTM": string;
    @ApiProperty()
    "city-Annual": string;
}

export class InstrumentInfoDividendsRO {
    @ApiProperty()
    "cashDividendsPaid-Annual": number;
    @ApiProperty()
    "dividendYieldDaily-Annual": number;
    @ApiProperty()
    "cashDividendsOrCashFlow-Annual": number;
    @ApiProperty()
    "dividendYieldFiscal-Annual": number;
    @ApiProperty()
    "dividendYieldSecurity-Annual": number;
    @ApiProperty()
    "preferredDividendsCashFlow-Annual": number;
    @ApiProperty()
    "commonDividends-Annual": number;
    @ApiProperty()
    "dividendExDate-Annual": string;
    @ApiProperty()
    "xDividend": number;
    @ApiProperty()
    "dividendPayoutRatio-Annual": number;
    @ApiProperty()
    "dividendRate-Annual": number;
    @ApiProperty()
    "5YearAnnualDividendGrowthRate-Annual": number;
    @ApiProperty()
    "5YearAnnualDividendGrowthRate-TTM": number;
    @ApiProperty()
    "dividendsPerShareLTMSecurity-Annual": number;
    @ApiProperty()
    "lastXDividendDate": string;
    @ApiProperty()
    "preferredDividendsCashFlow-TTM": number;
    @ApiProperty({ type: InstrumentInfoHistoricDividends })
    "historicDividends": InstrumentInfoHistoricDividends;
    @ApiProperty()
    "cashDividendsOrCashFlow-TTM": number;
    @ApiProperty()
    "commonDividends-TTM": number;
    @ApiProperty()
    "3YearAnnualDividendGrowthRate-TTM": number;
    @ApiProperty()
    "dividendsPerShareSecurity-Annual": number;
    @ApiProperty()
    "dividendRate-TTM": number;
    @ApiProperty()
    "dividendsPerShareLTMSecurity-TTM": number;
    @ApiProperty()
    "dividendFrequency": string;
    @ApiProperty()
    "dividendAnnouncementDate": string;
    @ApiProperty()
    "dividendPayDate": string;
    @ApiProperty()
    "dividendStatus": string;
    @ApiProperty()
    "dividendYieldDaily-TTM-Industry-RankAsc": number;
    @ApiProperty()
    "dividendYieldDaily-TTM-Industry-RankDesc": number;
    @ApiProperty()
    "dividendYieldDaily-TTM-Sector-RankAsc": number;
    @ApiProperty()
    "dividendYieldDaily-TTM-Sector-RankDesc": number;
    @ApiProperty()
    "dividendYieldDaily-TTM-System-RankAsc": number;
    @ApiProperty()
    "dividendYieldDaily-TTM-System-RankDesc": number;
    @ApiProperty()
    "dividendRatePercentage": number;
    @ApiProperty()
    "3YearAnnualDividendGrowthRate-Annual": number;
    @ApiProperty()
    "preferredDividends-TTM": number;
    @ApiProperty()
    "cashDividendsPaid-TTM": number;
    @ApiProperty()
    "dividendsPerShareSecurity-TTM": number;
    @ApiProperty()
    "dividendYieldDaily-TTM": number;
    @ApiProperty()
    "dividendYieldFiscal-TTM": number;
    @ApiProperty()
    "dividendYieldSecurity-TTM": number;
    @ApiProperty()
    "dividendRecordDate": string;
    @ApiProperty()
    "daystilldividendXdate": number;
    @ApiProperty()
    "dividendPayoutRatio-TTM": number;
}

export class IndtrumentInfoESGRO {
    @ApiProperty()
    "normalizedESGScore": number;
    @ApiProperty()
    "arabesqueESGTotal-Sector-Avg": number;
    @ApiProperty()
    "arabesqueESGTotal-Sector-RankAsc": number;
    @ApiProperty()
    "arabesqueESGTotal-Sector-RankDesc": number;
    @ApiProperty()
    "arabesqueESGTotal-Sector-TotalItems": number;
    @ApiProperty()
    "arabesqueESGTotal-System-Avg": number;
    @ApiProperty()
    "arabesqueESGTotal-System-RankAsc": number;
    @ApiProperty()
    "arabesqueESGTotal-System-RankDesc": number;
    @ApiProperty()
    "arabesqueESGTotal-System-TotalItems": number;
    @ApiProperty()
    "arabesqueLabourRights": number;
    @ApiProperty()
    "arabesqueControversialWeaponsReason": string;
    @ApiProperty()
    "arabesqueESGTotal-Industry-Avg": number;
    @ApiProperty()
    "arabesqueESGTotal-Industry-RankAsc": number;
    @ApiProperty()
    "arabesqueESGTotal-Industry-RankDesc": number;
    @ApiProperty()
    "arabesqueESGTotal-Industry-TotalItems": number;
    @ApiProperty()
    "arabesqueIsAlcohol": boolean;
    @ApiProperty()
    "arabesqueESGEnvironment": number;
    @ApiProperty()
    "arabesqueESGGovernance": number;
    @ApiProperty()
    "arabesqueESGSocial": number;
    @ApiProperty()
    "arabesqueESGTotal": number;
    @ApiProperty()
    "arabesqueGlobalCompactAnti-Corruption": number;
    @ApiProperty()
    "arabesqueGlobalCompactEnvironment": number;
    @ApiProperty()
    "arabesqueGlobalCompactTotal": number;
    @ApiProperty()
    "arabesqueHumanRights": number;
    @ApiProperty()
    "arabesqueIsControversialWeapons": boolean;
    @ApiProperty()
    "arabesqueIsAdultEntertainment": boolean;
    @ApiProperty()
    "arabesqueIsNuclear": boolean;
    @ApiProperty()
    "arabesqueIsPork": boolean;
    @ApiProperty()
    "arabesqueIsStemCells": boolean;
    @ApiProperty()
    "arabesqueIsThermalCoal": boolean;
    @ApiProperty()
    "arabesqueIsRecreationalDrugs": boolean;
    @ApiProperty()
    "arabesqueIsDefence": boolean;
    @ApiProperty()
    "arabesqueIsFirearms": boolean;
    @ApiProperty()
    "arabesqueIsFossilFuels": boolean;
    @ApiProperty()
    "arabesqueIsGambling": boolean;
}

export class InstrumentInfoPERationRO {
    @ApiProperty()
    "peRatio-TTM-Sector-Avg": number;
    @ApiProperty()
    "peRatio-TTM-Sector-RankAsc": number;
    @ApiProperty()
    "peRatio-TTM-Sector-RankDesc": number;
    @ApiProperty()
    "peRatio-TTM-Sector-TotalItems": number;
    @ApiProperty()
    "peRatio-TTM-System-Avg": number;
    @ApiProperty()
    "peRatio-TTM-System-RankAsc": number;
    @ApiProperty()
    "peRatio-TTM-System-RankDesc": number;
    @ApiProperty()
    "peRatio-TTM-System-TotalItems": number;
    @ApiProperty()
    "peRatio-TTM-Industry-Avg": number;
    @ApiProperty()
    "peRatio-TTM-Industry-RankAsc": number;
    @ApiProperty()
    "peRatio-TTM-Industry-RankDesc": number;
    @ApiProperty()
    "peRatio-TTM-Industry-TotalItems": number;
    @ApiProperty()
    "peRatioSecurity-Annual": number;
}

export class InstrumentInfoPriceChangeOverTimeRO {
    @ApiProperty()
    "dailyPriceChange": number;
    @ApiProperty()
    "absDailyPriceChange": number;
    @ApiProperty()
    "weeklyPriceChange": number;
    @ApiProperty()
    "monthlyPriceChange": number;
    @ApiProperty()
    "threeMonthPriceChange": number;
    @ApiProperty()
    "sixMonthPriceChange": number;
    @ApiProperty()
    "oneYearPriceChange": number;
    @ApiProperty()
    "currMonthPriceChange": number;
    @ApiProperty()
    "currQuarterPriceChange": number;
    @ApiProperty()
    "currYearPriceChange": number;
    @ApiProperty()
    "lastYearPriceChange": number;
    @ApiProperty()
    "lastTwoYearsPriceChange": number;
    @ApiProperty()
    "oneMonthAgoPriceChange": number;
    @ApiProperty()
    "twoMonthsAgoPriceChange": number;
    @ApiProperty()
    "threeMonthsAgoPriceChange": number;
    @ApiProperty()
    "sixMonthsAgoPriceChange": number;
    @ApiProperty()
    "oneYearAgoPriceChange": number;
}
export class InstrumentInfoEarningPerShareRO {
    @ApiProperty()
    "quarterlyEPSHigh": number;
    @ApiProperty()
    "estimatedEPS": number;
    @ApiProperty()
    "quarterlyEPSDownRevisions": number;
    @ApiProperty()
    "quarterlyEPSEstimates": number;
    @ApiProperty()
    "quarterlyEPSLow": number;
    @ApiProperty()
    "estimatedQuarterlyEPS": number;
    @ApiProperty()
    "quarterlyEPSMedian": number;
    @ApiProperty()
    "quarterlyEPSStandardDeviation": number;
    @ApiProperty()
    "estimatedYearlyEPS": number;
    @ApiProperty()
    "quarterlyEPSTimestamp": string;
    @ApiProperty()
    "quarterlyEPSUpRevisions": number;
    @ApiProperty()
    "quarterlyEPSValue": number;
    @ApiProperty()
    "epS-Annual": number;
    @ApiProperty()
    "epsFullyDiluted-TTM": number;
    @ApiProperty()
    "epsDilutedBeforeUnusualExpense-Annual": number;
    @ApiProperty()
    "epsSecurity-TTM": number;
    @ApiProperty()
    "epsFromContinuingOperations-Annual": string;
    @ApiProperty()
    "epsBasicBeforeExtraordinaries-TTM": number;
    @ApiProperty()
    "epsDilutedBeforeUnusualExpense-TTM": number;
    @ApiProperty()
    "epsFromContinuingOperations-TTM": string;
    @ApiProperty()
    "annualEPSTimestamp": string;
    @ApiProperty()
    "annualEPSValue": number;
    @ApiProperty()
    "epsGrowth3Months": number;
    @ApiProperty()
    "epsGrowth1Year": number;
    @ApiProperty()
    "epsGrowth5Years": number;
    @ApiProperty()
    "epsSecurity-Annual": number;
}

export class InstrumentInfoEarningReportsRO {
    @ApiProperty()
    "nextEarningsDateQuarter": string;
    @ApiProperty()
    "earningsQuarter": string;
    @ApiProperty()
    "lastEarningUpdateDate": string;
    @ApiProperty()
    "nextEarningDate": string;
    @ApiProperty()
    "nextEarningDateType": string;
    @ApiProperty()
    "nextEarningTime": string;
    @ApiProperty()
    "q1EarningDate": string;
}

export class InstrumentInfoRO {
    @ApiProperty()
    "fundsFromOperations-TTM": number;
    @ApiProperty()
    "instrumentLevelSector-TTM": string;
    @ApiProperty()
    "longTermDebtToTotalCapital-TTM": number;
    @ApiProperty()
    "longBusinessDescription-TTM": string;
    @ApiProperty()
    "epsFullyDiluted-Annual": number;
    @ApiProperty()
    "averageDailyVolumeLast9Months-TTM": number;
    @ApiProperty()
    "quarterlySalesLow": number;
    @ApiProperty()
    "otherFinancingActivitiesUses-Annual": number;
    @ApiProperty()
    "5YearHighPERatio-TTM": number;
    @ApiProperty()
    "boardOfDirectorMeetingDate": string;
    @ApiProperty()
    "preferredStockCarryingValue-TTM": number;
    @ApiProperty()
    "operatingIncomeAfterUnusualItems-Annual": number;
    @ApiProperty()
    "cashEquivalentsGeneric-Annual": number;
    @ApiProperty()
    "generalIndustryClassification-TTM": string;
    @ApiProperty()
    "intangibleAssets-TTM": number;
    @ApiProperty()
    "longTermNoteReceivable-TTM": number;
    @ApiProperty()
    "capitalExpenditures-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLastMonth-TTM": number;
    @ApiProperty()
    "quarterlySalesMedian": number;
    @ApiProperty()
    "otherProceedsfromStockOptions-Annual": number;
    @ApiProperty()
    "5YearHighPrice-TTM": number;
    @ApiProperty()
    "localName-fr-fr": string;
    @ApiProperty()
    "pretaxIncome-TTM": number;
    @ApiProperty()
    "operatingLeaseExpense-Annual": number;
    @ApiProperty()
    "capitalExpendituresPerShare-Annual": number;
    @ApiProperty()
    "5YearAverageNetProfitMargin-Annual": number;
    @ApiProperty()
    "grossIncome-TTM": number;
    @ApiProperty()
    "interestExpense-TTM": number;
    @ApiProperty()
    "lowPriceLast13Weeks-TTM": number;
    @ApiProperty()
    "daysSalesOutstandingTimeWeighted-Annual": number;
    @ApiProperty()
    "equityInEarningsOfAffiliatesIncome-Annual": number;
    @ApiProperty()
    "averageDailyVolumeYTD-TTM": number;
    @ApiProperty()
    "quarterlySalesStandardDeviation": number;
    @ApiProperty()
    "5YearLowPERatio-TTM": number;
    @ApiProperty()
    "conferenceCallBroadcastURL": string;
    @ApiProperty()
    "preTaxInterestCoverageRatio-TTM": number;
    @ApiProperty()
    "operatingMargin-Annual": number;
    @ApiProperty()
    "cashFlowFromOperPerShareNet-Annual": number;
    @ApiProperty()
    "5YearAveragePERatio-Annual": number;
    @ApiProperty()
    "grossIncomeMargin-TTM": number;
    @ApiProperty()
    "inventories-TTM": number;
    @ApiProperty()
    "lowPriceLast26Weeks-TTM": number;
    @ApiProperty()
    "marketCapitalizationFiscal-TTM": number;
    @ApiProperty()
    "extraordinaryGainsOrLossesFromSaleOfAsset-Annual": number;
    @ApiProperty()
    "dollarVolume1Week-Annual": number;
    @ApiProperty()
    "beta-TTM": number;
    @ApiProperty()
    "quarterlySalesTimestamp": string;
    @ApiProperty()
    "proceedsFromStockOptions-Annual": number;
    @ApiProperty()
    "5YearLowPrice-TTM": number;
    @ApiProperty()
    "longBio-fr-fr": string;
    @ApiProperty()
    "preTaxProfitMargin-TTM": number;
    @ApiProperty()
    "otherAfterTaxAdjustments-Annual": number;
    @ApiProperty()
    "cashTaxesPaid-Annual": number;
    @ApiProperty()
    "5YearAveragePreTaxProfitMargin-Annual": number;
    @ApiProperty()
    "highPriceLast13Weeks-TTM": number;
    @ApiProperty()
    "inventoriesCashFlow-TTM": number;
    @ApiProperty()
    "lowPriceLast3Months-TTM": number;
    @ApiProperty()
    "highPriceLast26Weeks-TTM": number;
    @ApiProperty()
    "totalDebt-TTM": number;
    @ApiProperty()
    "domicileIndicatorCode-Annual": string;
    @ApiProperty()
    "beta12Month-TTM": number;
    @ApiProperty()
    "quarterlySalesUpRevisions": number;
    @ApiProperty()
    "purchaseOfInvestments-Annual": number;
    @ApiProperty()
    "accountsPayable-TTM": number;
    @ApiProperty()
    "conferenceCallDate": string;
    @ApiProperty()
    "priceToBook-TTM": number;
    @ApiProperty()
    "otherAssets-Annual": number;
    @ApiProperty()
    "changeInLongTermDebt-Annual": number;
    @ApiProperty()
    "5YearAverageRAndDAsPercentOfSales-Annual": number;
    @ApiProperty()
    "saleOfFixedAssetsBusinesses-Annual": number;
    @ApiProperty()
    "inventoriesFinishedGoods-TTM": number;
    @ApiProperty()
    "lowPriceLast4Weeks-TTM": number;
    @ApiProperty()
    "marketCapitalizationFullyDiluted-TTM": number;
    @ApiProperty()
    "totalDebtToEquityRatio-TTM": number;
    @ApiProperty()
    "earningsGrowth-Annual": number;
    @ApiProperty()
    "investmentInUnconsolidatedAffiliates-TTM": number;
    @ApiProperty()
    "quarterlySalesValue": number;
    @ApiProperty()
    "reductionOfLongTermDebt-Annual": number;
    @ApiProperty()
    "accountsPayableCashFlow-TTM": number;
    @ApiProperty()
    "shortBio-de-de": string;
    @ApiProperty()
    "marketCapitalizationIssuerLevel-Annual": number;
    @ApiProperty()
    "otherCurrentAssets-Annual": number;
    @ApiProperty()
    "5YearAverageReturnEquity-Annual": number;
    @ApiProperty()
    "salesOrRevenue-Annual": number;
    @ApiProperty()
    "inventoriesProgressPayments-TTM": number;
    @ApiProperty()
    "lowPriceLast52Weeks-TTM": number;
    @ApiProperty()
    "highPriceLast3Months-TTM": number;
    @ApiProperty()
    "totalEnterpriseValue-TTM": number;
    @ApiProperty()
    "ebitdA-Annual": number;
    @ApiProperty()
    "investmentsLongTermReceivables-TTM": number;
    @ApiProperty()
    "marketCapitalizationExcludingNonTradedAndTreasuryIssuerLevel-Annual": number;
    @ApiProperty()
    "repurchaseOfCommonPreferredStock-Annual": number;
    @ApiProperty()
    "accountsReceivableCashFlow-TTM": number;
    @ApiProperty()
    "commonSharesUsedToCalculateEPSFullyDiluted-Annual": number;
    @ApiProperty()
    "marketCapitalizationExcludingNonTradedAndTreasuryIssuerLevel-TTM": number;
    @ApiProperty()
    "otherCurrentLiabilities-Annual": number;
    @ApiProperty()
    "interestPaidCashFlow-Annual": number;
    @ApiProperty()
    "5YearAverageReturnOnAssets-Annual": number;

    @ApiProperty()
    "inventoriesRawMaterials-TTM": number;
    @ApiProperty()
    "lowPriceLast6Months-TTM": number;
    @ApiProperty()
    "marketCapitalizationSecurity-TTM": number;
    @ApiProperty()
    "totalEquity-TTM": number;
    @ApiProperty()
    "ebitdaFromCashFlow-Annual": number;
    @ApiProperty()
    "investorRelationsEmail-TTM": string;
    @ApiProperty()
    "marketCapitalizationExcludingNonTradedIssuerLevel-Annual": number;
    @ApiProperty()
    "saleOfCommonPreferredStock-Annual": number;
    @ApiProperty()
    "accountsReceivablesDays-TTM": number;
    @ApiProperty()
    "marketCapitalizationExcludingNonTradedIssuerLevel-TTM": number;
    @ApiProperty()
    "otherFinancingActivitiesSources-Annual": number;
    @ApiProperty()
    "investingActivitiesOtherUses-Annual": number;
    @ApiProperty()
    "5YearAverageReturnOnInvestedCapital-Annual": number;
    @ApiProperty()
    "lastEarningEstimateAverage": number;
    @ApiProperty()
    "inventoriesWorkInProgress-TTM": number;
    @ApiProperty()
    "lowPriceLast9Months-TTM": number;
    @ApiProperty()
    "highPriceLast4Weeks-TTM": number;
    @ApiProperty()
    "3YearAnnualRAndDGrowthRate-Annual": number;
    @ApiProperty()
    "ebitdaMargin-Annual": number;
    @ApiProperty()
    "isoCountryCode-TTM": string;
    @ApiProperty()
    "marketCapitalizationExcludingTreasuryIssuerLevel-Annual": number;
    @ApiProperty()
    "saleOrMaturityOfInvestments-Annual": number;
    @ApiProperty()
    "accountsReceivablesNet-TTM": number;
    @ApiProperty()
    "commonStockParOrCarryValue-Annual": number;
    @ApiProperty()
    "firstTradeDate": string;
    @ApiProperty()
    "otherFinancingActivity-Annual": number;
    @ApiProperty()
    "issuanceOfLongTermDebt-Annual": number;
    @ApiProperty()
    "tangibleOtherAssets-Annual": number;

    @ApiProperty()
    "lowPriceLast3Months-Annual": number;
    @ApiProperty()
    "lowPriceMTD-TTM": number;
    @ApiProperty()
    "minorityInterestExpense-TTM": number;
    @ApiProperty()
    "3YearAnnualRevenueGrowthRate-Annual": number;
    @ApiProperty()
    "ebitMargin-Annual": number;
    @ApiProperty()
    "highPriceLast13Weeks-Annual": number;
    @ApiProperty()
    "deferredTaxes-TTM": number;
    @ApiProperty()
    "stockBasedCompensationCashFlow-Annual": number;
    @ApiProperty()
    "accruedExpenses-TTM": number;
    @ApiProperty()
    "accountingStandardsFollowed-TTM": string;
    @ApiProperty()
    "depreciationOrDepletion-Annual": number;
    @ApiProperty()
    "3YearAnnualRAndDGrowthRate-TTM": number;
    @ApiProperty()
    "totalAssets-Annual": number;

    @ApiProperty()
    "totalAssets-TTM": number;
    @ApiProperty()
    "lowPriceYTD-TTM": number;
    @ApiProperty()
    "highPriceLast52Weeks-TTM": number;
    @ApiProperty()
    "50DayMovingAverage-Annual": number;
    @ApiProperty()
    "ebitOperatingIncome-Annual": number;
    @ApiProperty()
    "netIncomeContinuingOperations-TTM": number;
    @ApiProperty()
    "annualSalesValue": number;
    @ApiProperty()
    "localName-ru-ru": string;
    @ApiProperty()
    "accumulatedDepreciation-TTM": number;
    @ApiProperty()
    "companyFoundedDate-Annual": string;
    @ApiProperty()
    "marketCapitalizationExcludingTreasuryIssuerLevel-TTM": number;
    @ApiProperty()
    "address1-Annual": string;
    @ApiProperty()
    "totalCash-Annual": number;

    @ApiProperty()
    "totalCash-TTM": number;
    @ApiProperty()
    "marketCapitalization-TTM": number;
    @ApiProperty()
    "miscellaneousFunds-TTM": number;
    @ApiProperty()
    "5DayMovingAverage-Annual": number;
    @ApiProperty()
    "extraordinaryItem-Annual": number;
    @ApiProperty()
    "netIncomeTotalOperations-TTM": number;
    @ApiProperty()
    "annualSalesUpRevisions": number;
    @ApiProperty()
    "arabesqueIsTobacco": boolean;
    @ApiProperty()
    "marketCapitalizationIssuerLevel-TTM": number;
    @ApiProperty()
    "address2-Annual": string;
    @ApiProperty()
    "totalCommonEquity-Annual": number;
    @ApiProperty()
    "nextEarningEstimateAverage": number;
    @ApiProperty()
    "totalCommonEquity-TTM": number;
    @ApiProperty()
    "extraordinaryGainsOrLossesFromSaleOfAsset-TTM": number;
    @ApiProperty()
    "highPriceLast6Months-TTM": number;
    @ApiProperty()
    "5YearAnnualCapitalSpendingGrowthRate-Annual": number;
    @ApiProperty()
    "extraordinaryItemsIncludingAccountingChange-Annual": number;
    @ApiProperty()
    "netInvestingCashFlow-TTM": number;
    @ApiProperty()
    "workingCapital-Annual": number;
    @ApiProperty()
    "companyName-Annual": string;
    @ApiProperty()
    "accountingStandardsFollowed-Annual": string;
    @ApiProperty()
    "amortizationOfIntangibleAssets-Annual": number;
    @ApiProperty()
    "totalCurrentAssets-Annual": number;

    @ApiProperty()
    "totalCurrentAssets-TTM": number;
    @ApiProperty()
    "extraordinaryItem-TTM": number;
    @ApiProperty()
    "naicsCode-TTM": string;
    @ApiProperty()
    "factSetCompanyEntityID-Annual": string;
    @ApiProperty()
    "netOperatingCashFlow-TTM": number;
    @ApiProperty()
    "longBio-ru-ru": string;
    @ApiProperty()
    "workingCapitalPerShare-Annual": number;
    @ApiProperty()
    "latestCloseAsPercentOf200DayAverage-Annual": number;

    @ApiProperty()
    "assetTurnover-Annual": number;
    @ApiProperty()
    "totalCurrentLiabilities-Annual": number;

    @ApiProperty()
    "totalCurrentLiabilities-TTM": number;
    @ApiProperty()
    "extraordinaryItemsIncludingAccountingChange-TTM": number;
    @ApiProperty()
    "highPriceLast9Months-TTM": number;
    @ApiProperty()
    "5YearAnnualIncomeGrowthRate-Annual": number;
    @ApiProperty()
    "faxNumber-Annual": string;
    @ApiProperty()
    "netPropertyPlantEquipment-TTM": number;

    @ApiProperty()
    "transcriptFiscalYear": number;
    @ApiProperty()
    "zipCode-Annual": string;
    @ApiProperty()
    "consolidatedNetIncome-Annual": number;
    @ApiProperty()
    "latestCloseAsPercentOf30WeekAverage-Annual": number;
    @ApiProperty()
    "nonOperatingIncomeExpense-TTM": number;
    @ApiProperty()
    "auditorsOpinion-Annual": string;
    @ApiProperty()
    "totalDebt-Annual": number;
    @ApiProperty()
    "industry-TTM": string;
    @ApiProperty()
    "factSetCompanyEntityID-TTM": string;
    @ApiProperty()
    "netAssetsFromAcquisitions-TTM": number;
    @ApiProperty()
    "5YearAnnualRAndDGrowthRate-Annual": number;
    @ApiProperty()
    "filingStatus-Annual": string;
    @ApiProperty()
    "nonEquityReserves-TTM": number;
    @ApiProperty()
    "replayDate": string;
    @ApiProperty()
    "10DayMovingAverage-TTM": number;
    @ApiProperty()
    "longBio-cs": string;
    @ApiProperty()
    "otherFinancingActivitiesUses-TTM": number;
    @ApiProperty()
    "numberOfEmployees-TTM": number;
    @ApiProperty()
    "averageDailyPercentPriceChange4Weeks-Annual": number;
    @ApiProperty()
    "totalDebtToEquityRatio-Annual": number;
    @ApiProperty()
    "q2EarningDate": string;
    @ApiProperty()
    "industryName-TTM": string;
    @ApiProperty()
    "faxNumber-TTM": string;
    @ApiProperty()
    "highPriceMTD-TTM": number;
    @ApiProperty()
    "5YearAnnualRevenueGrowthRate-Annual": number;
    @ApiProperty()
    "fiscalPeriodEndDate-Annual": string;
    @ApiProperty()
    "nonOperatingExpense-TTM": number;
    @ApiProperty()
    "replayWebcastURL": string;
    @ApiProperty()
    "10WeekMovingAverage-TTM": number;
    @ApiProperty()
    "corporateLocation-Annual": string;
    @ApiProperty()
    "otherProceedsfromStockOptions-TTM": number;
    @ApiProperty()
    "operatingIncome-TTM": number;
    @ApiProperty()
    "3YearAnnualRevenueGrowthRate-TTM": number;
    @ApiProperty()
    "totalEnterpriseValue-Annual": number;
    @ApiProperty()
    "q3EarningDate": string;
    @ApiProperty()
    "instrumentClass-TTM": string;
    @ApiProperty()
    "fiscalPeriodEndDate-TTM": string;
    @ApiProperty()
    "netChangeInCash-TTM": number;
    @ApiProperty()
    "5YearAverageDebtEquityRatio-Annual": number;
    @ApiProperty()
    "fiscalPeriodLengthDays-Annual": number;
    @ApiProperty()
    "figiCode": string;
    @ApiProperty()
    "1YearAnnualRevenueGrowthRate-TTM": number;
    @ApiProperty()
    "operatingIncomeAfterUnusualItems-TTM": number;
    @ApiProperty()
    "50DayMovingAverage-TTM": number;
    @ApiProperty()
    "capitalExpenditures-Annual": number;
    @ApiProperty()
    "q4EarningDate": string;
    @ApiProperty()
    "ebitdaMargin-TTM": number;
    @ApiProperty()
    "costOfGoodsSold-TTM": number;
    @ApiProperty()
    "longTermDebt-TTM": number;
    @ApiProperty()
    "5YearAverageGrossProfitMargin-Annual": number;
    @ApiProperty()
    "averageDailyPercentVolumeChange4Weeks-TTM": number;
    @ApiProperty()
    "figiMarketSector": string;
    @ApiProperty()
    "nextEDFiscalYear": number;
    @ApiProperty()
    "200DayMovingAverage-TTM": number;
    @ApiProperty()
    "highPriceLast26Weeks-Annual": number;
    @ApiProperty()
    "proceedsFromStockOptions-TTM": number;
    @ApiProperty()
    "operatingLeaseExpense-TTM": number;
    @ApiProperty()
    "5DayMovingAverage-TTM": number;
    @ApiProperty()
    "capitalExpendituresFixedAssets-Annual": number;
    @ApiProperty()
    "annualEPSDownRevisions": number;
    @ApiProperty()
    "ebitMargin-TTM": number;
    @ApiProperty()
    "peRatio-TTM": number;
    @ApiProperty()
    "netFinancingCashFlow-TTM": number;
    @ApiProperty()
    "sectorName-TTM": string;
    @ApiProperty()
    "averageDailyVolumeLast10Days-TTM": number;
    @ApiProperty()
    "originalCurrency": string;
    @ApiProperty()
    "30WeekMovingAverage-TTM": number;
    @ApiProperty()
    "shortBio-en-gb": string;
    @ApiProperty()
    "purchaseOfInvestments-TTM": number;
    @ApiProperty()
    "otherFunds-Annual": number;
    @ApiProperty()
    "5YearAnnualCapitalSpendingGrowthRate-TTM": number;
    @ApiProperty()
    "totalVolumeLast2Weeks-Annual": number;
    @ApiProperty()
    "annualEPSEstimates": number;
    @ApiProperty()
    "ebitOperatingIncome-TTM": number;
    @ApiProperty()
    "peRatioFiscal-TTM": number;
    @ApiProperty()
    "longTermDebtToEquityRatio-TTM": number;
    @ApiProperty()
    "securityIsPrimaryIssue-TTM": boolean;
    @ApiProperty()
    "averageDailyVolumeLast12Months-TTM": number;
    @ApiProperty()
    "latestCloseAsPercentOf200DayAverage-TTM": number;
    @ApiProperty()
    "originalCurrencyAmount": number;
    @ApiProperty()
    "3YearAnnualCapitalSpendingGrowthRate-TTM": number;
    @ApiProperty()
    "cashFlowPerShare-Annual": number;
    @ApiProperty()
    "reductionOfLongTermDebt-TTM": number;
    @ApiProperty()
    "revenueToAssets-TTM": number;
    @ApiProperty()
    "totalVolumeLast3Months-Annual": number;
    @ApiProperty()
    "5YearHighPrice-Annual": number;
    @ApiProperty()
    "priceToBookFiscal-TTM": number;
    @ApiProperty()
    "peRatioSecurity-TTM": number;
    @ApiProperty()
    "netGoodwill-TTM": number;
    @ApiProperty()
    "sellingGeneralAdministrativeExpenses-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLast13Weeks-TTM": number;
    @ApiProperty()
    "latestCloseAsPercentOf30WeekAverage-TTM": number;
    @ApiProperty()
    "otherFinancingActivitiesSources-TTM": number;
    @ApiProperty()
    "accumulatedMinorityInterest-TTM": number;
    @ApiProperty()
    "localName-pl-pl": string;
    @ApiProperty()
    "repurchaseOfCommonPreferredStock-TTM": number;
    @ApiProperty()
    "saleOfFixedAssetsBusinesses-TTM": number;
    @ApiProperty()
    "5YearAnnualIncomeGrowthRate-TTM": number;
    @ApiProperty()
    "totalVolumeLast4Weeks-Annual": number;
    @ApiProperty()
    "5YearLowPERatio-Annual": number;
    @ApiProperty()
    "priceToCashFlow-TTM": number;
    @ApiProperty()
    "percentOfSharesOutstandingHeldByInsiders-TTM": number;
    @ApiProperty()
    "deferredTaxes-Annual": number;
    @ApiProperty()
    "sellingGeneralAdministrativeExpensesAndOther-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLast20Days-TTM": number;
    @ApiProperty()
    "latestCloseAsPercentOf52WeekHigh-TTM": number;
    @ApiProperty()
    "localName-ar-ae": string;
    @ApiProperty()
    "otherFinancingActivity-TTM": number;
    @ApiProperty()
    "cashPerShare-Annual": number;
    @ApiProperty()
    "saleOfCommonPreferredStock-TTM": number;
    @ApiProperty()
    "salesOrRevenue-TTM": number;
    @ApiProperty()
    "5YearAnnualRAndDGrowthRate-TTM": number;
    @ApiProperty()
    "totalVolumeLast52Weeks-Annual": number;
    @ApiProperty()
    "5YearLowPrice-Annual": number;
    @ApiProperty()
    "priceToFreeCashFlow-TTM": number;
    @ApiProperty()
    "percentPriceChange10Days-TTM": number;
    @ApiProperty()
    "longBio-da-dk": string;
    @ApiProperty()
    "sharesHeldByInstitutions-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLast26Weeks-TTM": number;
    @ApiProperty()
    "latestCloseAsPercentOf52WeekLow-TTM": number;
    @ApiProperty()
    "longBio-ar-ae": string;
    @ApiProperty()
    "beta24Month-TTM": number;
    @ApiProperty()
    "otherFunds-TTM": number;
    @ApiProperty()
    "saleOrMaturityOfInvestments-TTM": number;
    @ApiProperty()
    "sector-TTM": string;
    @ApiProperty()
    "5YearAnnualRevenueGrowthRate-TTM": number;
    @ApiProperty()
    "totalVolumeLast6Months-Annual": number;
    @ApiProperty()
    "accountsPayable-Annual": number;
    @ApiProperty()
    "priceToSalesFiscal-TTM": number;
    @ApiProperty()
    "percentPriceChange13Weeks-TTM": number;
    @ApiProperty()
    "deferredTaxesExcludingInvestmentTaxCredits-Annual": number;
    @ApiProperty()
    "sharesNumberOfCloselyHeld-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLast2Weeks-TTM": number;
    @ApiProperty()
    "latestCloseAsPercentOf5DayAverage-TTM": number;
    @ApiProperty()
    "fiscalPeriod": string;
    @ApiProperty()
    "beta36Month-TTM": number;
    @ApiProperty()
    "otherIntangibleAssets-TTM": number;
    @ApiProperty()
    "cashShortTermInvestments-Annual": number;
    @ApiProperty()
    "stockBasedCompensationCashFlow-TTM": number;
    @ApiProperty()
    "deferredTaxesInvestmentTaxCredit-Annual": number;
    @ApiProperty()
    "5YearAverageDebtEquityRatio-TTM": number;
    @ApiProperty()
    "totalVolumeLast9Months-Annual": number;
    @ApiProperty()
    "accountsPayableCashFlow-Annual": number;
    @ApiProperty()
    "priceToTangibleBookFiscal-TTM": number;
    @ApiProperty()
    "percentPriceChange1Week-TTM": number;
    @ApiProperty()
    "shortBio-ms-my": string;
    @ApiProperty()
    "sharesOutstanding-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLast3Months-TTM": number;
    @ApiProperty()
    "latestCloseAsPercentOf5YearHigh-TTM": number;
    @ApiProperty()
    "generalIndustryClassification-Annual": string;
    @ApiProperty()
    "otherLiabilities-TTM": number;
    @ApiProperty()
    "ipoDate": string;
    @ApiProperty()
    "deferredTaxLiabilities-Annual": number;
    @ApiProperty()
    "5YearAverageGrossProfitMargin-TTM": number;
    @ApiProperty()
    "totalVolumeMTD-Annual": number;
    @ApiProperty()
    "accountsReceivableCashFlow-Annual": number;
    @ApiProperty()
    "priceToTangibleBookValue-TTM": number;
    @ApiProperty()
    "percentPriceChange26Weeks-TTM": number;
    @ApiProperty()
    "highPriceYTD-TTM": number;
    @ApiProperty()
    "sharesOutstandingCurrent-TTM": number;
    @ApiProperty()
    "fiscalPeriodStartDate-Annual": string;
    @ApiProperty()
    "latestCloseAsPercentOf5YearLow-TTM": number;
    @ApiProperty()
    "fiscalPeriodEndDate": string;
    @ApiProperty()
    "grossIncome-Annual": number;
    @ApiProperty()
    "otherLiabilitiesExcludingDeferredRevenue-TTM": number;
    @ApiProperty()
    "arabesqueIsGMO": boolean;
    @ApiProperty()
    "ceO-Annual": string;
    @ApiProperty()
    "revenuePerShare-Annual": number;
    @ApiProperty()
    "depreciationAmortization-Annual": number;
    @ApiProperty()
    "otherSources-Annual": number;
    @ApiProperty()
    "10DayMovingAverage-Annual": number;
    @ApiProperty()
    "accountsReceivablesDays-Annual": number;
    @ApiProperty()
    "propertyPlantEquipmentBuildings-TTM": number;
    @ApiProperty()
    "percentPriceChange2Weeks-TTM": number;
    @ApiProperty()
    "shareTypeSecurity-TTM": string;
    @ApiProperty()
    "float-Annual": number;
    @ApiProperty()
    "leverageRatio-TTM": number;

    @ApiProperty()
    "capitalExpendituresPerShare-TTM": number;
    @ApiProperty()
    "otherOperatingExpense-TTM": number;
    @ApiProperty()
    "longBio-en-gb": string;
    @ApiProperty()
    "revenueToAssets-Annual": number;
    @ApiProperty()
    "depreciationDepletionAmortizationCashFlow-Annual": number;
    @ApiProperty()
    "otherUses-Annual": number;
    @ApiProperty()
    "10WeekMovingAverage-Annual": number;
    @ApiProperty()
    "accountsReceivablesNet-Annual": number;
    @ApiProperty()
    "provisionForRisksCharges-TTM": number;
    @ApiProperty()
    "fiscalPeriodLengthDays-TTM": number;
    @ApiProperty()
    "incomeTaxes-TTM": number;
    @ApiProperty()
    "shortTermDebt-TTM": number;
    @ApiProperty()
    "floatAsPercentOfSharesOutstanding-Annual": number;
    @ApiProperty()
    "issuanceOrReductionOfDebtNet-TTM": number;
    @ApiProperty()
    "otherSources-TTM": number;
    @ApiProperty()
    "changeInCapitalStock-Annual": number;
    @ApiProperty()
    "percentPriceChange52Weeks-TTM": number;
    @ApiProperty()
    "pegRatio-Annual": number;
    @ApiProperty()
    "1YearAnnualRevenueGrowthRate-Annual": number;
    @ApiProperty()
    "accruedExpenses-Annual": number;
    @ApiProperty()
    "purchaseOrSaleOfInvestments-TTM": number;
    @ApiProperty()
    "fiscalPeriodStartDate-TTM": string;
    @ApiProperty()
    "localName-ms-my": string;
    @ApiProperty()
    "averageDailyPercentPriceChange4Weeks-TTM": number;
    @ApiProperty()
    "floatCurrent-Annual": number;
    @ApiProperty()
    "lastClose-TTM": number;
    @ApiProperty()
    "cashFlowFromOperPerShareNet-TTM": number;
    @ApiProperty()
    "otherUses-TTM": number;
    @ApiProperty()
    "localName-en-gb": string;
    @ApiProperty()
    "percentPriceChange6Months-TTM": number;
    @ApiProperty()
    "peRatio-Annual": number;
    @ApiProperty()
    "200DayMovingAverage-Annual": number;
    @ApiProperty()
    "accumulatedDepreciation-Annual": number;
    @ApiProperty()
    "quickRatio-TTM": number;
    @ApiProperty()
    "float-TTM": number;
    @ApiProperty()
    "priceToSales-Annual": number;
    @ApiProperty()
    "5YearAverageNetProfitMargin-TTM": number;
    @ApiProperty()
    "freeCashFlow-Annual": number;
    @ApiProperty()
    "lastHigh-TTM": number;
    @ApiProperty()
    "cashTaxesPaid-TTM": number;
    @ApiProperty()
    "changeInCurrentDebt-Annual": number;
    @ApiProperty()
    "percentPriceChange9Months-TTM": number;
    @ApiProperty()
    "estimatedQuarterlySales": number;
    @ApiProperty()
    "peRatioFiscal-Annual": number;
    @ApiProperty()
    "30WeekMovingAverage-Annual": number;
    @ApiProperty()
    "cumulativeTranslationAdjustment-TTM": number;
    @ApiProperty()
    "shortTermReceivables-TTM": number;
    @ApiProperty()
    "floatAsPercentOfSharesOutstanding-TTM": number;
    @ApiProperty()
    "localName-da-dk": string;
    @ApiProperty()
    "5YearAveragePERatio-TTM": number;
    @ApiProperty()
    "freeCashFlowPerShareDiluted-Annual": number;
    @ApiProperty()
    "lastLow-TTM": number;
    @ApiProperty()
    "changeInLongTermDebt-TTM": number;
    @ApiProperty()
    "percentPriceChangeMTD-TTM": number;
    @ApiProperty()
    "3YearAnnualCapitalSpendingGrowthRate-Annual": number;
    @ApiProperty()
    "currency-TTM": string;
    @ApiProperty()
    "sicCode-TTM": string;
    @ApiProperty()
    "floatCurrent-TTM": number;
    @ApiProperty()
    "priceToSales-TTM": number;
    @ApiProperty()
    "5YearAveragePreTaxProfitMargin-TTM": number;
    @ApiProperty()
    "fundsFromOperations-Annual": number;
    @ApiProperty()
    "lastOpen-TTM": number;
    @ApiProperty()
    "changesInWorkingCapital-Annual": number;
    @ApiProperty()
    "percentPriceChangeYTD-TTM": number;
    @ApiProperty()
    "percentOfSharesOutstandingHeldByInsiders-Annual": number;
    @ApiProperty()
    "currentRatio-TTM": number;
    @ApiProperty()
    "state-TTM": string;
    @ApiProperty()
    "freeCashFlow-TTM": number;
    @ApiProperty()
    "capitalExpendituresFixedAssets-TTM": number;
    @ApiProperty()
    "5YearAverageRAndDAsPercentOfSales-TTM": number;
    @ApiProperty()
    "netInvestingCashFlow-Annual": number;
    @ApiProperty()
    "lastTradeDate-TTM": string;
    @ApiProperty()
    "interestPaidCashFlow-TTM": number;
    @ApiProperty()
    "3YearAnnualIncomeGrowthRate-TTM": number;
    @ApiProperty()
    "estimatedYearlySales": number;
    @ApiProperty()
    "percentPriceChange10Days-Annual": number;
    @ApiProperty()
    "3YearAnnualIncomeGrowthRate-Annual": number;
    @ApiProperty()
    "currentRevenuePerEmployee-TTM": number;
    @ApiProperty()
    "stateOfIncorporation-TTM": string;
    @ApiProperty()
    "freeCashFlowPerShareDiluted-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLast12Months-Annual": number;
    @ApiProperty()
    "5YearAverageReturnEquity-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLast4Weeks-TTM": number;
    @ApiProperty()
    "lastVolume-TTM": number;
    @ApiProperty()
    "pegRatio-TTM": number;
    @ApiProperty()
    "miscellaneousFunds-Annual": number;
    @ApiProperty()
    "sedol": string;
    @ApiProperty()
    "percentPriceChange13Weeks-Annual": number;
    @ApiProperty()
    "tangibleBookValuePerShare-Annual": number;
    @ApiProperty()
    "dailyVolumeAsPercentOf10DayAverageVolume-TTM": number;
    @ApiProperty()
    "stockOptionCompensationExpense-TTM": number;
    @ApiProperty()
    "changesInWorkingCapital-TTM": number;
    @ApiProperty()
    "5YearAverageReturnOnAssets-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLast52Weeks-TTM": number;
    @ApiProperty()
    "latestCloseAsPercentOf10DayAverage-TTM": number;
    @ApiProperty()
    "quarterlySalesDownRevisions": number;
    @ApiProperty()
    "shortBio-zh-tw": string;
    @ApiProperty()
    "sellingGeneralAdministrativeExpensesAndOther-Annual": number;
    @ApiProperty()
    "naicsCode-Annual": string;
    @ApiProperty()
    "localName-pt-pt": string;
    @ApiProperty()
    "quickRatio-Annual": number;
    @ApiProperty()
    "percentPriceChange1Week-Annual": number;
    @ApiProperty()
    "beta60Month-Annual": number;
    @ApiProperty()
    "dateOf52WeekHigh-TTM": string;
    @ApiProperty()
    "tangibleBookValuePerShare-TTM": number;
    @ApiProperty()
    "city-TTM": string;
    @ApiProperty()
    "averageDailyVolumeLast13Weeks-Annual": number;
    @ApiProperty()
    "5YearAverageReturnOnInvestedCapital-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLast6Months-TTM": number;
    @ApiProperty()
    "latestCloseAsPercentOf10WeekAverage-TTM": number;
    @ApiProperty()
    "quarterlySalesEstimates": number;
    @ApiProperty()
    "localName-zh-cn": string;
    @ApiProperty()
    "sharesHeldByInstitutions-Annual": number;
    @ApiProperty()
    "netAssetsFromAcquisitions-Annual": number;
    @ApiProperty()
    "commonSharesOutstandingSecurity-Annual": number;
    @ApiProperty()
    "rAndDAsPercentOfSales-Annual": number;
    @ApiProperty()
    "isin": string;
    @ApiProperty()
    "netMargin-Annual": number;
    @ApiProperty()
    "bookValue-Annual": number;
    @ApiProperty()
    "dateOf52WeekLow-TTM": string;
    @ApiProperty()
    "tangibleOtherAssets-TTM": number;
    @ApiProperty()
    "priceToTangibleBookValue-Annual": number;
    @ApiProperty()
    "cashEquivalentsGeneric-TTM": number;
    @ApiProperty()
    "5YearAverageSGAndAAsPercentOfSales-TTM": number;
    @ApiProperty()
    "peRatio-TTM-FiveYearsAgo": number;
    @ApiProperty()
    "deferredTaxesInvestmentTaxCredit-TTM": number;
    @ApiProperty()
    "quarterlySalesHigh": number;
    @ApiProperty()
    "issuanceOfLongTermDebt-TTM": number;
    @ApiProperty()
    "sharesNumberOfCloselyHeld-Annual": number;
    @ApiProperty()
    "netChangeInCash-Annual": number;
    @ApiProperty()
    "shortBio-pt-pt": string;
    @ApiProperty()
    "receivablesPerDaySales-Annual": number;
    @ApiProperty()
    "cusip": string;
    @ApiProperty()
    "netMargin1YearGrowthRate-Annual": number;
    @ApiProperty()
    "bookValuePerShare-Annual": number;
    @ApiProperty()
    "daysSalesOutstanding-TTM": number;
    @ApiProperty()
    "propertyPlantEquipmentBuildings-Annual": number;
    @ApiProperty()
    "averageDailyVolumeLast20Days-Annual": number;
    @ApiProperty()
    "5YearAverageTotalDebtEquityRatio-TTM": number;
    @ApiProperty()
    "peRatioFiscal-TTM-ThreeMonthsAgo": number;
    @ApiProperty()
    "deferredTaxLiabilities-TTM": number;
    @ApiProperty()
    "deferredTaxesExcludingInvestmentTaxCredits-TTM": number;
    @ApiProperty()
    "investingActivitiesOtherUses-TTM": number;
    @ApiProperty()
    "sharesOutstanding-Annual": number;
    @ApiProperty()
    "netFinancingCashFlow-Annual": number;
    @ApiProperty()
    "sellingGeneralAdministrativeExpenses-Annual": number;
    @ApiProperty()
    "receivablesTurnover-Annual": number;
    @ApiProperty()
    "cik": string;
    @ApiProperty()
    "netMargin-TTM": number;
    @ApiProperty()
    "businessDescription-Annual": string;
    @ApiProperty()
    "daysSalesOutstandingTimeWeighted-TTM": number;
    @ApiProperty()
    "provisionForRisksCharges-Annual": number;
    @ApiProperty()
    "cashFlowPerShare-TTM": number;
    @ApiProperty()
    "ebitPerShare-Annual": number;
    @ApiProperty()
    "peRatioFiscal-TTM-SixMonthsAgo": number;
    @ApiProperty()
    "depreciationAmortization-TTM": number;
    @ApiProperty()
    "totalVolumeLast6Months-TTM": number;
    @ApiProperty()
    "sharesOutstandingCurrent-Annual": number;
    @ApiProperty()
    "netGoodwill-Annual": number;
    @ApiProperty()
    "researchAndDevelopment-Annual": number;
    @ApiProperty()
    "otherCurrentLiabilities-TTM": number;
    @ApiProperty()
    "netMargin1YearGrowthRate-TTM": number;
    @ApiProperty()
    "5YearAverageSGAndAAsPercentOfSales-Annual": number;
    @ApiProperty()
    "purchaseOrSaleOfInvestments-Annual": number;
    @ApiProperty()
    "averageDailyVolumeLast26Weeks-Annual": number;
    @ApiProperty()
    "peRatioFiscal-TTM-OneYearAgo": number;
    @ApiProperty()
    "depreciationDepletionAmortizationCashFlow-TTM": number;
    @ApiProperty()
    "totalVolumeLast9Months-TTM": number;
    @ApiProperty()
    "localName-ms": string;
    @ApiProperty()
    "shareTypeSecurity-Annual": string;
    @ApiProperty()
    "netIncomeAfterExtraordinaryItems-Annual": number;
    @ApiProperty()
    "returnOnAverageTotalEquity-TTM": number;
    @ApiProperty()
    "reservesChange-Annual": number;
    @ApiProperty()
    "investorRelationsUrl": string;
    @ApiProperty()
    "peRatio-TTM-ThreeMonthsAgo": number;
    @ApiProperty()
    "5YearAverageTotalDebtEquityRatio-Annual": number;
    @ApiProperty()
    "commonSharesOutstandingSecurity-TTM": number;
    @ApiProperty()
    "cashPerShare-TTM": number;
    @ApiProperty()
    "epsBasicBeforeExtraordinaries-Annual": number;
    @ApiProperty()
    "peRatioFiscal-TTM-FiveYearsAgo": number;
    @ApiProperty()
    "depreciationOrDepletion-TTM": number;
    @ApiProperty()
    "totalVolumeMTD-TTM": number;
    @ApiProperty()
    "shortTermDebt-Annual": number;
    @ApiProperty()
    "retainedEarnings-Annual": number;
    @ApiProperty()
    "operatingMargin-TTM": number;
    @ApiProperty()
    "peRatio-TTM-SixMonthsAgo": number;
    @ApiProperty()
    "5YearHighPERatio-Annual": number;
    @ApiProperty()
    "dollarVolume1Week-TTM": number;
    @ApiProperty()
    "commonSharesUsedToCalculateEPSFullyDiluted-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLast2Weeks-Annual": number;
    @ApiProperty()
    "peRatioSecurity-TTM-ThreeMonthsAgo": number;
    @ApiProperty()
    "dividendExDate-TTM": string;
    @ApiProperty()
    "totalVolumeYTD-TTM": number;
    @ApiProperty()
    "investmentsLongTermReceivables-Annual": number;
    @ApiProperty()
    "shortTermReceivables-Annual": number;
    @ApiProperty()
    "returnOnCommonEquity-TTM": number;
    @ApiProperty()
    "returnOnAssets-Annual": number;
    @ApiProperty()
    "otherAfterTaxAdjustments-TTM": number;
    @ApiProperty()
    "peRatio-TTM-OneYearAgo": number;
    @ApiProperty()
    "totalEquity-Annual": number;

    @ApiProperty()
    "domicileIndicatorCode-TTM": string;
    @ApiProperty()
    "commonStockParOrCarryValue-TTM": number;
    @ApiProperty()
    "cashShortTermInvestments-TTM": number;

    @ApiProperty()
    "peRatioSecurity-TTM-SixMonthsAgo": number;
    @ApiProperty()
    "unusualExpense-TTM": number;
    @ApiProperty()
    "investorRelationsEmail-Annual": string;
    @ApiProperty()
    "sicCode-Annual": string;
    @ApiProperty()
    "equityInEarningsOfAffiliatesIncome-TTM": number;
    @ApiProperty()
    "returnOnAverageTotalEquity-Annual": number;
    @ApiProperty()
    "otherAssets-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLast52Weeks-Annual": number;
    @ApiProperty()
    "totalExpenses-Annual": number;

    @ApiProperty()
    "earningsGrowth-TTM": number;
    @ApiProperty()
    "companyFoundedDate-TTM": string;
    @ApiProperty()
    "averageDailyVolumeLast3Months-Annual": number;
    @ApiProperty()
    "totalVolumeLast10Days-TTM": number;
    @ApiProperty()
    "website-TTM": string;
    @ApiProperty()
    "isoCountryCode-Annual": string;
    @ApiProperty()
    "state-Annual": string;
    @ApiProperty()
    "otherLiabilities-Annual": number;
    @ApiProperty()
    "revenuePerShare-TTM": number;
    @ApiProperty()
    "returnOnCommonEquity-Annual": number;
    @ApiProperty()
    "otherCurrentAssets-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLast6Months-Annual": number;
    @ApiProperty()
    "totalInvestedCapital-Annual": number;
    @ApiProperty()
    "percentPriceChange26Weeks-Annual": number;
    @ApiProperty()
    "ebitdA-TTM": number;
    @ApiProperty()
    "companyName-TTM": string;
    @ApiProperty()
    "ceO-TTM": string;
    @ApiProperty()
    "totalVolumeLast12Months-TTM": number;
    @ApiProperty()
    "lowPriceLast13Weeks-Annual": number;
    @ApiProperty()
    "grossIncomeMargin-Annual": number;
    @ApiProperty()
    "weeklyVolumeAsPercentOfSharesOutstanding-TTM": number;
    @ApiProperty()
    "issuanceOrReductionOfDebtNet-Annual": number;
    @ApiProperty()
    "stateOfIncorporation-Annual": string;
    @ApiProperty()
    "otherLiabilitiesExcludingDeferredRevenue-Annual": number;
    @ApiProperty()
    "longBio-it-it": string;
    @ApiProperty()
    "longBusinessDescription-Annual": string;
    @ApiProperty()
    "sectorNameId": number;
    @ApiProperty()
    "totalInvestmentsAndAdvances-Annual": number;
    @ApiProperty()
    "percentPriceChange2Weeks-Annual": number;
    @ApiProperty()
    "ebitdaFromCashFlow-TTM": number;
    @ApiProperty()
    "consolidatedNetIncome-TTM": number;
    @ApiProperty()
    "averageDailyVolumeLast4Weeks-Annual": number;
    @ApiProperty()
    "totalVolumeLast13Weeks-TTM": number;
    @ApiProperty()
    "lowPriceLast26Weeks-Annual": number;
    @ApiProperty()
    "lastClose-Annual": number;
    @ApiProperty()
    "stockOptionCompensationExpense-Annual": number;
    @ApiProperty()
    "otherOperatingExpense-Annual": number;
    @ApiProperty()
    "sector-Annual": string;
    @ApiProperty()
    "longTermDebt-Annual": number;
    @ApiProperty()
    "totalInvestmentsBanks-Annual": number;
    @ApiProperty()
    "percentPriceChange3Months-Annual": number;
    @ApiProperty()
    "lowPriceLast4Weeks-Annual": number;
    @ApiProperty()
    "corporateLocation-TTM": string;
    @ApiProperty()
    "changeInCapitalStock-TTM": number;
    @ApiProperty()
    "totalVolumeLast20Days-TTM": number;
    @ApiProperty()
    "netOperatingCashFlow-Annual": number;
    @ApiProperty()
    "figiSecurityType": string;
    @ApiProperty()
    "zipCode-TTM": string;
    @ApiProperty()
    "lastHigh-Annual": number;
    @ApiProperty()
    "conferenceCallTime": string;
    @ApiProperty()
    "ebitPerShare-TTM": number;
    @ApiProperty()
    "longTermDebtToEquityRatio-Annual": number;
    @ApiProperty()
    "beta24Month-Annual": number;
    @ApiProperty()
    "totalLiabilities-Annual": number;
    @ApiProperty()
    "percentPriceChange4Weeks-Annual": number;
    @ApiProperty()
    "lowPriceLast52Weeks-Annual": number;
    @ApiProperty()
    "percentPriceChange3Months-TTM": number;
    @ApiProperty()
    "totalVolumeYTD-Annual": number;
    @ApiProperty()
    "totalVolumeLast26Weeks-TTM": number;
    @ApiProperty()
    "netPropertyPlantEquipment-Annual": number;
    @ApiProperty()
    "fiscalPeriod-Annual": string;
    @ApiProperty()
    "workingCapital-TTM": number;
    @ApiProperty()
    "issuerLevelCurrency-Annual": string;
    @ApiProperty()
    "epS-TTM": number;
    @ApiProperty()
    "sectorName-Annual": string;
    @ApiProperty()
    "latestCloseAsPercentOf52WeekHigh-Annual": number;
    @ApiProperty()
    "beta36Month-Annual": number;
    @ApiProperty()
    "totalLiabilitiesStockholdersEquity-Annual": number;
    @ApiProperty()
    "percentPriceChange52Weeks-Annual": number;
    @ApiProperty()
    "lowPriceLast6Months-Annual": number;
    @ApiProperty()
    "percentPriceChange4Weeks-TTM": number;
    @ApiProperty()
    "changeInCurrentDebt-TTM": number;
    @ApiProperty()
    "totalVolumeLast2Weeks-TTM": number;
    @ApiProperty()
    "nonEquityReserves-Annual": number;
    @ApiProperty()
    "fiscalPeriod-TTM": string;
    @ApiProperty()
    "workingCapitalPerShare-TTM": number;

    @ApiProperty()
    "latestCloseAsPercentOf52WeekLow-Annual": number;
    @ApiProperty()
    "fixedChargeCoverageRatio-TTM": number;
    @ApiProperty()
    "peRatioSecurity-TTM-OneYearAgo": number;
    @ApiProperty()
    "totalOperatingExpenses-Annual": number;
    @ApiProperty()
    "percentPriceChange6Months-Annual": number;
    @ApiProperty()
    "lowPriceLast9Months-Annual": number;
    @ApiProperty()
    "preTaxInterestCoverageRatio-Annual": number;
    @ApiProperty()
    "unusualExpense-Annual": number;
    @ApiProperty()
    "totalVolumeLast3Months-TTM": number;
    @ApiProperty()
    "nonOperatingExpense-Annual": number;
    @ApiProperty()
    "peRatioSecurity-TTM-FiveYearsAgo": number;
    @ApiProperty()
    "totalShareholdersEquity-Annual": number;
    @ApiProperty()
    "accumulatedOtherCompensationIncomeOtherAdjustments-TTM": number;
    @ApiProperty()
    "securityIsPrimaryIssue-Annual": boolean;
    @ApiProperty()
    "latestCloseAsPercentOf5DayAverage-Annual": number;
    @ApiProperty()
    "averageDailyVolumeLast9Months-Annual": number;
    @ApiProperty()
    "totalVolume1Week-Annual": number;
    @ApiProperty()
    "percentPriceChange9Months-Annual": number;
    @ApiProperty()
    "lowPriceMTD-Annual": number;
    @ApiProperty()
    "preTaxProfitMargin-Annual": number;
    @ApiProperty()
    "localName-ro-ro": string;
    @ApiProperty()
    "totalVolumeLast4Weeks-TTM": number;
    @ApiProperty()
    "nonOperatingIncomeExpense-Annual": number;
    @ApiProperty()
    "averageDailyVolumeLastMonth-Annual": number;
    @ApiProperty()
    "totalVolumeLast10Days-Annual": number;
    @ApiProperty()
    "latestCloseAsPercentOf5YearHigh-Annual": number;
    @ApiProperty()
    "fixedChargeCoverageRatio-Annual": number;
    @ApiProperty()
    "averageDailyVolumeYTD-Annual": number;
    @ApiProperty()
    "totalVolumeLast12Months-Annual": number;
    @ApiProperty()
    "percentPriceChangeMTD-Annual": number;
    @ApiProperty()
    "lowPriceYTD-Annual": number;
    @ApiProperty()
    "priceToBook-Annual": number;
    @ApiProperty()
    "website-Annual": string;
    @ApiProperty()
    "totalVolumeLast52Weeks-TTM": number;
    @ApiProperty()
    "numberOfEmployees-Annual": number;
    @ApiProperty()
    "beta-Annual": number;
    @ApiProperty()
    "totalVolumeLast13Weeks-Annual": number;
    @ApiProperty()
    "address2-TTM": string;
    @ApiProperty()
    "numberOfEmployees-TTM-ThreeMonthsAgo": number;
    @ApiProperty()
    "inventoriesProgressPayments-Annual": number;
    @ApiProperty()
    "latestCloseAsPercentOf5YearLow-Annual": number;
    @ApiProperty()
    "beta12Month-Annual": number;
    @ApiProperty()
    "totalVolumeLast20Days-Annual": number;
    @ApiProperty()
    "percentPriceChangeYTD-Annual": number;
    @ApiProperty()
    "marketCapitalization-Annual": number;
    @ApiProperty()
    "priceToBookFiscal-Annual": number;
    @ApiProperty()
    "longBio-ro-ro": string;
    @ApiProperty()
    "totalExpenses-TTM": number;
    @ApiProperty()
    "operatingIncome-Annual": number;
    @ApiProperty()
    "averageDailyPercentVolumeChange4Weeks-Annual": number;
    @ApiProperty()
    "totalVolumeLast26Weeks-Annual": number;
    @ApiProperty()
    "amortizationOfIntangibleAssets-TTM": number;
    @ApiProperty()
    "marketCapitalizationFiscal-Annual": number;
    @ApiProperty()
    "netIncomeTotalOperations-Annual": number;
    @ApiProperty()
    "leverageRatio-Annual": number;
    @ApiProperty()
    "averageDailyVolumeLast10Days-Annual": number;
    @ApiProperty()
    "weeklyVolumeAsPercentOfSharesOutstanding-Annual": number;
    @ApiProperty()
    "phoneNumber-Annual": string;
    @ApiProperty()
    "marketCapitalizationFullyDiluted-Annual": number;
    @ApiProperty()
    "priceToCashFlow-Annual": number;
    @ApiProperty()
    "inventoriesRawMaterials-Annual": number;
    @ApiProperty()
    "totalInvestedCapital-TTM": number;
    @ApiProperty()
    "longTermDebtToTotalCapital-Annual": number;
    @ApiProperty()
    "netIncomeContinuingOperations-Annual": number;
    @ApiProperty()
    "beta60Month-TTM": number;
    @ApiProperty()
    "assetTurnover-TTM": number;
    @ApiProperty()
    "marketCapitalizationSecurity-Annual": number;
    @ApiProperty()
    "priceToFreeCashFlow-Annual": number;
    @ApiProperty()
    "localName-nb-no": string;
    @ApiProperty()
    "totalInvestmentsAndAdvances-TTM": number;
    @ApiProperty()
    "netIncomeAvailableToCommonBasic-Annual": number;
    @ApiProperty()
    "earningConfirmationDate": string;
    @ApiProperty()
    "preferredDividends-Annual": number;
    @ApiProperty()
    "minorityInterestExpense-Annual": number;
    @ApiProperty()
    "priceToSalesFiscal-Annual": number;
    @ApiProperty()
    "inventoriesWorkInProgress-Annual": number;
    @ApiProperty()
    "totalInvestmentsBanks-TTM": number;
    @ApiProperty()
    "longTermNoteReceivable-Annual": number;
    @ApiProperty()
    "netIncomeCashFlow-Annual": number;
    @ApiProperty()
    "bookValue-TTM": number;
    @ApiProperty()
    "auditorsOpinion-TTM": string;
    @ApiProperty()
    "priceToTangibleBookFiscal-Annual": number;
    @ApiProperty()
    "earningEstimateChangeAverage": number;
    @ApiProperty()
    "totalLiabilities-TTM": number;
    @ApiProperty()
    "investmentInUnconsolidatedAffiliates-Annual": number;
    @ApiProperty()
    "numberOfEmployees-TTM-SixMonthsAgo": number;
    @ApiProperty()
    "bookValuePerShare-TTM": number;
    @ApiProperty()
    "preferredStockCarryingValue-Annual": number;
    @ApiProperty()
    "numberOfEmployees-TTM-OneYearAgo": number;
    @ApiProperty()
    "costOfGoodsSold-Annual": number;
    @ApiProperty()
    "totalLiabilitiesStockholdersEquity-TTM": number;
    @ApiProperty()
    "rAndDAsPercentOfSales-TTM": number;
    @ApiProperty()
    "numberOfEmployees-TTM-FiveYearsAgo": number;
    @ApiProperty()
    "businessDescription-TTM": string;
    @ApiProperty()
    "lastLow-Annual": number;
    @ApiProperty()
    "localName-es-es": string;
    @ApiProperty()
    "otherIntangibleAssets-Annual": number;
    @ApiProperty()
    "cumulativeTranslationAdjustment-Annual": number;
    @ApiProperty()
    "totalOperatingExpenses-TTM": number;
    @ApiProperty()
    "receivablesPerDaySales-TTM": number;
    @ApiProperty()
    "pretaxIncome-Annual": number;
    @ApiProperty()
    "shortBio-ro-ro": string;
    @ApiProperty()
    "totalShareholdersEquity-TTM": number;
    @ApiProperty()
    "receivablesTurnover-TTM": number;
    @ApiProperty()
    "lastOpen-Annual": number;
    @ApiProperty()
    "currency-Annual": string;
    @ApiProperty()
    "totalVolume1Week-TTM": number;
    @ApiProperty()
    "researchAndDevelopment-TTM": number;
    @ApiProperty()
    "accumulatedMinorityInterest-Annual": number;
    @ApiProperty()
    "shortBio-da": string;
    @ApiProperty()
    "lastTradeDate-Annual": string;
    @ApiProperty()
    "reservesChange-TTM": number;
    @ApiProperty()
    "issuerLevelCurrency-TTM": string;
    @ApiProperty()
    "currentRatio-Annual": number;
    @ApiProperty()
    "lastVolume-Annual": number;
    @ApiProperty()
    "retainedEarnings-TTM": number;
    @ApiProperty()
    "accumulatedOtherCompensationIncomeOtherAdjustments-Annual": number;
    @ApiProperty()
    "longBio-ms": string;
    @ApiProperty()
    "latestCloseAsPercentOf10DayAverage-Annual": number;
    @ApiProperty()
    "returnOnAssets-TTM": number;
    @ApiProperty()
    "currentRevenuePerEmployee-Annual": number;
    @ApiProperty()
    "latestCloseAsPercentOf10WeekAverage-Annual": number;
    @ApiProperty()
    "industryName-Annual": string;
    @ApiProperty()
    "instrumentClass-Annual": string;
    @ApiProperty()
    "dailyVolumeAsPercentOf10DayAverageVolume-Annual": number;
    @ApiProperty()
    "instrumentLevelSector-Annual": string;
    @ApiProperty()
    "intangibleAssets-Annual": number;
    @ApiProperty()
    "dateOf52WeekHigh-Annual": string;
    @ApiProperty()
    "annualEPSHigh": number;
    @ApiProperty()
    "interestExpense-Annual": number;
    @ApiProperty()
    "annualEPSLow": number;
    @ApiProperty()
    "longBio-da": string;
    @ApiProperty()
    "annualEPSMedian": number;
    @ApiProperty()
    "inventories-Annual": number;
    @ApiProperty()
    "annualEPSStandardDeviation": number;
    @ApiProperty()
    "dateOf52WeekLow-Annual": string;

    @ApiProperty()
    "inventoriesCashFlow-Annual": number;
    @ApiProperty()
    "annualEPSUpRevisions": number;
    @ApiProperty()
    "netIncomeCashFlow-TTM": number;

    @ApiProperty()
    "inventoriesFinishedGoods-Annual": number;
    @ApiProperty()
    "annualSalesDownRevisions": number;
    @ApiProperty()
    "daysSalesOutstanding-Annual": number;
    @ApiProperty()
    "annualSalesEstimates": number;
    @ApiProperty()
    "highPriceLast3Months-Annual": number;
    @ApiProperty()
    "annualSalesHigh": number;
    @ApiProperty()
    "netIncomeAfterExtraordinaryItems-TTM": number;
    @ApiProperty()
    "annualSalesLow": number;
    @ApiProperty()
    "highPriceLast4Weeks-Annual": number;
    @ApiProperty()
    "annualSalesMedian": number;
    @ApiProperty()
    "netIncomeAvailableToCommonBasic-TTM": number;
    @ApiProperty()
    "annualSalesStandardDeviation": number;
    @ApiProperty()
    "highPriceLast52Weeks-Annual": number;
    @ApiProperty()
    "annualSalesTimestamp": string;
    @ApiProperty()
    "shortBio-ms": string;
    @ApiProperty()
    "highPriceLast6Months-Annual": number;
    @ApiProperty()
    "shortBio-ro": string;
    @ApiProperty()
    "highPriceLast9Months-Annual": number;
    @ApiProperty()
    "shortBio-cs-cz": string;
    @ApiProperty()
    "highPriceMTD-Annual": number;
    @ApiProperty()
    "highPriceYTD-Annual": number;
    @ApiProperty()
    "incomeTaxes-Annual": number;
    @ApiProperty()
    "industry-Annual": string;
    @ApiProperty()
    "popularityUniques": number;
    @ApiProperty()
    "holdingPct": number;
    @ApiProperty()
    "buyHoldingPct": number;
    @ApiProperty()
    "sellHoldingPct": number;
    @ApiProperty()
    "buyPctChange24Hours": number;
    @ApiProperty()
    "absBuyPctChange24Hours": number;
    @ApiProperty()
    "institutionalHoldingPct": number;
    @ApiProperty()
    "marketCapInUSD": number;
    @ApiProperty()
    "marketCapClassifications": string;
    @ApiProperty()
    "daysSinceFirstTrade": number;
    @ApiProperty()
    "daysTillNextEarningReport": number;
    @ApiProperty()
    "enterpriseValuetoSales": number;
    @ApiProperty()
    "enterpriseValuetoEBITDA": number;
    @ApiProperty()
    "netProfitMargin": number;
    @ApiProperty()
    "enterpriseValuetoOperCashflow": number;
    @ApiProperty()
    "returnOnInvestedCapital": number;
    @ApiProperty()
    "volumeRateOfChange10Days": number;
    @ApiProperty()
    "volumeRateOfChange4Weeks": number;
    @ApiProperty()
    "volumeRateOfChange3Months": number;
    @ApiProperty()
    "volumeRateOfChange6Months": number;
    @ApiProperty()
    "absBuyPctChange24Hours-Industry-RankDesc": number;
    @ApiProperty()
    "buyPctChange24Hours-Industry-RankDesc": number;
    @ApiProperty()
    "holdingPct-Industry-RankDesc": number;
    @ApiProperty()
    "absBuyPctChange24Hours-Sector-RankDesc": number;
    @ApiProperty()
    "buyPctChange24Hours-Sector-RankDesc": number;
    @ApiProperty()
    "holdingPct-Sector-RankDesc": number;
    @ApiProperty()
    "absBuyPctChange24Hours-System-RankDesc": number;
    @ApiProperty()
    "buyPctChange24Hours-System-RankDesc": number;
    @ApiProperty()
    "holdingPct-System-RankDesc": number;
    @ApiProperty()
    "isCurrentlyTradable": boolean;
    @ApiProperty()
    "isExchangeOpen": boolean;
    @ApiProperty()
    "isBuyEnabled": boolean;
    @ApiProperty()
    "currentRate": number;
}

export class InstrumentInfoEarningsReportRO {
    @ApiProperty()
    internalIndustryId: number
    @ApiProperty()
    displayname: string
    @ApiProperty()
    conferenceCallBroadcastURL: string
    @ApiProperty()
    conferenceCallDate: string
    @ApiProperty()
    currency: string
    @ApiProperty()
    quarterlyEPSEstimates: number
    @ApiProperty()
    quarterlyEPSMedian: number
    @ApiProperty()
    quarterlyEPSValue: number
    @ApiProperty()
    quarterlySalesMedian: number
    @ApiProperty()
    quarterlySalesValue: number
    @ApiProperty()
    replayDate: string
    @ApiProperty()
    replayWebcastURL: string
    @ApiProperty()
    nextEarningDate: string
    @ApiProperty()
    nextEarningsDateQuarter: string
    @ApiProperty()
    nextEarningTime: string
    @ApiProperty()
    conferenceCallTime: string
    @ApiProperty()
    fiscalYear: number
    @ApiProperty()
    marketCapitalization: number
}

export class InstrumentInfoOverviewRO {
    @ApiProperty()
    internalIndustryId: number
    @ApiProperty()
    marketPageUrl: string
    @ApiProperty()
    salesOrRevenue: number
    @ApiProperty()
    quickRatio: number
    @ApiProperty()
    longTermDebtToEquityRatio: number
    @ApiProperty()
    ceo: string
    @ApiProperty()
    cashFlowPerShare: number
    @ApiProperty()
    netOperatingCashFlow: number
    @ApiProperty()
    totalDebtToEquityRatio: number
    @ApiProperty()
    peRatio: number
    @ApiProperty()
    revenuePerShare: number
    @ApiProperty()
    currentRatio: number
    @ApiProperty()
    operatingMargin: number
    @ApiProperty()
    dividendRate: number
    @ApiProperty()
    "5YearAverageReturnOnInvestedCapital": number
    @ApiProperty()
    industryName: string
    @ApiProperty()
    marketCapitalization: number
    @ApiProperty()
    beta: number
    @ApiProperty()
    investorRelationsUrl: string
    @ApiProperty()
    averageDailyVolumeLast3Months: number
    @ApiProperty()
    "5YearAverageNetProfitMargin": number
    @ApiProperty()
    grossIncomeMargin: number
    @ApiProperty()
    eps: number
    @ApiProperty()
    sectorName: string
    @ApiProperty()
    internalClosingPrice: number
    @ApiProperty()
    dividendYieldDaily: number
}

export class InstrumentInfoPopularMarketsRO {
    page: number
    pageSize: number
    totalItems: number
    items: InstrumentInfoPopularMarketsItemRO[]
}

export class InstrumentInfoPopularMarketsItemRO {
    displayname: string
    popularityUniques7Day: number
    instrumentId: number;
    internalSymbolFull: string;
}

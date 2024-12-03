 // @ApiOperation({
    //     summary: 'Instrument and company extended info',
    //     description: 'important key metrics you can check the InstrumentInfoRO response model for the optional fields names .',
    // })
    // @ApiResponse({ status: 200, description: 'Return instrument', type: InstrumentInfoRO })
    // @ApiNotFoundResponse({ description: 'Instrument not found' })
    // @ApiParam({ name: 'symbol', required: true, description: 'instrument symbol', type: 'string' })
    // @ApiQuery({
    //     name: 'fields',
    //     required: true,
    //     description: 'fields to include in the response using comma delimeter, Important: please use the fields name as they appear',
    //     type: 'string',
    //     example: '?fields=5YearHighPrice-Annual,priceToTangibleBookValue-TTM,tipRanksFourStarsAnalystSuccessRate',
    //     // enum: ["dailyPriceChange", "absDailyPriceChange", "weeklyPriceChange", "monthlyPriceChange", "isDelisted", "isCurrentlyTradable", "isExchangeOpen", "internalClosingPrice", "isActiveInPlatform", "isBuyEnabled", "currentRate", "threeMonthPriceChange", "sixMonthPriceChange", "oneYearPriceChange", "currMonthPriceChange", "currQuarterPriceChange", "currYearPriceChange", "lastYearPriceChange", "lastTwoYearsPriceChange", "oneMonthAgoPriceChange", "twoMonthsAgoPriceChange", "threeMonthsAgoPriceChange", "sixMonthsAgoPriceChange", "oneYearAgoPriceChange", "cvtBid", "cvtAsk", "cvtBiNoSpread", "cvtAskNoSpread", "traders7DayChange", "traders14DayChange", "traders30DayChange", "popularityUniques7Day", "popularityUniques14Day", "popularityUniques30Day", "stockBasedCompensationCashFlow-TTM", "capitalExpendituresPerShare-Annual", "cashDividendsOrCashFlow-Annual", "cashFlowFromOperPerShareNet-Annual", "saleOfCommonPreferredStock-TTM", "saleOrMaturityOfInvestments-TTM", "ipoDate", "cashTaxesPaid-Annual", "changeInLongTermDebt-Annual", "commonDividends-Annual", "interestPaidCashFlow-Annual", "investingActivitiesOtherUses-Annual", "repurchaseOfCommonPreferredStock-Annual", "saleOfCommonPreferredStock-Annual", "saleOrMaturityOfInvestments-Annual", "stockBasedCompensationCashFlow-Annual", "otherFinancingActivitiesUses-TTM", "otherProceedsfromStockOptions-TTM", "preferredDividendsCashFlow-TTM", "proceedsFromStockOptions-TTM", "purchaseOfInvestments-TTM", "reductionOfLongTermDebt-TTM", "repurchaseOfCommonPreferredStock-TTM", "otherFinancingActivitiesUses-Annual", "otherProceedsfromStockOptions-Annual", "preferredDividendsCashFlow-Annual", "proceedsFromStockOptions-Annual", "purchaseOfInvestments-Annual", "reductionOfLongTermDebt-Annual", "tipranksConsensus", "tipranksHighPriceTarget", "tipranksLowPriceTarget", "tipranksTargetPrice", "tipranksTargetPriceCurrency", "tipranksTargetPriceUpside", "tipranksTotalAnalysts", "10DayMovingAverage-Annual", "10WeekMovingAverage-Annual", "1YearAnnualRevenueGrowthRate-Annual", "200DayMovingAverage-Annual", "30WeekMovingAverage-Annual", "3YearAnnualCapitalSpendingGrowthRate-Annual", "3YearAnnualDividendGrowthRate-Annual", "3YearAnnualIncomeGrowthRate-Annual", "tipranksAnalystsSupportingBuy", "tipranksAnalystsSupportingHold", "tipranksAnalystsSupportingSell", "issuanceOfLongTermDebt-Annual", "tipRanksFourStarsAnalystExcessReturn", "tipRanksFourStarsAnalystGoodRecommendations", "tipRanksFourStarsAnalystName", "tipRanksFourStarsAnalystPicture", "tipRanksFourStarsAnalystPriceTarget", "tipRanksFourStarsAnalystRank", "tipRanksFourStarsAnalystsSupportingBuy", "tipRanksFourStarsAnalystsSupportingHold", "tipRanksFourStarsAnalystsSupportingSell", "tipRanksFourStarsAnalystStars", "tipRanksFourStarsAnalystStockAverageReturn", "tipRanksFourStarsAnalystStockSuccessRate", "tipRanksFourStarsAnalystSuccessRate", "tipRanksFourStarsAnalystTotalRecommendations", "tipRanksFourStarsConsensus", "tipRanksFourStarsFirmName", "tipRanksFourStarsHighPriceTarget", "tipRanksFourStarsLowPriceTarget", "tipRanksFourStarsRecommendation", "tipRanksFourStarsRecommendationArticleUrl", "tipRanksFourStarsRecommendationDate", "tipRanksFourStarsTargetPriceCurrency", "tipRanksFourStarsTargetPrice", "issuerLevelCurrency-Annual", "tipRanksFourStarsTotalAnalysts", "3YearAnnualRAndDGrowthRate-Annual", "3YearAnnualRevenueGrowthRate-Annual", "50DayMovingAverage-Annual", "5DayMovingAverage-Annual", "5YearAnnualCapitalSpendingGrowthRate-Annual", "5YearAnnualDividendGrowthRate-Annual", "5YearAnnualIncomeGrowthRate-Annual", "5YearAnnualRAndDGrowthRate-Annual", "5YearAnnualRevenueGrowthRate-Annual", "5YearAverageDebtEquityRatio-Annual", "5YearAverageGrossProfitMargin-Annual", "operatingIncomeAfterUnusualItems-Annual", "operatingLeaseExpense-Annual", "operatingMargin-Annual", "otherAfterTaxAdjustments-Annual", "priceToTangibleBookValue-TTM", "propertyPlantEquipmentBuildings-TTM", "provisionForRisksCharges-TTM", "purchaseOrSaleOfInvestments-TTM", "quickRatio-TTM", "extraordinaryGainsOrLossesFromSaleOfAsset-TTM", "extraordinaryItem-TTM", "extraordinaryItemsIncludingAccountingChange-TTM", "factSetCompanyEntityID-TTM", "faxNumber-TTM", "fiscalPeriodEndDate-TTM", "fiscalPeriodLengthDays-TTM", "fiscalPeriodStartDate-TTM", "float-TTM", "floatAsPercentOfSharesOutstanding-TTM", "floatCurrent-TTM", "freeCashFlow-TTM", "freeCashFlowPerShareDiluted-TTM", "arabesqueIsDefence", "arabesqueIsFirearms", "arabesqueIsFossilFuels", "arabesqueIsGambling", "arabesqueIsGMO", "arabesqueIsNuclear", "arabesqueIsPork", "arabesqueIsRecreationalDrugs", "arabesqueIsStemCells", "arabesqueIsThermalCoal", "arabesqueIsTobacco", "issuerLevelCurrency-TTM", "arabesqueESGEnvironment", "arabesqueESGGovernance", "arabesqueESGSocial", "arabesqueESGTotal", "arabesqueGlobalCompactAnti-Corruption", "arabesqueGlobalCompactEnvironment", "arabesqueGlobalCompactTotal", "arabesqueHumanRights", "arabesqueLabourRights", "arabesqueControversialWeaponsReason", "arabesqueIsAdultEntertainment", "arabesqueIsAlcohol", "arabesqueIsControversialWeapons", "peRatio-TTM-FiveYearsAgo", "peRatioFiscal-TTM-ThreeMonthsAgo", "peRatioFiscal-TTM-SixMonthsAgo", "peRatioFiscal-TTM-OneYearAgo", "peRatioFiscal-TTM-FiveYearsAgo", "peRatioSecurity-TTM-ThreeMonthsAgo", "peRatioSecurity-TTM-SixMonthsAgo", "highPriceLast26Weeks-Annual", "highPriceLast3Months-Annual", "highPriceLast4Weeks-Annual", "highPriceLast52Weeks-Annual", "highPriceLast6Months-Annual", "highPriceLast9Months-Annual", "highPriceMTD-Annual", "highPriceYTD-Annual", "incomeTaxes-Annual", "industry-Annual", "industryName-Annual", "instrumentClass-Annual", "deferredTaxesInvestmentTaxCredit-Annual", "deferredTaxLiabilities-Annual", "depreciationAmortization-Annual", "depreciationDepletionAmortizationCashFlow-Annual", "depreciationOrDepletion-Annual", "dividendExDate-Annual", "dividendPayoutRatio-Annual", "dividendRate-Annual", "dividendsPerShareLTMSecurity-Annual", "deferredTaxes-Annual", "deferredTaxesExcludingInvestmentTaxCredits-Annual", "beta60Month-Annual", "bookValue-Annual", "bookValuePerShare-Annual", "businessDescription-Annual", "shortBio-ru-ru", "5YearHighPrice-Annual", "5YearLowPERatio-Annual", "5YearLowPrice-Annual", "accountsPayable-Annual", "accountsPayableCashFlow-Annual", "accountsReceivableCashFlow-Annual", "accountsReceivablesDays-Annual", "accountsReceivablesNet-Annual", "accruedExpenses-Annual", "accumulatedDepreciation-Annual", "accumulatedMinorityInterest-Annual", "accumulatedOtherCompensationIncomeOtherAdjustments-Annual", "5YearHighPERatio-TTM", "5YearHighPrice-TTM", "5YearLowPERatio-TTM", "5YearLowPrice-TTM", "accountsPayable-TTM", "accountsPayableCashFlow-TTM", "accountsReceivableCashFlow-TTM", "accountsReceivablesDays-TTM", "accountsReceivablesNet-TTM", "accruedExpenses-TTM", "accumulatedDepreciation-TTM", "accumulatedMinorityInterest-TTM", "averageDailyVolumeLast9Months-TTM", "averageDailyVolumeLastMonth-TTM", "averageDailyVolumeYTD-TTM", "beta-TTM", "beta12Month-TTM", "beta60Month-TTM", "bookValue-TTM", "bookValuePerShare-TTM", "businessDescription-TTM", "capitalExpenditures-TTM", "capitalExpendituresFixedAssets-TTM", "cashDividendsPaid-TTM", "cashEquivalentsGeneric-TTM", "cashFlowPerShare-TTM", "cashPerShare-TTM", "cashShortTermInvestments-TTM", "ceO-TTM", "changeInCapitalStock-TTM", "changeInCurrentDebt-TTM", "cashFlowPerShare-Annual", "cashPerShare-Annual", "cashShortTermInvestments-Annual", "ceO-Annual", "changeInCapitalStock-Annual", "changeInCurrentDebt-Annual", "changesInWorkingCapital-Annual", "city-Annual", "commonSharesOutstandingSecurity-Annual", "commonSharesUsedToCalculateEPSFullyDiluted-Annual", "sectorNameId", "peRatio-TTM", "peRatioFiscal-TTM", "peRatioSecurity-TTM", "percentOfSharesOutstandingHeldByInsiders-TTM", "percentPriceChange10Days-TTM", "percentPriceChange13Weeks-TTM", "percentPriceChange1Week-TTM", "percentPriceChange26Weeks-TTM", "percentPriceChange2Weeks-TTM", "percentPriceChange3Months-TTM", "percentPriceChange4Weeks-TTM", "totalDebt-TTM", "totalDebtToEquityRatio-TTM", "totalEnterpriseValue-TTM", "totalEquity-TTM", "totalExpenses-TTM", "totalInvestedCapital-TTM", "industryNameId", "peRatioSecurity-TTM-FiveYearsAgo", "peRatioSecurity-TTM-OneYearAgo", "revenuePerShare-TTM", "retainedEarnings-TTM", "returnOnAssets-TTM", "returnOnAverageTotalEquity-TTM", "returnOnCommonEquity-TTM", "daysSalesOutstandingTimeWeighted-TTM", "rAndDAsPercentOfSales-TTM", "receivablesPerDaySales-TTM", "receivablesTurnover-TTM", "researchAndDevelopment-TTM", "reservesChange-TTM", "longTermDebt-Annual", "longTermDebtToEquityRatio-Annual", "cumulativeTranslationAdjustment-TTM", "currency-TTM", "currentRatio-TTM", "currentRevenuePerEmployee-TTM", "dailyVolumeAsPercentOf10DayAverageVolume-TTM", "dateOf52WeekHigh-TTM", "dateOf52WeekLow-TTM", "daysSalesOutstanding-TTM", "numberOfEmployees-TTM-SixMonthsAgo", "figiCode", "numberOfEmployees-TTM-ThreeMonthsAgo", "totalVolumeLast52Weeks-TTM", "numberOfEmployees-TTM-OneYearAgo", "numberOfEmployees-TTM-FiveYearsAgo", "totalVolumeLast26Weeks-TTM", "totalVolumeLast2Weeks-TTM", "totalVolumeLast3Months-TTM", "totalVolumeLast4Weeks-TTM", "totalInvestmentsAndAdvances-TTM", "totalInvestmentsBanks-TTM", "totalLiabilities-TTM", "totalLiabilitiesStockholdersEquity-TTM", "totalOperatingExpenses-TTM", "totalShareholdersEquity-TTM", "totalVolume1Week-TTM", "totalVolumeLast10Days-TTM", "totalVolumeLast12Months-TTM", "totalVolumeLast13Weeks-TTM", "totalVolumeLast20Days-TTM", "figiSecurityType", "figiMarketSector", "fiscalPeriod-Annual", "fiscalPeriod-TTM", "marketCapitalizationIssuerLevel-Annual", "marketCapitalizationExcludingNonTradedAndTreasuryIssuerLevel-TTM", "marketCapitalizationExcludingNonTradedIssuerLevel-TTM", "marketCapitalizationExcludingTreasuryIssuerLevel-TTM", "marketCapitalizationIssuerLevel-TTM", "miscellaneousFunds-Annual", "firstTradeDate", "naicsCode-Annual", "accountingStandardsFollowed-Annual", "accountingStandardsFollowed-TTM", "localName-ar-ae", "longBio-ar-ae", "shortBio-ar-ae", "zipCode-TTM", "workingCapital-TTM", "workingCapitalPerShare-TTM", "totalVolumeMTD-TTM", "totalVolumeYTD-TTM", "unusualExpense-TTM", "website-TTM", "weeklyVolumeAsPercentOfSharesOutstanding-TTM", "marketCapitalizationFiscal-TTM", "marketCapitalizationFullyDiluted-TTM", "marketCapitalizationSecurity-TTM", "minorityInterestExpense-TTM", "miscellaneousFunds-TTM", "naicsCode-TTM", "netAssetsFromAcquisitions-TTM", "netChangeInCash-TTM", "netFinancingCashFlow-TTM", "netGoodwill-TTM", "netIncomeAfterExtraordinaryItems-TTM", "netIncomeAvailableToCommonBasic-TTM", "netIncomeCashFlow-TTM", "netMargin-Annual", "netMargin1YearGrowthRate-Annual", "netMargin-TTM", "netMargin1YearGrowthRate-TTM", "peRatio-TTM-ThreeMonthsAgo", "peRatio-TTM-SixMonthsAgo", "peRatio-TTM-OneYearAgo", "totalVolumeLast6Months-TTM", "totalVolumeLast9Months-TTM", "netAssetsFromAcquisitions-Annual", "netChangeInCash-Annual", "netFinancingCashFlow-Annual", "netGoodwill-Annual", "netIncomeAfterExtraordinaryItems-Annual", "netIncomeAvailableToCommonBasic-Annual", "netIncomeCashFlow-Annual", "netIncomeContinuingOperations-Annual", "netIncomeTotalOperations-Annual", "instrumentLevelSector-Annual", "intangibleAssets-Annual", "interestExpense-Annual", "inventories-Annual", "inventoriesCashFlow-Annual", "inventoriesFinishedGoods-Annual", "inventoriesProgressPayments-Annual", "inventoriesRawMaterials-Annual", "inventoriesWorkInProgress-Annual", "investmentInUnconsolidatedAffiliates-Annual", "extraordinaryItem-Annual", "otherFunds-Annual", "otherAssets-Annual", "otherCurrentAssets-Annual", "otherCurrentLiabilities-Annual", "otherFinancingActivitiesSources-Annual", "otherFinancingActivity-Annual", "localName-pt-pt", "shortBio-pt-pt", "longBio-pt-pt", "shortBio-pl-pl", "longBio-pl-pl", "localName-pl-pl", "localName-nl-nl", "shortBio-nl-nl", "longBio-nl-nl", "localName-nb-no", "shortBio-nb-no", "longBio-nb-no", "longBio-it-it", "localName-it-it", "shortBio-it-it", "localName-fr-fr", "stateOfIncorporation-Annual", "stockOptionCompensationExpense-Annual", "workingCapital-Annual", "workingCapitalPerShare-Annual", "zipCode-Annual", "10DayMovingAverage-TTM", "10WeekMovingAverage-TTM", "1YearAnnualRevenueGrowthRate-TTM", "200DayMovingAverage-TTM", "30WeekMovingAverage-TTM", "3YearAnnualCapitalSpendingGrowthRate-TTM", "3YearAnnualDividendGrowthRate-TTM", "3YearAnnualIncomeGrowthRate-TTM", "averageDailyPercentPriceChange4Weeks-TTM", "5YearAverageNetProfitMargin-TTM", "5YearAveragePERatio-TTM", "5YearAveragePreTaxProfitMargin-TTM", "5YearAverageRAndDAsPercentOfSales-TTM", "5YearAverageReturnEquity-TTM", "5YearAverageReturnOnAssets-TTM", "5YearAverageReturnOnInvestedCapital-TTM", "5YearAverageSGAndAAsPercentOfSales-TTM", "5YearAverageTotalDebtEquityRatio-TTM", "accumulatedOtherCompensationIncomeOtherAdjustments-TTM", "address1-TTM", "address2-TTM", "amortizationOfIntangibleAssets-TTM", "assetTurnover-TTM", "auditorsOpinion-TTM", "percentPriceChange26Weeks-Annual", "percentPriceChange2Weeks-Annual", "percentPriceChange3Months-Annual", "percentPriceChange4Weeks-Annual", "percentPriceChange52Weeks-Annual", "percentPriceChange6Months-Annual", "percentPriceChange9Months-Annual", "percentPriceChangeMTD-Annual", "percentPriceChangeYTD-Annual", "phoneNumber-Annual", "preferredDividends-Annual", "preferredStockCarryingValue-Annual", "pretaxIncome-Annual", "nonOperatingIncomeExpense-TTM", "numberOfEmployees-TTM", "operatingIncome-TTM", "operatingIncomeAfterUnusualItems-TTM", "operatingLeaseExpense-TTM", "operatingMargin-TTM", "otherAfterTaxAdjustments-TTM", "otherAssets-TTM", "otherCurrentAssets-TTM", "otherCurrentLiabilities-TTM", "deferredTaxesInvestmentTaxCredit-TTM", "deferredTaxLiabilities-TTM", "depreciationAmortization-TTM", "depreciationDepletionAmortizationCashFlow-TTM", "depreciationOrDepletion-TTM", "dividendExDate-TTM", "dividendPayoutRatio-TTM", "dividendRate-TTM", "dividendsPerShareLTMSecurity-TTM", "deferredTaxes-TTM", "deferredTaxesExcludingInvestmentTaxCredits-TTM", "beta24Month-TTM", "beta36Month-TTM", "changesInWorkingCapital-TTM", "city-TTM", "commonSharesOutstandingSecurity-TTM", "commonSharesUsedToCalculateEPSFullyDiluted-TTM", "commonStockParOrCarryValue-TTM", "companyFoundedDate-TTM", "companyName-TTM", "consolidatedNetIncome-TTM", "corporateLocation-TTM", "costOfGoodsSold-TTM", "commonStockParOrCarryValue-Annual", "companyFoundedDate-Annual", "companyName-Annual", "consolidatedNetIncome-Annual", "corporateLocation-Annual", "dividendsPerShareSecurity-TTM", "dividendYieldDaily-TTM", "dividendYieldFiscal-TTM", "dividendYieldSecurity-TTM", "dollarVolume1Week-TTM", "domicileIndicatorCode-TTM", "earningsGrowth-TTM", "ebitdA-TTM", "ebitdaFromCashFlow-TTM", "ebitdaMargin-TTM", "ebitMargin-TTM", "ebitOperatingIncome-TTM", "averageDailyPercentVolumeChange4Weeks-TTM", "averageDailyVolumeLast10Days-TTM", "averageDailyVolumeLast12Months-TTM", "averageDailyVolumeLast13Weeks-TTM", "averageDailyVolumeLast20Days-TTM", "averageDailyVolumeLast26Weeks-TTM", "averageDailyVolumeLast2Weeks-TTM", "averageDailyVolumeLast3Months-TTM", "averageDailyVolumeLast4Weeks-TTM", "averageDailyVolumeLast52Weeks-TTM", "averageDailyVolumeLast6Months-TTM", "longTermDebtToTotalCapital-TTM", "longTermNoteReceivable-TTM", "lowPriceLast13Weeks-TTM", "lowPriceLast26Weeks-TTM", "lowPriceLast3Months-TTM", "lowPriceLast4Weeks-TTM", "lowPriceLast52Weeks-TTM", "lowPriceLast6Months-TTM", "lowPriceLast9Months-TTM", "lowPriceMTD-TTM", "lowPriceYTD-TTM", "marketCapitalization-TTM", "longBusinessDescription-TTM", "longTermDebt-TTM", "longTermDebtToEquityRatio-TTM", "investmentInUnconsolidatedAffiliates-TTM", "investmentsLongTermReceivables-TTM", "investorRelationsEmail-TTM", "isoCountryCode-TTM", "issuanceOrReductionOfDebtNet-TTM", "lastClose-TTM", "lastHigh-TTM", "lastLow-TTM", "lastOpen-TTM", "lastTradeDate-TTM", "lastVolume-TTM", "latestCloseAsPercentOf10DayAverage-TTM", "latestCloseAsPercentOf10WeekAverage-TTM", "latestCloseAsPercentOf200DayAverage-TTM", "latestCloseAsPercentOf30WeekAverage-TTM", "latestCloseAsPercentOf52WeekHigh-TTM", "latestCloseAsPercentOf52WeekLow-TTM", "latestCloseAsPercentOf5DayAverage-TTM", "latestCloseAsPercentOf5YearHigh-TTM", "latestCloseAsPercentOf5YearLow-TTM", "estimatedYearlySales", "fiscalPeriod", "estimatedYearlyEPS", "estimatedQuarterlyEPS", "estimatedQuarterlySales", "estimatedEPS", "shortBio-th-th", "isin", "sedol", "cusip", "shortBio-fi-fi", "longBio-fi-fi", "longBio-th-th", "localName-th-th", "localName-fi-fi", "fixedChargeCoverageRatio-TTM", "cik", "capitalExpendituresPerShare-TTM", "cashDividendsOrCashFlow-TTM", "cashFlowFromOperPerShareNet-TTM", "cashTaxesPaid-TTM", "changeInLongTermDebt-TTM", "commonDividends-TTM", "interestPaidCashFlow-TTM", "investingActivitiesOtherUses-TTM", "issuanceOfLongTermDebt-TTM", "highPriceLast26Weeks-TTM", "highPriceLast3Months-TTM", "highPriceLast4Weeks-TTM", "highPriceLast52Weeks-TTM", "highPriceLast6Months-TTM", "highPriceLast9Months-TTM", "highPriceMTD-TTM", "highPriceYTD-TTM", "incomeTaxes-TTM", "netIncomeContinuingOperations-TTM", "netIncomeTotalOperations-TTM", "netInvestingCashFlow-TTM", "netOperatingCashFlow-TTM", "netPropertyPlantEquipment-TTM", "nonEquityReserves-TTM", "nonOperatingExpense-TTM", "latestCloseAsPercentOf200DayAverage-Annual", "latestCloseAsPercentOf30WeekAverage-Annual", "latestCloseAsPercentOf52WeekHigh-Annual", "latestCloseAsPercentOf52WeekLow-Annual", "latestCloseAsPercentOf5DayAverage-Annual", "latestCloseAsPercentOf5YearHigh-Annual", "latestCloseAsPercentOf5YearLow-Annual", "leverageRatio-Annual", "longBusinessDescription-Annual", "longBio-ro-ro", "localName-ro-ro", "shortBio-da-dk", "localName-ms-my", "localName-da-dk", "longBio-da-dk", "longBio-ms-my", "shortBio-ms-my", "localName-en-us", "shortBio-en-us", "longBio-en-us", "shortBio-cs-cz", "longBio-cs-cz", "localName-cs-cz", "historicDividends", "longBio-ms", "localName-ro", "longBio-da", "longBio-ro", "shortBio-da", "shortBio-ms", "shortBio-ro", "longTermDebtToTotalCapital-Annual", "longTermNoteReceivable-Annual", "lowPriceLast13Weeks-Annual", "lowPriceLast26Weeks-Annual", "investmentsLongTermReceivables-Annual", "investorRelationsEmail-Annual", "isoCountryCode-Annual", "issuanceOrReductionOfDebtNet-Annual", "lastClose-Annual", "lastHigh-Annual", "lastLow-Annual", "lastOpen-Annual", "lastTradeDate-Annual", "lastVolume-Annual", "latestCloseAsPercentOf10DayAverage-Annual", "latestCloseAsPercentOf10WeekAverage-Annual", "totalVolumeYTD-Annual", "unusualExpense-Annual", "website-Annual", "weeklyVolumeAsPercentOfSharesOutstanding-Annual", "totalEquity-Annual", "totalExpenses-Annual", "totalInvestedCapital-Annual", "totalInvestmentsAndAdvances-Annual", "totalInvestmentsBanks-Annual", "totalLiabilities-Annual", "totalLiabilitiesStockholdersEquity-Annual", "totalOperatingExpenses-Annual", "totalShareholdersEquity-Annual", "totalVolume1Week-Annual", "totalVolumeLast10Days-Annual", "totalVolumeLast12Months-Annual", "totalVolumeLast13Weeks-Annual", "totalVolumeLast20Days-Annual",  "totalVolumeLast3Months-Annual", "totalVolumeLast4Weeks-Annual", "totalVolumeLast52Weeks-Annual", "totalVolumeLast6Months-Annual", "totalVolumeLast9Months-Annual", "totalVolumeMTD-Annual", "earningConfirmationDate", "earningEstimateChangeAverage", "shortBio-vi-vn", "longBio-vi-vn", "investorRelationsUrl", "fixedChargeCoverageRatio-Annual", "localName-vi-vn", "interestExpense-TTM", "inventories-TTM", "inventoriesCashFlow-TTM", "inventoriesFinishedGoods-TTM", "inventoriesProgressPayments-TTM", "inventoriesRawMaterials-TTM", "inventoriesWorkInProgress-TTM", "equityInEarningsOfAffiliatesIncome-Annual", "extraordinaryGainsOrLossesFromSaleOfAsset-Annual", "generalIndustryClassification-Annual", "grossIncome-Annual", "industry-TTM", "industryName-TTM", "instrumentClass-TTM", "instrumentLevelSector-TTM", "intangibleAssets-TTM", "extraordinaryItemsIncludingAccountingChange-Annual", "factSetCompanyEntityID-Annual", "faxNumber-Annual", "filingStatus-Annual", "fiscalPeriodEndDate-Annual", "fiscalPeriodLengthDays-Annual", "fiscalPeriodStartDate-Annual", "float-Annual", "floatAsPercentOfSharesOutstanding-Annual", "floatCurrent-Annual", "freeCashFlow-Annual", "freeCashFlowPerShareDiluted-Annual", "fundsFromOperations-Annual", "conferenceCallTime", "dividendAnnouncementDate", "dividendFrequency", "dividendStatus", "dividendPayDate", "dividendRecordDate", "lastXDividendDate", "nextEDFiscalYear", "originalCurrency", "originalCurrencyAmount", "replayDate", "replayWebcastURL", "transcriptFiscalYear", "xDividend", "averageDailyVolumeLast52Weeks-Annual", "averageDailyVolumeLast6Months-Annual", "averageDailyVolumeLast9Months-Annual", "averageDailyVolumeLastMonth-Annual", "averageDailyVolumeYTD-Annual", "beta-Annual", "beta12Month-Annual", "beta24Month-Annual", "beta36Month-Annual", "grossIncomeMargin-Annual", "highPriceLast13Weeks-Annual", "ebitPerShare-Annual", "epS-Annual", "epsBasicBeforeExtraordinaries-Annual", "epsDilutedBeforeUnusualExpense-Annual", "epsFromContinuingOperations-Annual", "epsFullyDiluted-Annual", "epsSecurity-Annual", "capitalExpenditures-Annual", "capitalExpendituresFixedAssets-Annual", "cashDividendsPaid-Annual", "cashEquivalentsGeneric-Annual", "costOfGoodsSold-Annual", "cumulativeTranslationAdjustment-Annual", "currency-Annual", "currentRatio-Annual", "currentRevenuePerEmployee-Annual", "dailyVolumeAsPercentOf10DayAverageVolume-Annual", "dateOf52WeekHigh-Annual", "dateOf52WeekLow-Annual", "daysSalesOutstanding-Annual", "daysSalesOutstandingTimeWeighted-Annual", "dividendsPerShareSecurity-Annual", "dividendYieldDaily-Annual", "dividendYieldFiscal-Annual", "dividendYieldSecurity-Annual", "dollarVolume1Week-Annual", "domicileIndicatorCode-Annual", "earningsGrowth-Annual", "ebitdA-Annual", "ebitdaFromCashFlow-Annual", "ebitdaMargin-Annual", "ebitMargin-Annual", "ebitOperatingIncome-Annual", "shortTermReceivables-TTM", "sicCode-TTM", "state-TTM", "stateOfIncorporation-TTM", "stockOptionCompensationExpense-TTM", "tangibleBookValuePerShare-TTM", "tangibleOtherAssets-TTM", "totalAssets-TTM", "totalCash-TTM", "totalCommonEquity-TTM", "totalCurrentAssets-TTM", "totalCurrentLiabilities-TTM", "percentPriceChange52Weeks-TTM", "percentPriceChange6Months-TTM", "percentPriceChange9Months-TTM", "percentPriceChangeMTD-TTM", "percentPriceChangeYTD-TTM", "phoneNumber-TTM", "preferredDividends-TTM", "preferredStockCarryingValue-TTM", "pretaxIncome-TTM", "preTaxInterestCoverageRatio-TTM", "preTaxProfitMargin-TTM", "priceToBook-TTM", "otherSources-Annual", "otherUses-Annual", "pegRatio-Annual", "peRatio-Annual", "peRatioFiscal-Annual", "peRatioSecurity-Annual", "percentOfSharesOutstandingHeldByInsiders-Annual", "percentPriceChange10Days-Annual", "percentPriceChange13Weeks-Annual", "percentPriceChange1Week-Annual", "sellingGeneralAdministrativeExpensesAndOther-Annual", "sharesHeldByInstitutions-Annual", "sharesNumberOfCloselyHeld-Annual", "sharesOutstanding-Annual", "sharesOutstandingCurrent-Annual", "shareTypeSecurity-Annual", "shortTermDebt-Annual", "shortTermReceivables-Annual", "sicCode-Annual", "state-Annual", "shortBio-zh-cn", "longBio-zh-cn", "lowPriceLast3Months-Annual", "lowPriceLast4Weeks-Annual", "lowPriceLast52Weeks-Annual", "lowPriceLast6Months-Annual", "lowPriceLast9Months-Annual", "lowPriceMTD-Annual", "lowPriceYTD-Annual", "marketCapitalization-Annual", "localName-sv-se", "shortBio-sv-se", "longBio-sv-se", "localName-ru-ru", "localName-ms", "longBio-ru-ru", "localName-zh-tw", "localName-da", "longBio-zh-tw", "shortBio-zh-tw", "shortBio-ro-ro", "localName-zh-cn", "marketCapitalizationFiscal-Annual", "marketCapitalizationFullyDiluted-Annual", "marketCapitalizationSecurity-Annual", "minorityInterestExpense-Annual", "otherIntangibleAssets-Annual", "otherLiabilities-Annual", "otherLiabilitiesExcludingDeferredRevenue-Annual", "otherOperatingExpense-Annual", "netInvestingCashFlow-Annual", "netOperatingCashFlow-Annual", "netPropertyPlantEquipment-Annual", "nonEquityReserves-Annual", "nonOperatingExpense-Annual", "nonOperatingIncomeExpense-Annual", "numberOfEmployees-Annual", "operatingIncome-Annual", "priceToSales-Annual", "priceToSales-TTM", "averageDailyVolumeLast12Months-Annual", "averageDailyVolumeLast13Weeks-Annual", "averageDailyVolumeLast20Days-Annual", "averageDailyVolumeLast26Weeks-Annual", "averageDailyVolumeLast2Weeks-Annual", "annualSalesTimestamp", "boardOfDirectorMeetingDate", "conferenceCallBroadcastURL", "annualSalesLow", "annualSalesMedian", "annualSalesStandardDeviation", "annualEPSMedian", "annualEPSStandardDeviation", "annualEPSTimestamp", "annualEPSUpRevisions", "annualEPSValue", "annualSalesDownRevisions", "annualSalesEstimates", "annualSalesHigh", "conferenceCallDate", "priceToFreeCashFlow-Annual", "priceToSalesFiscal-Annual", "priceToTangibleBookFiscal-Annual", "priceToTangibleBookValue-Annual", "propertyPlantEquipmentBuildings-Annual", "provisionForRisksCharges-Annual", "purchaseOrSaleOfInvestments-Annual", "saleOfFixedAssetsBusinesses-Annual", "salesOrRevenue-Annual", "earningsQuarter", "lastEarningEstimateAverage", "lastEarningUpdateDate", "nextEarningDate", "nextEarningDateType", "nextEarningEstimateAverage", "nextEarningsDateQuarter", "nextEarningTime", "q1EarningDate", "q2EarningDate", "q3EarningDate", "q4EarningDate", "annualEPSDownRevisions", "annualEPSEstimates", "annualEPSHigh", "annualEPSLow", "averageDailyVolumeLast3Months-Annual", "averageDailyVolumeLast4Weeks-Annual", "5YearAverageNetProfitMargin-Annual", "5YearAveragePERatio-Annual", "5YearAveragePreTaxProfitMargin-Annual", "5YearAverageRAndDAsPercentOfSales-Annual", "5YearAverageReturnEquity-Annual", "5YearAverageReturnOnAssets-Annual", "5YearAverageReturnOnInvestedCapital-Annual", "5YearAverageSGAndAAsPercentOfSales-Annual", "5YearAverageTotalDebtEquityRatio-Annual", "5YearHighPERatio-Annual", "address1-Annual", "address2-Annual", "amortizationOfIntangibleAssets-Annual", "assetTurnover-Annual", "auditorsOpinion-Annual", "averageDailyPercentPriceChange4Weeks-Annual", "averageDailyPercentVolumeChange4Weeks-Annual", "averageDailyVolumeLast10Days-Annual", "fundsFromOperations-TTM", "generalIndustryClassification-TTM", "grossIncome-TTM", "grossIncomeMargin-TTM", "highPriceLast13Weeks-TTM", "ebitPerShare-TTM", "epS-TTM", "epsBasicBeforeExtraordinaries-TTM", "epsDilutedBeforeUnusualExpense-TTM", "epsFromContinuingOperations-TTM", "epsFullyDiluted-TTM", "epsSecurity-TTM", "equityInEarningsOfAffiliatesIncome-TTM", "sector-Annual", "sectorName-Annual", "securityIsPrimaryIssue-Annual", "sellingGeneralAdministrativeExpenses-Annual", "preTaxInterestCoverageRatio-Annual", "preTaxProfitMargin-Annual", "priceToBook-Annual", "priceToBookFiscal-Annual", "priceToCashFlow-Annual", "leverageRatio-TTM", "tangibleBookValuePerShare-Annual", "tangibleOtherAssets-Annual", "totalAssets-Annual", "totalCash-Annual", "totalCommonEquity-Annual", "totalCurrentAssets-Annual", "totalCurrentLiabilities-Annual", "totalDebt-Annual", "totalDebtToEquityRatio-Annual", "totalEnterpriseValue-Annual", "3YearAnnualRAndDGrowthRate-TTM", "3YearAnnualRevenueGrowthRate-TTM", "50DayMovingAverage-TTM", "5DayMovingAverage-TTM", "5YearAnnualCapitalSpendingGrowthRate-TTM", "5YearAnnualDividendGrowthRate-TTM", "5YearAnnualIncomeGrowthRate-TTM", "5YearAnnualRAndDGrowthRate-TTM", "5YearAnnualRevenueGrowthRate-TTM", "5YearAverageDebtEquityRatio-TTM", "5YearAverageGrossProfitMargin-TTM", "annualSalesUpRevisions", "annualSalesValue", "quarterlyEPSDownRevisions", "quarterlyEPSEstimates", "quarterlyEPSHigh", "quarterlyEPSLow", "fiscalPeriodEndDate", "quarterlyEPSMedian", "quarterlyEPSStandardDeviation", "quarterlyEPSTimestamp", "quarterlyEPSUpRevisions", "quarterlyEPSValue", "quarterlySalesDownRevisions", "quarterlySalesEstimates", "quarterlySalesHigh", "quarterlySalesLow", "quarterlySalesMedian", "quarterlySalesStandardDeviation", "quarterlySalesTimestamp", "quarterlySalesUpRevisions", "quarterlySalesValue", "marketCapitalizationExcludingNonTradedAndTreasuryIssuerLevel-Annual", "marketCapitalizationExcludingNonTradedIssuerLevel-Annual", "marketCapitalizationExcludingTreasuryIssuerLevel-Annual", "quickRatio-Annual", "rAndDAsPercentOfSales-Annual", "receivablesPerDaySales-Annual", "receivablesTurnover-Annual", "researchAndDevelopment-Annual", "reservesChange-Annual", "retainedEarnings-Annual", "returnOnAssets-Annual", "returnOnAverageTotalEquity-Annual", "returnOnCommonEquity-Annual", "revenuePerShare-Annual", "revenueToAssets-Annual", "otherFinancingActivitiesSources-TTM", "otherFinancingActivity-TTM", "otherFunds-TTM", "otherIntangibleAssets-TTM", "otherLiabilities-TTM", "otherLiabilitiesExcludingDeferredRevenue-TTM", "otherOperatingExpense-TTM", "otherSources-TTM", "otherUses-TTM", "pegRatio-TTM", "sectorName-TTM", "securityIsPrimaryIssue-TTM", "sellingGeneralAdministrativeExpenses-TTM", "sellingGeneralAdministrativeExpensesAndOther-TTM", "sharesHeldByInstitutions-TTM", "sharesNumberOfCloselyHeld-TTM", "sharesOutstanding-TTM", "sharesOutstandingCurrent-TTM", "shareTypeSecurity-TTM", "shortTermDebt-TTM", "revenueToAssets-TTM", "saleOfFixedAssetsBusinesses-TTM", "salesOrRevenue-TTM", "sector-TTM", "priceToBookFiscal-TTM", "priceToCashFlow-TTM", "priceToFreeCashFlow-TTM", "priceToSalesFiscal-TTM", "priceToTangibleBookFiscal-TTM", "popularityUniques", "holdingPct", "buyHoldingPct", "sellHoldingPct", "buyPctChange24Hours", "absBuyPctChange24Hours", "institutionalHoldingPct", "dividendRatePercentage", "marketCapInUSD", "marketCapClassifications", "daysSinceFirstTrade", "daysTillNextEarningReport", "enterpriseValuetoSales", "enterpriseValuetoEBITDA", "netProfitMargin", "enterpriseValuetoOperCashflow", "returnOnInvestedCapital", "volumeRateOfChange10Days", "volumeRateOfChange4Weeks", "volumeRateOfChange3Months", "volumeRateOfChange6Months", "epsGrowth3Months", "epsGrowth1Year", "epsGrowth5Years", "normalizedESGScore", "daystilldividendXdate", "liveTipranksTargetUpside", "liveTipranksTargetUpsideAbsolute", "absBuyPctChange24Hours-Industry-RankDesc", "buyPctChange24Hours-Industry-RankDesc", "holdingPct-Industry-RankDesc", "tipRanksFourStarsTotalAnalysts-Industry-RankDesc", "dividendYieldDaily-TTM-Industry-RankAsc", "dividendYieldDaily-TTM-Industry-RankDesc", "arabesqueESGTotal-Industry-Avg", "arabesqueESGTotal-Industry-RankAsc", "arabesqueESGTotal-Industry-RankDesc", "arabesqueESGTotal-Industry-TotalItems", "traders14DayChange-Industry-RankAsc", "traders14DayChange-Industry-RankDesc", "traders14DayChange-Industry-TotalItems", "traders7DayChange-Industry-RankDesc", "traders7DayChange-Industry-TotalItems", "peRatio-TTM-Industry-Avg", "peRatio-TTM-Industry-RankAsc", "peRatio-TTM-Industry-RankDesc", "peRatio-TTM-Industry-TotalItems", "absBuyPctChange24Hours-Sector-RankDesc", "buyPctChange24Hours-Sector-RankDesc", "holdingPct-Sector-RankDesc", "tipRanksFourStarsTotalAnalysts-Sector-RankDesc", "dividendYieldDaily-TTM-Sector-RankAsc", "dividendYieldDaily-TTM-Sector-RankDesc", "arabesqueESGTotal-Sector-Avg", "arabesqueESGTotal-Sector-RankAsc", "arabesqueESGTotal-Sector-RankDesc", "arabesqueESGTotal-Sector-TotalItems", "traders14DayChange-Sector-RankAsc", "traders14DayChange-Sector-RankDesc", "traders14DayChange-Sector-TotalItems", "traders30DayChange-Sector-RankAsc", "traders30DayChange-Sector-RankDesc", "traders30DayChange-Sector-TotalItems", "popularityUniques-Sector-RankAsc", "popularityUniques-Sector-RankDesc", "traders7DayChange-Sector-RankAsc", "traders7DayChange-Sector-RankDesc", "traders7DayChange-Sector-TotalItems", "peRatio-TTM-Sector-Avg", "peRatio-TTM-Sector-RankAsc", "peRatio-TTM-Sector-RankDesc", "peRatio-TTM-Sector-TotalItems", "absBuyPctChange24Hours-System-RankDesc", "buyPctChange24Hours-System-RankDesc", "holdingPct-System-RankDesc", "traders14DayChange-System-RankAsc", "traders14DayChange-System-RankDesc", "traders14DayChange-System-TotalItems", "traders30DayChange-System-RankAsc", "traders30DayChange-System-RankDesc", "traders30DayChange-System-TotalItems", "popularityUniques-System-RankAsc", "popularityUniques-System-RankDesc", "traders7DayChange-System-RankAsc", "traders7DayChange-System-RankDesc", "traders7DayChange-System-TotalItems", "tipRanksFourStarsTotalAnalysts-System-RankDesc", "dividendYieldDaily-TTM-System-RankAsc", "dividendYieldDaily-TTM-System-RankDesc", "arabesqueESGTotal-System-Avg", "arabesqueESGTotal-System-RankAsc", "arabesqueESGTotal-System-RankDesc", "arabesqueESGTotal-System-TotalItems", "peRatio-TTM-System-Avg", "peRatio-TTM-System-RankAsc", "peRatio-TTM-System-RankDesc", "peRatio-TTM-System-TotalItems"]
    // })
    // @Get('/:symbol/info')
    // async getBySymbol(
    //     @Param('symbol') symbol: string,
    //     @Query('fields') fields: string
    // ): Promise<InstrumentInfoRO> {
    //     const fieldArray = fields.split(',');
    //     return await this.instrumetsInfoService.getBySymbol(symbol, fieldArray);
    // }
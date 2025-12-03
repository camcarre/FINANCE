// config.js - Static portfolio configuration for Portfolio Tracker
// Summary: Defines portfolio positions and API configuration for the client-side tracker.

const PORTFOLIO_CONFIG = {
  currency: "EUR",
  yahooProxyBaseUrl: "https://corsproxy.io/?url=",
  coingeckoBaseUrl: "https://api.coingecko.com/api/v3",
  coingeckoVsCurrency: "eur",
  assets: [
    {
      id: "CW8.PA",
      type: "ETF",
      name: "Amundi MSCI World (PEA)",
      ticker: "CW8.PA",
      isin: "LU1681043599",
      quantity: 1,
      buyPrice: 587.86,
      priceSource: "yahoo"
    },
    {
      id: "500.PA",
      type: "ETF",
      name: "Amundi S&P 500",
      ticker: "500.PA",
      isin: "LU1681048804",
      quantity: 2,
      buyPrice: 113.25,
      priceSource: "yahoo"
    },
    {
      id: "PCEU.PA",
      type: "ETF",
      name: "Amundi PEA MSCI Europe",
      ticker: "PCEU.PA",
      isin: "FR0013412038",
      quantity: 6,
      buyPrice: 34.12,
      priceSource: "yahoo"
    },
    {
      id: "PTPXE.PA",
      type: "ETF",
      name: "Amundi PEA Japan TOPIX",
      ticker: "PTPXE.PA",
      isin: "FR0013411980",
      quantity: 3,
      buyPrice: 30.93,
      priceSource: "yahoo"
    },
    {
      id: "PASI.PA",
      type: "ETF",
      name: "Amundi PEA Chine",
      ticker: "PASI.PA",
      isin: "FR0011871078",
      quantity: 9,
      buyPrice: 11.29,
      priceSource: "yahoo"
    },
    {
      id: "PAEJ.PA",
      type: "ETF",
      name: "Amundi PEA Asia Pacific",
      ticker: "PAEJ.PA",
      isin: "FR0011869312",
      quantity: 4,
      buyPrice: 21.21,
      priceSource: "yahoo"
    },
    {
      id: "PUST.PA",
      type: "ETF",
      name: "Amundi PEA US Tech",
      ticker: "PUST.PA",
      isin: "FR0013412269",
      quantity: 2,
      buyPrice: 63.75,
      priceSource: "yahoo"
    },
    {
      id: "HLTW.PA",
      type: "ETF",
      name: "Amundi MSCI World Health Care",
      ticker: "HLTW.PA",
      isin: "LU0533033238",
      quantity: 0.220823,
      buyPrice: 457.33,
      priceSource: "yahoo"
    },
    {
      id: "AIGP.MI",
      type: "ETF",
      name: "WisdomTree Precious Metals",
      ticker: "AIGP.MI",
      isin: "GB00B15KYF40",
      quantity: 6.727664,
      buyPrice: 37.31,
      priceSource: "yahoo"
    },
    {
      id: "BTC-COINBASE",
      type: "CRYPTO",
      name: "Bitcoin (Coinbase)",
      ticker: "BTC",
      quantity: 0.00662155,
      buyPrice: 33485,
      coingeckoId: "bitcoin",
      priceSource: "coingecko"
    },
    {
      id: "BTC-BITSTACK",
      type: "CRYPTO",
      name: "Bitcoin (Bitstack)",
      ticker: "BTC",
      quantity: 0.00444508,
      buyPrice: 45150,
      coingeckoId: "bitcoin",
      priceSource: "coingecko"
    },
    {
      id: "FIXED-PRIVATE-MARKETS",
      type: "FIXED",
      name: "Private Markets",
      quantity: 1,
      buyPrice: 182.5,
      fixedCurrentValue: 182.5,
      priceSource: "fixed"
    }
  ]
};

// Expose configuration in browser context.
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}

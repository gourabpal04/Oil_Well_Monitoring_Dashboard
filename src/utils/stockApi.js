// Stock API utility for real-time stock prices
// This is a simulated API - in production, you would use real stock APIs like:
// - Alpha Vantage API
// - Yahoo Finance API
// - NSE/BSE official APIs

const ONGC_SYMBOLS = {
  BSE: 'ONGC.BO',
  NSE: 'ONGC.NS'
};

// Simulated base price for ONGC (as of recent data)
const BASE_PRICE = 245.01;

// Simulate realistic stock price movements
const simulatePriceChange = (basePrice) => {
  // Generate a small random change (typically ±2% for most stocks)
  const changePercent = (Math.random() - 0.5) * 0.04; // ±2%
  const change = basePrice * changePercent;
  const newPrice = basePrice + change;
  
  return {
    price: Math.round(newPrice * 100) / 100,
    change: Math.round(change * 100) / 100,
    changePercent: Math.round(changePercent * 10000) / 100 // 2 decimal places
  };
};

// Fetch stock prices (simulated)
export const fetchStockPrices = async () => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200));
    
    const bseData = simulatePriceChange(BASE_PRICE);
    const nseData = simulatePriceChange(BASE_PRICE);
    
    return {
      bse: {
        symbol: ONGC_SYMBOLS.BSE,
        price: bseData.price,
        change: bseData.change,
        changePercent: bseData.changePercent,
        lastUpdated: new Date().toISOString()
      },
      nse: {
        symbol: ONGC_SYMBOLS.NSE,
        price: nseData.price,
        change: nseData.change,
        changePercent: nseData.changePercent,
        lastUpdated: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error('Error fetching stock prices:', error);
    // Return fallback data
    return {
      bse: {
        symbol: ONGC_SYMBOLS.BSE,
        price: BASE_PRICE,
        change: 0,
        changePercent: 0,
        lastUpdated: new Date().toISOString()
      },
      nse: {
        symbol: ONGC_SYMBOLS.NSE,
        price: BASE_PRICE,
        change: 0,
        changePercent: 0,
        lastUpdated: new Date().toISOString()
      }
    };
  }
};

// Real stock API integration example (commented out for reference)
/*
export const fetchRealStockPrices = async () => {
  const API_KEY = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;
  const BASE_URL = 'https://www.alphavantage.co/query';
  
  try {
    const [bseResponse, nseResponse] = await Promise.all([
      fetch(`${BASE_URL}?function=GLOBAL_QUOTE&symbol=${ONGC_SYMBOLS.BSE}&apikey=${API_KEY}`),
      fetch(`${BASE_URL}?function=GLOBAL_QUOTE&symbol=${ONGC_SYMBOLS.NSE}&apikey=${API_KEY}`)
    ]);
    
    const bseData = await bseResponse.json();
    const nseData = await nseResponse.json();
    
    return {
      bse: {
        symbol: ONGC_SYMBOLS.BSE,
        price: parseFloat(bseData['Global Quote']['05. price']),
        change: parseFloat(bseData['Global Quote']['09. change']),
        changePercent: parseFloat(bseData['Global Quote']['10. change percent'].replace('%', '')),
        lastUpdated: new Date().toISOString()
      },
      nse: {
        symbol: ONGC_SYMBOLS.NSE,
        price: parseFloat(nseData['Global Quote']['05. price']),
        change: parseFloat(nseData['Global Quote']['09. change']),
        changePercent: parseFloat(nseData['Global Quote']['10. change percent'].replace('%', '')),
        lastUpdated: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error('Error fetching real stock prices:', error);
    throw error;
  }
};
*/ 
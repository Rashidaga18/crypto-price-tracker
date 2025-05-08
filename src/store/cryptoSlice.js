// src/store/cryptoSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial asset data
const initialAssets = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=023',
    price: 30000,
    percentChange1h: 0.2,
    percentChange24h: 1.5,
    percentChange7d: 5.7,
    marketCap: 570000000000,
    volume24h: 35000000000,
    circulatingSupply: 19000000,
    maxSupply: 21000000,
    chart7d: 'https://www.svgrepo.com/show/354435/line-chart.svg',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=023',
    price: 1900,
    percentChange1h: -0.1,
    percentChange24h: 3.8,
    percentChange7d: 10.2,
    marketCap: 220000000000,
    volume24h: 20000000000,
    circulatingSupply: 116000000,
    maxSupply: null,
    chart7d: 'https://www.svgrepo.com/show/354435/line-chart.svg',
  },
  {
    symbol: 'USDT',
    name: 'Tether',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=023',
    price: 1,
    percentChange1h: 0,
    percentChange24h: 0.02,
    percentChange7d: 0,
    marketCap: 62000000000,
    volume24h: 56000000000,
    circulatingSupply: 62000000000,
    maxSupply: null,
    chart7d: 'https://www.svgrepo.com/show/354435/line-chart.svg',
  },
  {
    symbol: 'BNB',
    name: 'Binance Coin',
    logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=023',
    price: 280,
    percentChange1h: 0.3,
    percentChange24h: 2.1,
    percentChange7d: 7.4,
    marketCap: 43000000000,
    volume24h: 1500000000,
    circulatingSupply: 154000000,
    maxSupply: 200000000,
    chart7d: 'https://www.svgrepo.com/show/354435/line-chart.svg',
  },
  {
    symbol: 'ADA',
    name: 'Cardano',
    logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png?v=023',
    price: 1.2,
    percentChange1h: -0.2,
    percentChange24h: 5.3,
    percentChange7d: 14.7,
    marketCap: 39000000000,
    volume24h: 3000000000,
    circulatingSupply: 32000000000,
    maxSupply: 45000000000,
    chart7d: 'https://www.svgrepo.com/show/354435/line-chart.svg',
  },
];

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: initialAssets,
  },
  reducers: {
    updateAsset: (state, action) => {
      const { symbol, price, percentChange1h, percentChange24h, percentChange7d, volume24h } = action.payload;
      const asset = state.assets.find((asset) => asset.symbol === symbol);
      if (asset) {
        asset.price = price;
        asset.percentChange1h = percentChange1h;
        asset.percentChange24h = percentChange24h;
        asset.percentChange7d = percentChange7d;
        asset.volume24h = volume24h;
      }
    },
  },
});

// Export the action to update asset
export const { updateAsset } = cryptoSlice.actions;

// Export the reducer to be used in the store
export default cryptoSlice.reducer;

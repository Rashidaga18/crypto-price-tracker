// src/components/CryptoTable.js
import React from 'react';
import { useSelector } from 'react-redux';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  return (
    <div className="table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.symbol}>
              <td>{index + 1}</td>
              <td><img src={asset.logo} alt={asset.name} width="30" /></td>
              <td>{asset.name}</td>
              <td>{asset.symbol}</td>
              <td>${asset.price.toLocaleString()}</td>
              <td style={{ color: asset.percentChange1h >= 0 ? 'green' : 'red' }}>
                {asset.percentChange1h.toFixed(2)}%
              </td>
              <td style={{ color: asset.percentChange24h >= 0 ? 'green' : 'red' }}>
                {asset.percentChange24h.toFixed(2)}%
              </td>
              <td style={{ color: asset.percentChange7d >= 0 ? 'green' : 'red' }}>
                {asset.percentChange7d.toFixed(2)}%
              </td>
              <td>${asset.marketCap.toLocaleString()}</td>
              <td>${asset.volume24h.toLocaleString()}</td>
              <td>{asset.circulatingSupply.toLocaleString()}</td>
              <td>{asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}</td>
              <td><img src={asset.chart7d} alt="7D chart" width="100" /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        .table-container {
          overflow-x: auto;
          margin: 20px 0;
        }
        .crypto-table {
          border-collapse: collapse;
          width: 100%;
          color: #fff;
          background-color: #1e1e1e;
          font-family: Arial, sans-serif;
        }
        th, td {
          padding: 10px;
          border: 1px solid #444;
          text-align: center;
          white-space: nowrap;
        }
        th {
          background-color: #333;
        }
        tr:nth-child(even) {
          background-color: #2a2a2a;
        }
        tr:hover {
          background-color: #3d3d3d;
        }
        @media (max-width: 600px) {
          .crypto-table {
            font-size: 12px;
          }
          th, td {
            padding: 5px;
          }
          img {
            width: 20px !important;
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CryptoTable;

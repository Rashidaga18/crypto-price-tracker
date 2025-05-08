# crypto-price-tracker
A simple and responsive web app built with React and Redux Toolkit that shows live updates for top cryptocurrencies. It displays price changes, market cap, volume, and a 7-day performance chart updated every few seconds to simulate real-time data.


## Quick Start

Getting the app running locally is pretty straightforward:

bash
 Clone this repo
git clone https://github.com/your-username/crypto-price-tracker.git

# Move into the project directory
cd crypto-price-tracker

# Install dependencies
npm install

# Fire up the development server
npm run dev


Then open your browser and navigate to `http://localhost:8080` to see the app in action.

## What's Inside

This project demonstrates real-time data updates with a clean, responsive UI. Here's what I used to build it:

### Tech Stack

- **React 18** - UI components and rendering
- **Redux Toolkit** - State management for all cryptocurrency data
- **TypeScript** - Type safety throughout the codebase
- **Tailwind CSS** - Utility-first styling approach
- **Recharts** - Simple line charts for price history
- **Vite** - Fast development and build tool

### Project Structure

```
src/
├── components/           # UI components
├── lib/
│   ├── data/            # Mock data generation
│   ├── services/        # WebSocket service simulation
│   ├── store/           # Redux store and slices
│   ├── types/           # TypeScript interfaces
│   └── utils.ts         # Helper functions
├── pages/               # Page components
└── App.tsx              # Main app component

```
### Features

- 🔄 Real-time price updates (simulated WebSocket)
- 📊 Sortable data columns
- 🎨 Visual indicators for price changes
- 📱 Fully responsive design
- 📈 7-day price charts

## How It Works

The app simulates WebSocket connections to fetch cryptocurrency data at regular intervals (every 0.5 seconds). All state is managed through Redux, with no local component state for the data.

When prices update, a brief highlight animation shows which values have changed, giving users immediate visual feedback.

The table allows sorting by any column, making it easy to track top performers or biggest market caps at a glance.

## Next Steps

Some things I'm planning to add:

- Filtering options
- Search functionality
- Light/dark theme toggle
- Real WebSocket integration with actual market data
- Persisting favorites to localStorage


# EV Charging Station Simulator

A React-based web application for simulating electric vehicle charging station behavior and power distribution.

## Demo

You can access the live demo of the application via the following link:

[EV Charging Simulation](https://ev-charging-simulation-six.vercel.app/)

## Features

- Dynamic simulation of multiple charging points
- Real-time power distribution calculation
- Interactive form inputs with validation:
  - Number of charge points (1-100)
  - Charging power per point (kW)
  - Arrival probability multiplier (20-200%)
  - Car consumption (kWh)
- Ability to have dynamic charge points with different charging power
- Total power management (maximum 220kW)
- Visual data representation

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Hook Form
- Recharts (for data visualization)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone git@github.com:HosseiniSanaz/ev-charging-simulation.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

- components
  - InputForm # Simulation parameter input form
  - SimulationResult # Simulation results display by charts
  - ui # Reusable UI components
- types # General types definitions
- utils # Utility functions
- hooks # Hooks like useMockData
- constants # Define static values



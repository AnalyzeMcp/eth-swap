# Ethereum Token Swap Platform

A fast and secure Ethereum token swap platform supporting multiple wallets, built with Next.js and Ethereum Web3.

## Features

- Multi-wallet support (MetaMask, WalletConnect, Coinbase Wallet)
- Secure token swaps with price impact warnings
- Real-time price updates
- Transaction history tracking
- Responsive UI for all devices

## Tech Stack

- Frontend: Next.js, React, TypeScript
- Blockchain: Ethereum Web3.js, ethers.js
- Styling: Tailwind CSS
- Testing: Jest, React Testing Library

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- Ethereum wallet (MetaMask recommended)

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-repo/eth-swap.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Configure environment variables
Create a `.env.local` file with:
```
NEXT_PUBLIC_INFURA_ID=your_infura_id
NEXT_PUBLIC_ALCHEMY_ID=your_alchemy_id
```

4. Run development server
```bash
npm run dev
# or
yarn dev
```

## Usage

1. Connect your wallet
2. Select tokens to swap
3. Review swap details
4. Confirm transaction

## Security Features

- Smart contract audits
- Price impact warnings
- Slippage tolerance settings
- Transaction preview

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

[MIT](https://choosealicense.com/licenses/mit/)
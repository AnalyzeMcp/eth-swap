# Components Directory

This directory contains reusable React components for the ETH Swap application.

## Available Components

### TokenSelect
A dropdown component for selecting tokens in swap operations.

**Props:**
- `tokens`: Array of Token objects
- `selectedToken`: Currently selected token symbol
- `onTokenChange`: Callback when token selection changes

**Usage:**
```tsx
import TokenSelect from './TokenSelect';

<TokenSelect 
  tokens={tokens} 
  selectedToken={selectedToken} 
  onTokenChange={handleTokenChange} 
/>
```

## Adding New Components
1. Create new component file with .tsx extension
2. Follow TypeScript and React best practices
3. Add PropTypes or TypeScript interfaces
4. Include Storybook stories if applicable
5. Add component documentation in this file
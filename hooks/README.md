# Hooks Directory

This directory contains custom React hooks for the ETH Swap application.

## Available Hooks

### useTokens
Hook for fetching and managing token data.

**Returns:**
- `tokens`: Array of Token objects
- `loading`: Boolean indicating loading state
- `error`: Error message if fetch fails

**Usage:**
```tsx
import useTokens from './useTokens';

const { tokens, loading, error } = useTokens();
```

## Adding New Hooks
1. Create new hook file with .ts extension
2. Follow React hooks best practices
3. Include proper TypeScript types
4. Add hook documentation in this file
5. Consider adding unit tests for complex hooks
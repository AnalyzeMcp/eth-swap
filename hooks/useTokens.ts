import { useState, useEffect } from 'react';
import { Token } from '../lib/types';

export default function useTokens() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        // TODO: Replace with actual token fetch logic
        const mockTokens: Token[] = [
          { symbol: 'ETH', name: 'Ethereum', decimals: 18 },
          { symbol: 'USDC', name: 'USD Coin', decimals: 6 },
          { symbol: 'DAI', name: 'Dai Stablecoin', decimals: 18 }
        ];
        setTokens(mockTokens);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tokens');
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);

  return { tokens, loading, error };
}
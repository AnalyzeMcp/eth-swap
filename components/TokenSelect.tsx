import { Token } from '../lib/types';

interface TokenSelectProps {
  tokens: Token[];
  selectedToken: string;
  onTokenChange: (token: string) => void;
}

export default function TokenSelect({ 
  tokens, 
  selectedToken, 
  onTokenChange 
}: TokenSelectProps) {
  return (
    <select
      value={selectedToken}
      onChange={(e) => onTokenChange(e.target.value)}
      className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    >
      {tokens.map((token) => (
        <option key={token.symbol} value={token.symbol}>
          {token.symbol}
        </option>
      ))}
    </select>
  );
}
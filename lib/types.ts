export interface Token {
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
}

export interface SwapParams {
  fromToken: string;
  toToken: string;
  amount: string;
  slippage?: number;
  deadline?: number;
}

export interface Quote {
  fromToken: Token;
  toToken: Token;
  fromTokenAmount: string;
  toTokenAmount: string;
  estimatedGas?: string;
}
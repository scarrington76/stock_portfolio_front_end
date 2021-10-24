export interface Stock {
  last_tx?: number;
  price: number;
  ticker: string;
  name?: string;
  daily_change?: number;
  pl_dollar?: number;
  cost_basis?: number;
  position?: number;
  mkt_value?: number;
  yield?: number;
  pl_pct?: number;
  real_pct?: number;
  real_dollar?: number;
}

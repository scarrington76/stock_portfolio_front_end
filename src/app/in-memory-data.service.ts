import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stocks = [
      { ticker: 'AAPL', name: 'Apple Inc', pl_dollar: 5.32},
      { ticker: 'NOBL', name: 'ProShares S&P 500 Dividend Aristocrats ETF'},
      { ticker: 'RGA', name: 'Reinsurance Group of America Inc'},
      { ticker: 'IPOS', name: 'Renaissance International IPO ETF'},
      { ticker: 'CURI',  name: 'Curiositystream Inc'},
      { ticker: 'EPD', name:  'Enterprise Products Partners L.P.'},
      { ticker: 'FHN', name:  'First Horizon Corp'},
      { ticker: 'MFC', name:  'Manulife Financial Corporation'},
      { ticker: 'VNM', name:  'VanEck Vectors Vietnam Etf'},
      { ticker: 'KBH', name:  'KB Home'},
      { ticker: 'KL', name:  'Kirkland Lake Gold Ltd'},
      { ticker: 'FRT', name:  'Federal Realty Investment Trust'},
      { ticker: 'EVR', name:  'Evercore Inc'},
      { ticker: 'UAL', name:  'United Airlines Holdings Inc'},
      { ticker: 'MDT', name:  'Medtronic PLC'},
      { ticker: 'TGT', name:  'Target Corporation'},
      { ticker: 'SPY', name:  'SPDR S&P 500 ETF Trust'},
      { ticker: 'GWW', name:  'W W Grainger Inc'},
      { ticker: 'XXX', name: 'Trial'}
    ];
    return {stocks};
  }

  // Overrides the genId method to ensure that a stock always has an id.
  // If the stocks array is empty,
  // the method below returns the initial number (11).
  // if the stocks array is not empty, the method below returns the highest
  // stock id + 1.
  genId(stocks: Stock[]): string {
    return 'ZZZ';
  }
}
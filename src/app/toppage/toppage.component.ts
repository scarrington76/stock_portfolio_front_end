import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../stock';

@Component({
  selector: 'app-toppage',
  templateUrl: './toppage.component.html',
  styleUrls: ['./toppage.component.css']
})
export class TopPageComponent {
  @Input() stocks!: Stock[];
  cols: { field: string; header: string; }[] = [];

  // cols: any[];

  constructor() {
  }

  ngOnInit() {
    this.cols = [
      { field: 'ticker', header: 'Ticker' },
      { field: 'price', header: 'Price' },
      { field: 'name', header: 'Name' },
      { field: 'daily_change', header: 'Change' },
      { field: 'pl_dollar', header: 'P&L $$' },
      { field: 'cost_basis', header: 'Cost Basis' },
      { field: 'position', header: 'Mkt Position' },
      { field: 'mkt_value', header: 'Mkt Value' },
      { field: 'yield', header: 'Div Yield' },
      { field: 'pl_pct', header: 'P&L %' },
      { field: 'real_pct', header: 'Realized %' },
      { field: 'real_dollar', header: 'Realized $$' },
      { field: 'last_tx', header: 'Last Transaction Date' },
    ];
  }
}
import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { Table, TableModule } from 'primeng/table';

@Component({
  selector: 'app-toppage',
  templateUrl: './toppage.component.html',
  styleUrls: ['./toppage.component.css']
})
export class TopPageComponent implements OnInit {
  stocks: Stock[] = [];

  cols: any[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.getStocks();

    this.cols = [
      { field: 'ticker', header: 'Ticker' },
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

  getStocks(): void {
    this.stockService.getStocks().subscribe(data =>
      this.stocks = data
    );
  }
}
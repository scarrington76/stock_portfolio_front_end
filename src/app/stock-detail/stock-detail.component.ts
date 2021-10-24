import { Component, Input, OnInit, Output } from '@angular/core';
import { Stock } from '../stock';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  stocks: any;

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks(): void {
    this.stockService.getStocks().subscribe(data =>
      this.stocks = data
    )
  }
  
  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   if (this.stock) {
  //     this.stockService.updateStock(this.stock)
  //       .subscribe(() => this.goBack());
  //   }
  // }

}

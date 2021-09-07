import { Component, Input, OnInit } from '@angular/core';
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
  @Input() stock?: Stock;

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStock();
  }

  getStock(): void {
    const ticker = String(this.route.snapshot.paramMap.get('ticker'));
    this.stockService.getStock(ticker).subscribe(stock =>
      this.stock = stock
    )
  }
  
  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.stock) {
      this.stockService.updateStock(this.stock)
        .subscribe(() => this.goBack());
    }
  }

}

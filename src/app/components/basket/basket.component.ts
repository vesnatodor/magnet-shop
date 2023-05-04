import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { IProduct } from '../../models/product.inteface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  orderAmount: number=0;
  productsList: IProduct[] = [];
  add_amount: any;

  constructor(private basketService: BasketService,
              private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.productsList = this.basketService.getProductsList();
    this.add_amount =this.orderService.add_amount();
    this.calculateTotalAmount();
  }

  deleteProductFromCart(productId: number) {
    this.basketService.removeProduct(productId);
    this.productsList = this.basketService.getProductsList();
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    this.orderAmount = 0;

    this.productsList.forEach(p => this.orderAmount += p.quantity * p.price);
  }
  
}

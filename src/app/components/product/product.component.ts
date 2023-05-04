import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product.inteface';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  product: IProduct = {
    id:0,
    image:'',
    title:'',
    price:0,
    basket:'',
   quantity: 0
  };
  
    @Input() id:number=0;
    @Input() image:string='';
    @Input() title: string='';
    @Input () price: number=0;
    @Input() basket: string='';

    constructor(private basketService: BasketService) {}

   



    addToCart() {
      this.product.id = this.id;
      this.product.image = this.image;
      this.product.title = this.title;
      this.product.price = this.price;
      this.product.basket = this.basket;

      this.basketService.addProduct(this.product);
    }
}


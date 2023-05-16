import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/product.inteface';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
  product: IProduct | undefined = {
    id:0,
    image:'',
    title:'',
    price:0,
    basket:'',
   quantity: 0
  };
  constructor (private _productsService: ProductsService,
        private _route: ActivatedRoute,
        private basketService: BasketService) {}

  ngOnInit():void{
    this._productsService.getProducts().subscribe((data: IProduct[])=> { 
     this.product = data.find((el)=> el.id === +this._route.snapshot.params['id']);
   
    });

  }

  addToCart() {
    this.basketService.addProduct(this.product!);
  }
}

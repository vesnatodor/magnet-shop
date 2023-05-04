import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/product.inteface';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  products: IProduct[]=[];

  constructor(private _productsService: ProductsService){}
  ngOnInit(): void{
    this._productsService.getProducts().subscribe((data)=>{
    this.products = data;


    })
    
    
    ;
  }
  
}

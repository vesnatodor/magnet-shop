import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../models/product.inteface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  productsList: IProduct[] = [];
  productsListSubject: Subject<IProduct[]> = new Subject();

  constructor(private storageService: StorageService) {
    this.productsList = storageService.getBasket();
    this.productsListSubject.next(this.productsList);
   }

   addProduct(product: IProduct) 
   {
    const productInList = this.productsList.find(p => p.id === product.id);
    if (productInList) {
      productInList.quantity++;
    } else {
      product.quantity = 1;
      this.productsList = [...this.productsList, product];
    }

    this.productsListSubject.next(this.productsList);
    this.storageService.saveBasket(this.productsList);
   }

   removeProduct(productId: number) {
    this.productsList = this.productsList.filter(p => p.id !== productId);
    this.productsListSubject.next(this.productsList);
    this.storageService.saveBasket(this.productsList);
   }

   getProductsInCartSubject() {
    return this.productsListSubject;
   }

   getProductsList() {
    return this.productsList;
   }

   clearProductsList() {
    this.productsList = [];
    this.productsListSubject.next(this.productsList);
   }
}

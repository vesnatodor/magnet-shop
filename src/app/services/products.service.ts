import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.inteface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http:HttpClient ) { }

  
   getProducts(): Observable <IProduct[]> {
    return this.http.get<IProduct[]>('assets/data/products.json');
      
     }
      
    }


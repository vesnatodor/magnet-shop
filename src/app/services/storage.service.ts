

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.inteface';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../models/product.inteface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  loggedUser: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({ user: '',pass: '',}); 
  
  constructor(private apiService: ApiService ) { 
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username && password){
      this.loggedUser.next({user: username, pass: password});
    }
  }

  login(username: string, password:string) {
    this.apiService.getUsers().subscribe( (_users: IUser[]) => {
      const user= _users.find(u=>u.user===username && u.pass===password)
      if (user){
       localStorage.setItem('username',user.user);
       localStorage.setItem('password',user.pass);

       this.loggedUser.next({user: user.user, pass: user.pass});
      }
    
      else
      alert('Wrong username or password!');
       
      });
      
      
    };

    logout() {
      localStorage.clear();
      this.loggedUser.next({pass: '', user: ''});
    }
    

    getUserLoggedIn() {
      return this.loggedUser;
    }

    saveBasket(basket: IProduct[]) {
      localStorage.setItem('basket', JSON.stringify(basket));
    }

    getBasket(): IProduct[] {
      const jsonProducts = localStorage.getItem('basket');

      if (!jsonProducts) {
        return [];
      }

      return JSON.parse(jsonProducts);
    }
  }

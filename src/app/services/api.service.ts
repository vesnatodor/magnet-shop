import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user.inteface';
import { IData } from '../models/data.inteface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

   }

   getUsers(){
    return  this.http.get<IUser[]>('assets/data/users.json');
  }

  getData(){
    return  this.http.get<IData>('assets/data/data.json');
  }
}

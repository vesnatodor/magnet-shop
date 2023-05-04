import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { IUser } from '../../models/user.inteface';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})

export class MyAccountComponent {

  constructor(private storageService: StorageService, private router: Router){

  }

  username='';
  password='';

  login() {
    this.storageService.login(this.username, this.password);
    this.router.navigateByUrl('/home_page');

  }
 
}

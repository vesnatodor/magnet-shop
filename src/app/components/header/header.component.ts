import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
isLoggIn=false;
numbera: number=0;
menuShown = true;


constructor(private storageService: StorageService,
  private basketService: BasketService){
  }

  ngOnInit(): void {
    this.storageService.getUserLoggedIn().subscribe(user => {
      if (user.user === '') {
        this.isLoggIn = false;
      } else {
        this.isLoggIn = true;
      }
    });

    this.numbera = this.basketService.getProductsList().length;
    this.basketService.getProductsInCartSubject().subscribe(products => {
      this.numbera = products.length;
    });
  }

logout(){
  this.storageService.logout();
  this.basketService.clearProductsList();
}

toggleMenu() {
  this.menuShown = !this.menuShown;
}


}


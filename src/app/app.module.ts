import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { route } from './routes';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BlogComponent } from './components/blog/blog.component';
import { MagneticTherapyComponent } from './components/magnetic-therapy/magnetic-therapy.component';
import { FormsModule } from '@angular/forms';
import { BasketComponent } from './components/basket/basket.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ProductComponent,
    HeaderComponent,
    SingleProductComponent,
    MyAccountComponent,
    HomePageComponent,
    BlogComponent,
    MagneticTherapyComponent,
    BasketComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

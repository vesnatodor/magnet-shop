import { Routes } from "@angular/router";
import { ShopComponent } from "./components/shop/shop.component";
import { SingleProductComponent } from "./components/single-product/single-product.component";
import { MyAccountComponent } from "./components/my-account/my-account.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { BlogComponent } from "./components/blog/blog.component";
import { MagneticTherapyComponent } from "./components/magnetic-therapy/magnetic-therapy.component";
import { BasketComponent } from "./components/basket/basket.component";
import { OrderComponent } from "./components/order/order.component";


export const route:Routes= [
          {
                    path: '',
                    pathMatch:'full',
                    redirectTo: '/home_page'
          },
          {    
                    path:'shop',
                    component:ShopComponent
                   
          },
          {    
                    path:'product/:id',
                    component:SingleProductComponent
                    
          },
          {
                    path:'my_account',
                    component:MyAccountComponent
          },
          {         
                    path:'home_page',
                    component:HomePageComponent

          },
          {
                    path:'blog',
                    component:BlogComponent

           },
           {       
                    path: 'magnetic_therapy',
                    component:MagneticTherapyComponent

           },
           {
                    path: 'basket',
                    component: BasketComponent,
                                                 
                            
           },

          {
                     path: 'order',
                     component: OrderComponent
           },

          
          {
                    path: '**',
                    component:ShopComponent
          }
          
]
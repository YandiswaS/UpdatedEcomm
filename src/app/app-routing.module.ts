import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductService } from './product.service';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'cart',component:CartComponent},
  {path: 'product/:id', component:FoodDetailsComponent},
  {path:'form', component:FormComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

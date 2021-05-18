import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { SalesComponent } from './pages/sales/sales.component';
import { MenuCustomerComponent } from './sidebar/menu-customer/menu-customer.component';
import { MenuHomeComponent } from './sidebar/menu-home/menu-home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customer', component: CustomersComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'sale', component: SalesComponent },
  { path: 'home', component: MenuHomeComponent, outlet: 'sideMenu' },
  { path: 'customer', component: MenuCustomerComponent, outlet: 'sideMenu' },
  { path: '', redirectTo: '/home(sideMenu:home)', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

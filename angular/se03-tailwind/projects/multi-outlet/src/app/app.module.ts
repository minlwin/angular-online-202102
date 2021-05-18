import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHomeComponent } from './sidebar/menu-home/menu-home.component';
import { MenuCustomerComponent } from './sidebar/menu-customer/menu-customer.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProductsComponent } from './pages/products/products.component';
import { SalesComponent } from './pages/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuHomeComponent,
    MenuCustomerComponent,
    HomeComponent,
    CustomersComponent,
    ProductsComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

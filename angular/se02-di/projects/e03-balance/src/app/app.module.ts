import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BalanceEditComponent } from './balance-edit/balance-edit.component';
import { BalanceDetailsComponent } from './balance-details/balance-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditComponent } from './categories/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BalanceEditComponent,
    BalanceDetailsComponent,
    CategoriesComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

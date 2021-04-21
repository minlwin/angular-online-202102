import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceDetailsComponent } from './balance-details/balance-details.component';
import { BalanceEditComponent } from './balance-edit/balance-edit.component';
import { BalanceListComponent } from './balance-list/balance-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditComponent } from './categories/edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NavBar } from './widgets/nav-bar/nav-bar';
import { SearchBar } from './widgets/search-bar/search-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BalanceEditComponent,
    BalanceDetailsComponent,
    CategoriesComponent,
    EditComponent,
    BalanceListComponent,
    NavBar, SearchBar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

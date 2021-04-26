import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, STORAGE_SERVICES } from './app.component';
import { BalanceService } from './models/balance.service';
import { CategoryService } from './models/category.service';
import { IdGenerator } from './models/id.generator';
import { BalanceDetailsComponent } from './views/balance-details/balance-details.component';
import { BalanceEditComponent } from './views/balance-edit/balance-edit.component';
import { BalanceListComponent } from './views/balance-list/balance-list.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { EditComponent } from './views/categories/edit/edit.component';
import { HomeComponent } from './views/home/home.component';
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
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: STORAGE_SERVICES, useExisting: IdGenerator, multi: true },
    { provide: STORAGE_SERVICES, useExisting: CategoryService, multi: true },
    { provide: STORAGE_SERVICES, useExisting: BalanceService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

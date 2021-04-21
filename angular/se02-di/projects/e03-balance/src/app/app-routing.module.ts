import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceDetailsComponent } from './balance-details/balance-details.component';
import { BalanceEditComponent } from './balance-edit/balance-edit.component';
import { BalanceListComponent } from './balance-list/balance-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'balance/:type', children: [
      { path: ':id/details', component: BalanceDetailsComponent },
      { path: ':id', component: BalanceEditComponent },
      { path: '', component: BalanceListComponent }
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoriesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

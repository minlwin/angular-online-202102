import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceDetailsComponent } from './views/balance-details/balance-details.component';
import { BalanceEditComponent } from './views/balance-edit/balance-edit.component';
import { BalanceListComponent } from './views/balance-list/balance-list.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { HomeComponent } from './views/home/home.component';

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

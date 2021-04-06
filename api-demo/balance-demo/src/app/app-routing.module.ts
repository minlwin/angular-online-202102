import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './balance/details/details.component';
import { EditComponent } from './balance/edit/edit.component';
import { ListComponent } from './balance/list/list.component';
import { SummaryComponent } from './balance/summary/summary.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  {
    path: 'balance', children: [
      { path: 'summary', component: SummaryComponent },
      { path: 'list/:type', component: ListComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'list/:type/:id', component: EditComponent },
    ]
  },
  { path: '', redirectTo: '/balance/summary', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

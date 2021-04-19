import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { ProvideClassComponent } from './provide-class/provide-class.component';

const routes: Routes = [
  { path: 'simple', component: ProvideClassComponent },
  { path: 'list', component: ListViewComponent },
  { path: '', redirectTo: '/simple', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

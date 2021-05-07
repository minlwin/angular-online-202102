import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { masterRoutes } from './master/master.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  { path: 'simple', component: SimpleComponent },
  {
    path: 'master', children: masterRoutes
  },
  { path: '', redirectTo: '/simple', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

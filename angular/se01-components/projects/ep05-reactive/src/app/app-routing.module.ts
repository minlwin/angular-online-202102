import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { ValidationsComponent } from './validations/validations.component';

const routes: Routes = [
  { path: "", component: SimpleComponent },
  { path: "validations", component: ValidationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

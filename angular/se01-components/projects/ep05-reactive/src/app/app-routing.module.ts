import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { ValidationsComponent } from './validations/validations.component';
import { ValueChangesComponent } from './value-changes/value-changes.component';

const routes: Routes = [
  { path: "", component: SimpleComponent },
  { path: "validations", component: ValidationsComponent },
  { path: "changes", component: ValueChangesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

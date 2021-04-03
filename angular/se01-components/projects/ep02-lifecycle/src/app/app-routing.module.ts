import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLifecycleComponent } from './all-lifecycle/all-lifecycle.component';
import { OnChangeComponent } from './on-change/on-change.component';

const routes: Routes = [
  { path: "", component: AllLifecycleComponent },
  { path: "on-change", component: OnChangeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictsComponent } from './districts/districts.component';
import { StatesComponent } from './states/states.component';
import { TownshipsComponent } from './townships/townships.component';

const routes: Routes = [
  { path: "state", component: StatesComponent },
  { path: "district", component: DistrictsComponent },
  { path: "township", component: TownshipsComponent },
  { path: "", redirectTo: "/state", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

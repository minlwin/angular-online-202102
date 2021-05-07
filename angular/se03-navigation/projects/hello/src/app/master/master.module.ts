import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { MemberComponent } from './member/member.component';
import { ProductComponent } from './product/product.component';


export const masterRoutes: Routes = [
  { path: 'member', component: MemberComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product', component: ProductComponent },
  { path: '', redirectTo: 'member', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    MemberComponent,
    CategoryComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(masterRoutes)
  ],
  exports: [
    MemberComponent,
    CategoryComponent,
    ProductComponent,
    RouterModule
  ]
})
export class MasterModule { }

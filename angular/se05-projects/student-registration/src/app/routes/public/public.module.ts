import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecurityModule } from 'src/app/domains/security/security.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';



@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    SecurityModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }

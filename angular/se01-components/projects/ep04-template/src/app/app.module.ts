import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { StudentModel } from './simple/student.model';
import { PhoneValidatorDirective } from './simple/phone-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    PhoneValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StudentModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

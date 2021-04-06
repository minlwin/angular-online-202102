import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { AppCommonModule } from './app-common/app-common.module';
import { ValidationsComponent } from './validations/validations.component';
import { ValueChangesComponent } from './value-changes/value-changes.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ValidationsComponent,
    ValueChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

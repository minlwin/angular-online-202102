import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictsComponent } from './districts/districts.component';
import { StatesComponent } from './states/states.component';
import { TownshipsComponent } from './townships/townships.component';

@NgModule({
  declarations: [
    AppComponent,
    StatesComponent,
    DistrictsComponent,
    TownshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

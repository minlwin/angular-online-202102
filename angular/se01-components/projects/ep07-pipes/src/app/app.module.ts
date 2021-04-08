import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyanmarKyatPipe } from './pipes/myanmar-kyat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyanmarKyatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

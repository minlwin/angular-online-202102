import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaysPipe } from './commons/commons/pipes/days.pipe';
import { ApiClientInterceptor } from './commons/services/client/api-interceptor';
import { SecurityInterceptor } from './domains/security/services/security.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DaysPipe,
    { provide: HTTP_INTERCEPTORS, useClass: ApiClientInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useExisting: SecurityInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

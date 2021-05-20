import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterModule } from './modules/master/master.module';
import { HomeComponent } from './views/home/home.component';
import { SettingsComponent } from './views/settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

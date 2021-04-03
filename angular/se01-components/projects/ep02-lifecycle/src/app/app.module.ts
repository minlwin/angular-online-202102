import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllLifecycleComponent } from './all-lifecycle/all-lifecycle.component';
import { ChildComponent } from './all-lifecycle/child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnChangeComponent } from './on-change/on-change.component';


@NgModule({
  declarations: [
    AppComponent,
    AllLifecycleComponent,
    OnChangeComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

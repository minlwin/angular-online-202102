import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { ErrorMesssageDirective } from './custom-directive/error-message';
import { HightLighDirective } from './custom-directive/hight-light.directive';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    IfDemoComponent,
    SwitchDemoComponent,
    ForDemoComponent,
    CustomDirectiveComponent,
    HightLighDirective,
    ErrorMesssageDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'if-demo', component: IfDemoComponent },
      { path: 'switch-demo', component: SwitchDemoComponent },
      { path: 'for-demo', component: ForDemoComponent },
      { path: 'custom', component: CustomDirectiveComponent },
      { path: '', redirectTo: '\if-demo', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

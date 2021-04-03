import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributesComponent } from './attributes/attributes.component';
import { EventsComponent } from './events/events.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BackgroundColorDirective } from './properties/background-color.directive';
import { PropBindingChild } from './properties/prop-binding-child';
import { PropertiesComponent } from './properties/properties.component';
import { ChildInputComponent } from './two-way/child-input/child-input.component';
import { TwoWayComponent } from './two-way/two-way.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertiesComponent,
    PropBindingChild,
    BackgroundColorDirective,
    AttributesComponent,
    EventsComponent,
    TwoWayComponent,
    ChildInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

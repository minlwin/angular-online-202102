import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MemberDetailsComponent } from './hello/member-details/member-details.component';
import { MemberEditComponent } from './hello/member-edit/member-edit.component';

const routes: Routes = [
  { path: 'hello/:id/details', component: MemberDetailsComponent },
  { path: 'hello/:id', component: MemberEditComponent },
  { path: 'hello', component: HelloComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MemberEditComponent,
    MemberDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

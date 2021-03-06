import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HelloComponent } from './hello/hello.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PathComponent } from './hello/path/path.component';
import { QueryComponent } from './hello/query/query.component';
import { MatrixComponent } from './hello/matrix/matrix.component';
import { ResolveFormComponent } from './resolve/resolve-form/resolve-form.component';
import { ResolveToComponent } from './resolve/resolve-to/resolve-to.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HelloComponent,
    NotFoundComponent,
    PathComponent,
    QueryComponent,
    MatrixComponent,
    ResolveFormComponent,
    ResolveToComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

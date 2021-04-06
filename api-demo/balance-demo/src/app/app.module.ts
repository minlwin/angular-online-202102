import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './balance/details/details.component';
import { EditComponent } from './balance/edit/edit.component';
import { ListComponent } from './balance/list/list.component';
import { SummaryComponent } from './balance/summary/summary.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryComponent } from './category/category.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ListComponent,
    SummaryComponent,
    DetailsComponent,
    EditComponent,
    CategoryEditComponent,
    SearchBarComponent
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

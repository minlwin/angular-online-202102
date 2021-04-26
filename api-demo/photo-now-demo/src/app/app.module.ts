import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './widgets/top-menu/top-menu.component';
import { SideBarComponent } from './widgets/side-bar/side-bar.component';
import { PostsComponent } from './views/posts/posts.component';
import { PostEditComponent } from './views/post-edit/post-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideBarComponent,
    PostsComponent,
    PostEditComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

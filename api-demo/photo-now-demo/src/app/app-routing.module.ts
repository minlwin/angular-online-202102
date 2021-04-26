import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEditComponent } from './views/post-edit/post-edit.component';
import { PostsComponent } from './views/posts/posts.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'edit/:id', component: PostEditComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

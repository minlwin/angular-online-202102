import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherGuard } from './domains/security/guards/teacher.guard';

const routes: Routes = [
  { path: 'public', loadChildren: () => import('./routes/public/public.module').then(m => m.PublicModule) },
  {
    path: 'teacher',
    canActivate: [TeacherGuard],
    canActivateChild: [TeacherGuard],
    loadChildren: () => import('./routes/teacher/teacher.module').then(m => m.TeacherModule)
  },
  { path: 'student', loadChildren: () => import('./routes/student/student.module').then(m => m.StudentModule) },
  { path: '', redirectTo: '/public', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

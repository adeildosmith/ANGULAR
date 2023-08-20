import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { TeacherListComponent } from './pages/teacher/teacher-list/teacher-list.component';
import { TeacherFormComponent } from './pages/teacher/teacher-form/teacher-form.component';

const routes: Routes = [
  {
    path:'',
    //loadChildren: () => import('./pages/user/user.module').then((module) => module.UserModule),
children:[
  {
  path: 'users',
  component: UserListComponent,
  loadChildren: () => import('./pages/user/user.module').then((module) => module.UserModule)
},
{

  path: 'addUser',
  component: UserFormComponent
},
{
  path: 'teachers',
  component: TeacherListComponent,
  loadChildren:() => import('./pages/teacher/teacher.module').then((module) => module.TeacherModule)
},
{
  path: 'addTeacher',
  component: TeacherFormComponent
}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

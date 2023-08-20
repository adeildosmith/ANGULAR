import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EvaluationListComponent } from './pages/evaluation/evaluation.list/evaluation.list.component';
import { EvaluationFormComponent } from './pages/evaluation/evaluation.form/evaluation.form.component';
import { TeacherListComponent } from './pages/teacher/teacher-list/teacher-list.component';
import { TeacherFormComponent } from './pages/teacher/teacher-form/teacher-form.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { DescomplicaComponent } from './descomplica/descomplica.component';

@NgModule({
  declarations: [
    AppComponent,
    EvaluationListComponent,
    EvaluationFormComponent,
    TeacherListComponent,
    TeacherFormComponent,
    UserListComponent,
    UserFormComponent,
    DescomplicaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

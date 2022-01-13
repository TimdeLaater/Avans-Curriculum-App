import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ModuleChooseComponent } from './module-choose/module-choose.component';
import { RegisterComponent } from './register/register.component';
import { StudyplanListComponent } from './studyplan/studyplan-list/studyplan-list.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users/:userId/studyplans', component: StudyplanListComponent },
      { path: 'subjects/:subjectId', component: SubjectDetailComponent },
      { path: 'module/setup', component: ModuleChooseComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

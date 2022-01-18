import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AnonymouslayoutComponent } from './anonymouslayout/anonymouslayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LoggedInAuthGuard } from './logged-in-auth.guard';
import { LoginComponent } from './login/login.component';
import { ModuleChooseComponent } from './module-choose/module-choose.component';
import { RegisterComponent } from './register/register.component';
import { StudyplanListComponent } from './studyplan/studyplan-list/studyplan-list.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, canActivate: [ LoggedInAuthGuard ],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users/:userId/studyplans', component: StudyplanListComponent },
      { path: 'subjects/:subjectId', component: SubjectDetailComponent },
      { path: 'module/setup', component: ModuleChooseComponent}
    ],
  },
  {
    path: '',
    component: AnonymouslayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

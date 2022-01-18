import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { StudyplanListComponent } from './studyplan/studyplan-list/studyplan-list.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { ModuleChooseComponent } from './module-choose/module-choose.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { FuzzySearchComponent } from './fuzzy-search/fuzzy-search.component';
import { AnonymouslayoutComponent } from './anonymouslayout/anonymouslayout.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, NavbarComponent, LayoutComponent, RegisterComponent, StudyplanListComponent, SubjectDetailComponent, ModuleChooseComponent, AnonymouslayoutComponent, FuzzySearchComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgbModule, DragDropModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

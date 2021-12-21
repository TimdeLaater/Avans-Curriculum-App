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
import { VoortgangComponent } from './voortgang/voortgang.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { StudieplanComponent } from './studieplan/studieplan.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, NavbarComponent, LayoutComponent, RegisterComponent, VoortgangComponent, CurriculumComponent, StudieplanComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

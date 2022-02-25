import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddEmployeeComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatRadioModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

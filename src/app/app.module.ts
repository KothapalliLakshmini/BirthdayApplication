

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomePageComponent } from './home-page/home-page.component';
import { BirthdaypageComponent } from './birthdaypage/birthdaypage.component';
import { PhotospageComponent } from './photospage/photospage.component';
import { VideospageComponent } from './videospage/videospage.component';
import { SurprisepageComponent } from './surprisepage/surprisepage.component';

@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule,BrowserAnimationsModule,MatIconModule,MatButtonModule,RouterModule.forRoot(routes)],
  declarations: [ AppComponent,HomePageComponent,BirthdaypageComponent,PhotospageComponent,VideospageComponent,SurprisepageComponent],
  providers:[],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
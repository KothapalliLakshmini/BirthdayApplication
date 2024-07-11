import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import { AppComponent } from './app.component';
import { BirthdaypageComponent } from './birthdaypage/birthdaypage.component';
import { MypageComponent } from './mypage/mypage.component';
import { PhotospageComponent } from './photospage/photospage.component';
import { VideospageComponent } from './videospage/videospage.component';
import { SurprisepageComponent } from './surprisepage/surprisepage.component';
 export const routes: Routes = [
    { path: '', redirectTo: 'birthday', pathMatch: 'full' },
    { path: 'birthday', component: BirthdaypageComponent},
    { path: 'home', component: HomePageComponent},
    { path: 'mypage', component: MypageComponent},
    { path: 'photos', component: PhotospageComponent},
    { path: 'videos', component: VideospageComponent},
    { path: 'surprise', component: SurprisepageComponent},

    
  ];
  
  
export class AppRoutingModule { }

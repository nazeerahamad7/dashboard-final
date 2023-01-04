import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MediaComponent } from './media/media.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PlatformComponent } from './platform/platform.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'media',component:MediaComponent},
  {path:'ourteam',component:OurteamComponent},
  {path:'resource',component:ResourcesComponent},
  {path:'platform',component:PlatformComponent},
  {path:'createaccount',component:CreateaccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

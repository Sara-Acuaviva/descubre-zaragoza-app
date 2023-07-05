import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/main/components/pages/home/home.component';
import { MapComponent } from './modules/main/components/pages/map/map.component';
import { PointOfInterestComponent } from './modules/main/components/pages/point-of-interest/point-of-interest.component';
import { LoginComponent } from './modules/main/components/pages/auth/login/login.component';
import { AuthComponent } from './modules/main/components/pages/auth/auth.component';
import { RegisterComponent } from './modules/main/components/pages/auth/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent, 
  },
  {
    path: 'map',
    component: MapComponent, 
  },
  {
    path: 'pois',
    component: PointOfInterestComponent, 
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      }
    ]    
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

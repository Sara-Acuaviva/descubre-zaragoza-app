import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/main/components/pages/home/home.component';
import { MapComponent } from './modules/main/components/pages/map/map.component';

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

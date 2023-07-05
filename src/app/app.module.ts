import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/main/components/layout/header/header.component';
import { FooterComponent } from './modules/main/components/layout/footer/footer.component';
import { HomeComponent } from './modules/main/components/pages/home/home.component';
import { MapComponent } from './modules/main/components/pages/map/map.component';
import { SharedModule } from './modules/shared/shared.module';
import { PointOfInterestComponent } from './modules/main/components/pages/point-of-interest/point-of-interest.component';
import { LoginComponent } from './modules/main/components/pages/auth/login/login.component';
import { AuthComponent } from './modules/main/components/pages/auth/auth.component';
import { RegisterComponent } from './modules/main/components/pages/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MapComponent,
    PointOfInterestComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

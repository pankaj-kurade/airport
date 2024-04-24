import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { AllFlightComponent } from './pages/admin/all-flight/all-flight.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { CityComponent } from './pages/admin/city/city.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    AirportComponent,
    AllFlightComponent,
    BookingsComponent,
    CityComponent,
    LayoutComponent,
    LoginComponent,
    NewFlightComponent,
    SearchComponent,
    BookFlightComponent,
    MyBookingsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

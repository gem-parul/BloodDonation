import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserModule } from './user/user.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './donation/create/create.component';
import { DonationModule } from './donation/donation.module';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { PagesModule } from './pages/pages.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SearchComponent } from './pages/search/search.component';
import { DonationDetailsComponent } from './donation-details/donation-details.component';
// import { FooterComponent } from './app/footer/footer.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'user',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ],
  },
  { path: 'details/:id', component: DonationDetailsComponent },
  { 
    path: 'donate',
    children: [{ path: 'create', component: CreateComponent }],
  },
  {
    path: 'mydonation',
    component: MyComponentComponent,
  },
  {
    path: 'profile',
    component: MyProfileComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyComponentComponent,
    MyProfileComponent,
    DonationDetailsComponent,
    // FooterComponent,
  ],
  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule,
    DashboardModule,
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    UserModule,
    DonationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes),
  ],

  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule, ReactiveFormsModule],
})
export class AppModule {}
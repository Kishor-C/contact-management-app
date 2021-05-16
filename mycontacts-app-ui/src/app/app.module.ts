import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ShowAllContactsComponent } from './show-all-contacts/show-all-contacts.component';
import { SearchContactsComponent } from './search-contacts/search-contacts.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { LogoutComponent } from './logout/logout.component';

import { ErrorComponent } from './error/error.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddContactsComponent,
    ShowAllContactsComponent,
    SearchContactsComponent,
    UpdateProfileComponent,
    DeleteProfileComponent,
    LogoutComponent,
    ErrorComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

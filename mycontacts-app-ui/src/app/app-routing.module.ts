import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { ShowAllContactsComponent } from './show-all-contacts/show-all-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { SearchContactsComponent } from './search-contacts/search-contacts.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path:"login/:userId", component:LoginComponent},
  {path : "", redirectTo : "login", pathMatch : "full"},
  {path : "register", component: RegisterComponent},
  {path : "profile/:userId", component : UserProfileComponent, canActivate : [AuthGuard], 
    children : [
      {path : "", redirectTo : "dashboard", pathMatch : "full"},
      {path: "dashboard", component: DashboardComponent},
      {path : "showAllContacts", component : ShowAllContactsComponent},
      {path : "addContacts", component : AddContactsComponent},
      {path : "searchContact", component : SearchContactsComponent},
      {path : "update", component : UpdateProfileComponent},
      {path : "delete", component : DeleteProfileComponent},
      {path : "logout", component : LogoutComponent},
    ]
  },
  {path : "**", component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

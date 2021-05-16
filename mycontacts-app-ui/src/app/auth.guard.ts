import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private profileService : ProfileService, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    const userId = route.paramMap.get("userId");
    const sessionItem = sessionStorage.getItem('token');
    if(this.profileService.isLoggedIn() && userId == sessionItem) {
      return true;
    }
    else {
      alert('Sorry you have to login again');
      this.router.navigate(["login"]);
      return false;
    }
  }
}

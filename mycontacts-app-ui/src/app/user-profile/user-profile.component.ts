import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile:any;
  constructor(private activatedRoute: ActivatedRoute, 
    private profileService:ProfileService, private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(d => {
        this.profileService.getProfile(d.userId)
        .subscribe(response => this.profile = response);
      });
  }
  logout() {
    this.profileService.loggingOut();
    this.router.navigate(["login"])
  }
}

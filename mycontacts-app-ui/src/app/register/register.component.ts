import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private profileService : ProfileService) { }

  ngOnInit() {
  }
  createProfile(profileForm : any) {
    this.profileService.createProfile(profileForm).subscribe((data: any) => {
      this.router.navigate(["login", data.userId])
    });  
  }
}

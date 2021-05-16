import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage:string;
  id:number;
  userId:number;
  password:string;
  constructor(private router : Router, private profileService: ProfileService, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.paramMap
    .subscribe((d:any) => this.id = d.params.userId);
  }
  authenticate(credentials : any) {
    this.profileService.authenticate(credentials)
    .subscribe((success: any) => {
      // console.log(success.status);
      sessionStorage.setItem("token", success.userId);
      this.router.navigate(["profile", success.userId])
    }, 
    (err: any) => {
      this.errorMessage = err.error.message;
      this.userId = undefined;
      this.password = undefined;
      this.router.navigate(["login"]);
    });
  }
}

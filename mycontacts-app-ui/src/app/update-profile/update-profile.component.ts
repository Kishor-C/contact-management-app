import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateStatus:string;
  constructor(private activatedRoute : ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit() {
  }
  update(password : string) {
    this.activatedRoute.parent.paramMap.subscribe((value : any) => {
      this.profileService.updatePassword(value.params.userId, password)
      .subscribe(
        success => this.updateStatus = `Hi, ${success.name} your password is updated`, 
        err => this.updateStatus = err.error.message
      );
    });
  }
}

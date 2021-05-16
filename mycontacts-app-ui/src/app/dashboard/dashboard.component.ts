import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showDashboard = false;
  profile : any = {}
  contactSize;
  constructor(private activatedRoute: ActivatedRoute, 
    private profileService:ProfileService) { }

  ngOnInit() {
    this.showDashboard = true;
    this.activatedRoute.parent.paramMap
      .subscribe((d : any) => {
        this.profileService.getProfile(d.params.userId)
        .subscribe((response) => {
          this.profile = response;
          this.contactSize = this.profile.contactList.length;
        });
      });
  }
}

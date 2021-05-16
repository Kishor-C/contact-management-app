import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.css']
})
export class DeleteProfileComponent implements OnInit {
  profile;
  constructor(private activatedRoute: ActivatedRoute, private profileService:ProfileService) { }
  
  ngOnInit() {
    this.activatedRoute.parent.paramMap
    .subscribe((d : any) => {
      this.profileService.getProfile(d.params.userId)
      .subscribe(response => {
        this.profile = response;
      });
    });
  }
  confirmDelete() {
    // call the delete of the service
  }
}

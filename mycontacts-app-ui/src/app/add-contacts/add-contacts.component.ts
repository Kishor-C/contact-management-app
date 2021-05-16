import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
  name:string;
  phone:number;
  userId:number;
  message:string;
  constructor(private router: Router, private activatedRouter : ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit() {
    this.activatedRouter.parent.paramMap.subscribe((data:any) => {this.userId = data.params.userId});
  }
  addContact(contactForm:any) {
    this.profileService.addContact(contactForm, this.userId)
    .subscribe((response : any) => {
      // Navigates to the dashboard
      //this.router.navigate(["profile", this.userId, "dashboard"]);
      this.message = response.message;
    });
  }
}

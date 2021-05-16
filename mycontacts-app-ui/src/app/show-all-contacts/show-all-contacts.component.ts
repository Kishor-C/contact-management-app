import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-show-all-contacts',
  templateUrl: './show-all-contacts.component.html',
  styleUrls: ['./show-all-contacts.component.css']
})
export class ShowAllContactsComponent implements OnInit {
  
  // use @Input so that search contacts can pass the contact list to this
  @Input()
  contacts : any;
  contactCountMessage : any;
  contactDeleteMessage : any;
  constructor(private activatedRoute:ActivatedRoute, private profileService:ProfileService ) { }

  ngOnInit() {
    this.activatedRoute.parent.paramMap
    .subscribe((value : any)=>{    
      this.profileService.getContacts(value.params.userId)
      .subscribe((response) => this.contacts = response, 
        (err) => this.contactCountMessage = err.error.message);
    }); 
  }
  deleteContact(contact:any) { 
   this.profileService.deleteContact(contact.userIdRef, contact.id)
   .subscribe((response: any) => {
     this.contactDeleteMessage = response.message;
     //re-initialize the contacts after deleting by calling ngOnInit so that it is sync with the database
     this.contacts = undefined;
     this.ngOnInit();
   });
  
  }
  

}

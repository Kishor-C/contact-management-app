import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-search-contacts',
  templateUrl: './search-contacts.component.html',
  styleUrls: ['./search-contacts.component.css']
})
export class SearchContactsComponent implements OnInit {
  //pass this searched contacts to the show all contacts component
  searchedContacts: any;
  
  //error message when there are no search criteria is matched
  errorMessage : any;
  constructor(private activatedRoute:ActivatedRoute, private profileService:ProfileService ) { }

  ngOnInit() {
    // on component initialization get all the contacts
    this.activatedRoute.parent.paramMap
    .subscribe((value : any)=>{    
      this.profileService.getContacts(value.params.userId)
      .subscribe(
        success => this.searchedContacts = success, 
        err => this.errorMessage = err.error.message
       );
    }); 
  }

  search(name : string) {
    //check for empty and perform the search
    if(name.trim().length != 0) {
      this.activatedRoute.parent.paramMap.subscribe((map:any) => {
        this.profileService.searchContact(map.params.userId, name)
        .subscribe(
          success => {
            this.errorMessage = undefined; 
            this.searchedContacts = success;
          }, 
          err => {
            this.errorMessage = err.error.message; 
            // make the searchContacts empty if no match found
            this.searchedContacts = []
          }
          );
      });
    } 
    // if name is empty then initialize to get all contacts
    else {
      this.ngOnInit();
    }
  }
}

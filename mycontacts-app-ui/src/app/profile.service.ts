import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private httpClient : HttpClient) { }
  port : number = 9090;
  baseURL:string = `http://localhost:${this.port}/my-contact-app/api`;
  
  public isLoggedIn() : boolean {
    let sessionItem = sessionStorage.getItem('token');
    if(sessionItem == null) {
      return false; 
    } else {
      return true;
    }
  }
  public loggingOut() {
    sessionStorage.removeItem('token');
  }
  public authenticate(credentials : any) : Observable<any> {
    const loginURL = `${this.baseURL}/login/${credentials.userId+"/"+credentials.password}`
    return this.httpClient.get(loginURL);
    //return this.httpClient.get(loginURL, {observe : 'response'});
  }
  public getProfile(userId:number) : Observable<any> {
    const profileURL = `${this.baseURL}/profile/${userId}`;
    return this.httpClient.get(profileURL);
  }
  public getContacts(userId:number) : Observable<any>  {
    const contactsURL = `${this.baseURL}/profile/${userId}/contacts`;
    return this.httpClient.get(contactsURL);
  }
  public createProfile(profile: any) {
    const createURL = `${this.baseURL}/createProfile`;
    return this.httpClient.post(createURL, profile);
  }
  public addContact(contact : any, userId : number) : Observable<any> {
    const addContactURL = `${this.baseURL}/profile/${userId}/addContact`;
    return this.httpClient.post(addContactURL, contact);
  }
  public deleteContact(userId: number, contactId: number) : Observable<any> {
    const deleteContactURL = `${this.baseURL}/profile/${userId}/delete/${contactId}`;
    return this.httpClient.delete(deleteContactURL);
  }
  public searchContact(userId: number, name : string) : Observable<any>{
    const searchContactURL = `${this.baseURL}/profile/${userId}/${name}`;
    return this.httpClient.get(searchContactURL);
  }
  public updatePassword(userId: number, password : string) : Observable<any> {
    const updateURL = `${this.baseURL}/updateProfile/${userId}/${password}`;
    return this.httpClient.put(updateURL, {});
  }
}

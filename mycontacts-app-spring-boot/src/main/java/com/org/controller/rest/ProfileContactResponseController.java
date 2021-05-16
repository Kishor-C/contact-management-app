package com.org.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.org.model.beans.Contact;
import com.org.model.beans.Profile;
import com.org.model.beans.ResponseMessages;
import com.org.model.service.ContactService;
import com.org.model.service.ProfileService;

@RestController
@RequestMapping("api")
//@CrossOrigin(origins = "http://localhost:4200")
public class ProfileContactResponseController {

	@Autowired
	private ProfileService profileService;
	@Autowired
	private ContactService contactService;

	/*
	 * getting all the contacts
	 * 
	 */
	
	@RequestMapping(method = RequestMethod.GET, path = "/profile/{userId}/contacts", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getContactsService(@PathVariable("userId") int id) {
		ResponseEntity<Object> responseEntity = null;
		try {
			responseEntity = ResponseEntity.status(200).body(contactService.getMyContacts(id));
		} catch(Exception e) {
			responseEntity = ResponseEntity.status(404).body(new ResponseMessages("Sorry Contacts not available"));
		}
		return responseEntity;
	}
	/*
	 * 
	 * search the contact based on userid and name 
	 *
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/profile/{userId}/{name}", 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> searchContactsByNameService(@PathVariable("userId") int userId, @PathVariable("name") String name) {
		ResponseEntity<Object> responseEntity = null;
		try {
			List<Contact> list = contactService.searchContactByName(userId, name);
			if(list.size() != 0)
				responseEntity = ResponseEntity.status(200)
					.body(list);
			else
				throw new RuntimeException();
		} catch(Exception e) {
			responseEntity = ResponseEntity.status(404).body(new ResponseMessages("Sorry no matching records with "+name));
		}
		return responseEntity;
	}
	/*
	 * store the profile 
	 * 
	 */
	@RequestMapping(method = RequestMethod.POST, path = "/createProfile", produces = MediaType.APPLICATION_JSON_VALUE, 
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> storeProfileService(@RequestBody Profile profile) {
		
		ResponseEntity<Object> responseEntity = null;
		try {
			Profile createdProfile = profileService.store(profile);
			responseEntity = ResponseEntity.status(200).body(createdProfile);
		} catch(Exception e) {
			responseEntity = ResponseEntity.status(404).body(new ResponseMessages("Sorry user is not created"));
		}
		return responseEntity;
	}
	/*
	 * authentication service 
	 * 
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/login/{userId}/{password}", 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> authenticateService(@PathVariable("userId") int userId, 
			@PathVariable("password") String password) {
		
		ResponseEntity<Object> responseEntity = null;
		try {
			Profile profile = profileService.login(userId, password);
			responseEntity = ResponseEntity.status(200).body(profile);
		} catch(Exception e) {
			responseEntity = ResponseEntity.status(404).body(new ResponseMessages("Username or Password is invalid"));
		}
		return responseEntity;
	}
	/*
	 * 
	 * get the profile by userid
	 * 
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/profile/{userId}", 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getProfile(@PathVariable("userId") int userId) {
		ResponseEntity<Object> responseEntity = null;
		try {
			Profile profile = profileService.getProfile(userId);
			responseEntity = ResponseEntity.status(200).body(profile);
		} catch(Exception e) {
			responseEntity = ResponseEntity.status(404).body(new ResponseMessages("Invalid user id: "+userId));
		}
		return responseEntity;
	}
	/*
	 * 
	 * update the password based on userId
	 * 
	 */
	@RequestMapping(method = RequestMethod.PUT, 
			path = "/updateProfile/{userId}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> updatePasswordService(@PathVariable("userId") int userId, @PathVariable("password") String password) {
		ResponseEntity<Object> responseEntity = null;
		try {
			Profile profile = profileService.updatePassword(userId, password);
			responseEntity = ResponseEntity.status(200).body(profile);
		} catch(Exception e) {
			responseEntity = ResponseEntity.status(404).body(new ResponseMessages("Sorry try again"));
		}
		return responseEntity;
	}
	/*
	 * 
	 * deleting the profile based on userId
	 * 
	 */
	@RequestMapping(method = RequestMethod.DELETE, path = "/profile/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> deleteProfileService(@PathVariable("userId") int userId) {
		ResponseEntity<Object> responseEntity = null;
		try {
			profileService.deleteProfile(userId);
			responseEntity = ResponseEntity.status(200)
					.body(new ResponseMessages("Profile deleted, you can't get back your contacts, we wish to see you in future"));
		} catch(Exception e) {
			responseEntity = ResponseEntity.status(404).body(new ResponseMessages("Sorry try again"));
		}
		return responseEntity;
	}
	
	/*
	 * 
	 * deleting the contacts based on userid & contactid, user id is so that only the contact of particular user can be deleted
	 * 
	 */
	@RequestMapping(method = RequestMethod.DELETE, path = "/profile/{userId}/delete/{contactId}", 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> deleteContactService(@PathVariable("userId") int userId, @PathVariable("contactId") int contactId) {
		
		ResponseEntity<Object> responseEntity = null;
		try {
			contactService.deleteContact(contactId, userId);
			responseEntity = ResponseEntity.status(200)
					.body(new ResponseMessages("Contact Deleted"));
		} catch(Exception e) {
			responseEntity = ResponseEntity.status(404).body(new ResponseMessages("Sorry try again"));
		}
		return responseEntity;
	}
	
	
	/*
	 * 
	 * add the contact for a particular userid
	 * 
	 */
	@RequestMapping(value = "/profile/{userId}/addContact", 
			method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> addContactService(@RequestBody Contact contact, @PathVariable("userId") int userId) {
		
		ResponseEntity<Object> responseEntity = null;
		try {
			contact.setUserIdRef(userId);
			Contact createdContact = contactService.addContact(contact);
			responseEntity = ResponseEntity.status(200)
					.body(new ResponseMessages(createdContact.getName()+" added to your contact"));
		} catch(Exception e) {
			responseEntity = ResponseEntity.status(404).body(new ResponseMessages("Sorry contact not added"));
		}
		return responseEntity;
	}
}

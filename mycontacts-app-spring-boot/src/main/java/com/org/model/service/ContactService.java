package com.org.model.service;

import java.util.List;

import com.org.model.beans.Contact;

public interface ContactService {
	//add contact for the existing userId
	public Contact addContact(Contact contact);
	
	//get contacts matching by name for a particular userId
	public List<Contact> searchContactByName(int userId, String name);
	
	//delete the contact only for a particular userId
	public void deleteContact(int contactId, int userid);
	
	//get contacts of a particular userId
	public List<Contact> getMyContacts(int userId);
}


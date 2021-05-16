package com.org.model.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.org.model.beans.Contact;
import com.org.model.dao.ContactDAO;

@Service
public class ContactServiceImpl implements ContactService {

	@Autowired
	private ContactDAO contactDAO;
	@Autowired
	private ProfileService profileService;
	
	@Override
	public List<Contact> getMyContacts(int userId) {
		List<Contact> contactsList = profileService.getProfile(userId).getContactList();
		if(contactsList.size() == 0) {
			throw new RuntimeException();
		}
		return contactsList;
	}
	
	@Override
	public List<Contact> searchContactByName(int userId, String name) {
		List<Contact> filteredContacts = null;	
		List<Contact> allContacts = getMyContacts(userId);
//		List<Contact> allContacts = contactDAO.getContactsByName(userId, name);
		filteredContacts = allContacts.stream()
				.filter(contact -> contact.getName().startsWith(name)).collect(Collectors.toList());
		return filteredContacts;
	}
	@Transactional
	public Contact addContact(Contact contact){	
		return contactDAO.save(contact);
	}
	@Transactional
	public void deleteContact(int contactId, int userId) {
		int x = contactDAO.deleteContact(contactId, userId);
		if(x == 0) {
			throw new RuntimeException();
		}
	}

	/*@Override
	public List<Contact> getMyConacts(int userId, int start) {
		// TODO Auto-generated method stub
		return null;
	}*/
}

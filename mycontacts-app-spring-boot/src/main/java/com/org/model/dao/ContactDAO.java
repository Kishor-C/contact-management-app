package com.org.model.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.org.model.beans.Contact;

public interface ContactDAO extends JpaRepository<Contact, Integer>, PagingAndSortingRepository<Contact, Integer> {
	@Modifying
	@Query("delete from Contact c where c.id=?1 and c.userIdRef=?2")
	int deleteContact(int contactId, int userId);
}

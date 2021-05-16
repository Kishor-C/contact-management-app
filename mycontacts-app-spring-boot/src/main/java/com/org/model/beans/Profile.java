package com.org.model.beans;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name = "profile")
public class Profile {
	@Id
	@SequenceGenerator(name = "generate_profile_id", sequenceName = "profile_sequence", allocationSize = 1)
	@GeneratedValue(generator = "generate_profile_id", strategy = GenerationType.SEQUENCE)
	@Column(name = "userid")
	private int userId;
	private String name;
	private String password;
	private LocalDate dob;
	private long phone;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "useridref")
	private List<Contact> contactList;
	
//	public Profile(Profile profile) {
//		this.userId = profile.getUserId();
//		this.name = profile.getName();
//		this.password = profile.getPassword();
//		this.dob = profile.getDob();
//		this.phone = profile.getPhone();
//	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	
	@Override
	public String toString() {
		return "Profile [userId=" + userId + ", name=" + name + ", password=" + password + ", dob=" + dob + ", phone="
				+ phone + ", contactList=" + contactList + "]";
	}
	public List<Contact> getContactList() {
		return contactList;
	}
	public void setContactList(List<Contact> contactList) {
		this.contactList = contactList;
	}
}

package com.org.model.service;

import com.org.model.beans.Profile;

public interface ProfileService {
	//create profile for a user
	public Profile store(Profile profile);
	
	//get the profile based on the userId
	public Profile getProfile(int userId);
	
	//delete the profile based on userId
	public void deleteProfile(int userId);
	
	//update the password of a particular userId
	public Profile updatePassword(int userId, String password);
	
	//authenticate the user based on userId and password
	public Profile login(int userId, String password);
	
	
}

package com.org.model.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.org.model.beans.Profile;

public interface ProfileDAO extends JpaRepository<Profile, Integer>{}

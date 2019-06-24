package com.krisshore.ecommerce.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.krisshore.ecommerce.models.User;

public interface UserRepository extends CrudRepository<User, Long>{
	
	List<User> findAll();

}

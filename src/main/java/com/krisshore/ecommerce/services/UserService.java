package com.krisshore.ecommerce.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.krisshore.ecommerce.models.User;
import com.krisshore.ecommerce.repositories.UserRepository;

@Service
public class UserService {
	// User Repository Dependency
	private final UserRepository userRepo;
	
	public UserService(UserRepository userRepo) {
		this.userRepo = userRepo;
	}
	
	// Return all Users
	public List<User> allUsers() {
		return userRepo.findAll();
	}
	
	// Create a User
	public User createUser(User user) {
		return userRepo.save(user);
	}
	
	// Retrieve a User
	public User findUser(Long id) {
		Optional<User> optionalUser = userRepo.findById(id);
		
		if(optionalUser.isPresent()) {
			return optionalUser.get();
		} else {
			return null;
		}
	}
	
	// Update a User
	public User updateUser(
					Long id,
					String first_name,
					String last_name,
					String email,
					String password,
					String city,
					String state,
					String country,
					String zipcode,
					String address,
					String phone_number
				) {
		Optional<User> thisUser = userRepo.findById(id);
		
		if(thisUser.isPresent()) {
			User userToUpdate = thisUser.get();
			
			userToUpdate.setFirst_name(first_name);
			userToUpdate.setLast_name(last_name);
			userToUpdate.setEmail(email);
			userToUpdate.setPassword(password);
			userToUpdate.setCity(city);
			userToUpdate.setState(state);
			userToUpdate.setCountry(country);
			userToUpdate.setZipcode(zipcode);
			userToUpdate.setAddress(address);
			userToUpdate.setPhone_number(phone_number);
			
			return userRepo.save(userToUpdate);
		} else {
			return null;
		}
	}
	
	// Delete a User
	public void deleteUser(Long id) {
		Optional<User> thisUser = userRepo.findById(id);
		
		if(thisUser.isPresent()) {
			userRepo.deleteById(id);
			return;
		} else {
			return;
		}
	}
}

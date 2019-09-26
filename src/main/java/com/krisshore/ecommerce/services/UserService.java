package com.krisshore.ecommerce.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
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
		String hashed = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
		user.setPassword(hashed);
		return userRepo.save(user);
	}
	
	// Retrieve a User by Id
	public User findUser(Long id) {
		Optional<User> optionalUser = userRepo.findById(id);
		
		if(optionalUser.isPresent()) {
			return optionalUser.get();
		} else {
			return null;
		}
	}
	
	// Retrieve a User by Email
	public User findByEmail(String email) {
		return userRepo.findByEmail(email);
	}
	
	// Authenticate a User
	public boolean authenticateUser(String email, String password) {
		User user = userRepo.findByEmail(email);
		
		if(user == null) {
			return false;
		} else {
			if(BCrypt.checkpw(password, user.getPassword())) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	// Update a User
	public User updateUser(
					Long id,
					String first_name,
					String last_name,
					String email,
					String phone_number,
					String password
					
				) {
		Optional<User> thisUser = userRepo.findById(id);
		
		if(thisUser.isPresent()) {
			User userToUpdate = thisUser.get();
			
			userToUpdate.setFirst_name(first_name);
			userToUpdate.setLast_name(last_name);
			userToUpdate.setEmail(email);
			userToUpdate.setPhone_number(phone_number);
			
			if (!password.equals("")) {
				userToUpdate.setPassword(password);
			} else {
				userToUpdate.setPassword(userToUpdate.getPassword());
			}
			
			
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

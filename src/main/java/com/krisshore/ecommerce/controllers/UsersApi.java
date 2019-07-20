package com.krisshore.ecommerce.controllers;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.krisshore.ecommerce.models.Cart;
import com.krisshore.ecommerce.models.User;
import com.krisshore.ecommerce.services.CartService;
import com.krisshore.ecommerce.services.UserService;

@RestController
@RequestMapping("/")
public class UsersApi {
	private final UserService userService;
	private final CartService cartService;
	
	public UsersApi(UserService userService, CartService cartService) {
		this.userService = userService;
		this.cartService = cartService;
	}
	
	// Find All
	@RequestMapping("api/users")
	public List<User> index(){
		return userService.allUsers();
	}
	
	// Create New / Register
	@RequestMapping(value="api/register", method=RequestMethod.POST)
	public User create(
					@RequestBody Map<String, Object> payload,
					HttpSession session
				) {
		User newUser = new User(
						payload.get("first_name").toString(),
						payload.get("last_name").toString(),
						payload.get("email").toString(),
						payload.get("password").toString(),
						payload.get("city").toString(),
						payload.get("state").toString(),
						payload.get("country").toString(),
						payload.get("zipcode").toString(),
						payload.get("address").toString(),
						payload.get("phone_number").toString()
					);
		
		userService.createUser(newUser);
		session.setAttribute("user_id", newUser.getId());
		
		Cart userCart = new Cart(newUser); // create user's cart
		cartService.createCart(userCart);
		
		return newUser;
	}
	
	// Login / Authenticate
	@RequestMapping(value="api/login", method=RequestMethod.POST)
	public User login(
				@RequestBody Map<String, Object> payload,
				HttpSession session
			) {
		String email = payload.get("email").toString();
		String password = payload.get("password").toString();
		User thisUser = userService.authenticateUser(
											email, 
											password) ? userService.findByEmail(email) : null;
		session.setAttribute("user_id", thisUser.getId());
		return thisUser;
	}
	
	// Find One
	@RequestMapping("api/users/{id}")
	public User find(@PathVariable("id") Long id) {
		User oneUser = userService.findUser(id);
		return oneUser;
	}
	
	// Edit One
	@RequestMapping(value="api/users/{id}", method=RequestMethod.PUT)
	public User update(
			@PathVariable("id") Long id,
			@RequestBody Map<String, Object> payload
		) {
		return userService.updateUser(
								id,
								payload.get("first_name").toString(),
								payload.get("last_name").toString(),
								payload.get("email").toString(),
								payload.get("password").toString(),
								payload.get("city").toString(),
								payload.get("state").toString(),
								payload.get("country").toString(),
								payload.get("zipcode").toString(),
								payload.get("address").toString(),
								payload.get("phone_number").toString()
							);
	}
	
	// Delete One
	@RequestMapping(value="api/users/{id}", method=RequestMethod.DELETE)
	public void destroy(@PathVariable("id") Long id) {
		userService.deleteUser(id);
		return;
	}
	

}

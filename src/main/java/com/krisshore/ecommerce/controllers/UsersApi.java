package com.krisshore.ecommerce.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	// Create New
	@RequestMapping(value="api/users", method=RequestMethod.POST)
	public User create(
			@RequestParam String first_name,
			@RequestParam String last_name,
			@RequestParam String email,
			@RequestParam String password,
			@RequestParam String city,
			@RequestParam String state,
			@RequestParam String country,
			@RequestParam String zipcode,
			@RequestParam String address,
			@RequestParam String phone_number,
			HttpSession session
		) {
		User newUser = new User(
						first_name,
						last_name,
						email,
						password,
						city,
						state,
						country,
						zipcode,
						address,
						phone_number
					);
		userService.createUser(newUser);
		session.setAttribute("user_id", newUser.getId());
		
		Cart userCart = new Cart(newUser); // create user's cart
		cartService.createCart(userCart);
		
		return newUser;
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
			@RequestParam String first_name,
			@RequestParam String last_name,
			@RequestParam String email,
			@RequestParam String password,
			@RequestParam String city,
			@RequestParam String state,
			@RequestParam String country,
			@RequestParam String zipcode,
			@RequestParam String address,
			@RequestParam String phone_number
		) {
		return userService.updateUser(
								id,
								first_name,
								last_name,
								email,
								password,
								city,
								state,
								country,
								zipcode,
								address,
								phone_number
							);
	}
	
	// Delete One
	@RequestMapping(value="api/users/{id}", method=RequestMethod.DELETE)
	public void destroy(@PathVariable("id") Long id) {
		userService.deleteUser(id);
		return;
	}
	

}

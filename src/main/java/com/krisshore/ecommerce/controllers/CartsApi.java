package com.krisshore.ecommerce.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.krisshore.ecommerce.models.Cart;
import com.krisshore.ecommerce.services.CartService;

@RestController
@RequestMapping("/")
public class CartsApi {
	private final CartService cartService;
	
	public CartsApi(CartService cartService) {
		this.cartService = cartService;
	}
	
	// Find All
	@RequestMapping("api/carts")
	public List<Cart> index() {
		return cartService.allCarts();
	}
	
	// Find One
	@RequestMapping("api/carts/{id}")
	public Cart find(@PathVariable("id") Long id) {
		Cart oneCart = cartService.findCart(id);
		return oneCart;
	}
}

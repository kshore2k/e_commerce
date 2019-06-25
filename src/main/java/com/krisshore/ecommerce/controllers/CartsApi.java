package com.krisshore.ecommerce.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.krisshore.ecommerce.models.Cart;
import com.krisshore.ecommerce.models.Product;
import com.krisshore.ecommerce.services.CartService;
import com.krisshore.ecommerce.services.ProductService;

@RestController
@RequestMapping("/")
public class CartsApi {
	private final CartService cartService;
	private final ProductService productService;
	
	public CartsApi(CartService cartService, ProductService productService) {
		this.cartService = cartService;
		this.productService = productService;
	}
	
	// Find All
	@RequestMapping("api/carts")
	public List<Cart> index() {
		return cartService.allCarts();
	}
	
	// Find One by ID
	@RequestMapping("api/carts/{id}")
	public Cart find(@PathVariable("id") Long id) {
		Cart oneCart = cartService.findCart(id);
		return oneCart;
	}
	
	// Edit One / Add or Remove Product from Cart
	@RequestMapping(value="api/carts/{id}", method=RequestMethod.PUT)
	public Cart update(
					@PathVariable("id") Long id, 
					@RequestBody Map<String, Object> payload
				) {
		Long productId = Long.parseLong(payload.get("productId").toString());
		
		if(payload.get("productToAdd").toString().equals("true")) {
			Product productToAdd = productService.findProduct(productId);
			return cartService.updateCart(id,"add", productToAdd);
		} else {
			Product productToRemove = productService.findProduct(productId);;
			return cartService.updateCart(id, "remove", productToRemove);
		}
		
	}
	
	// Delete One
	@RequestMapping(value="api/carts/{id}", method=RequestMethod.DELETE)
	public void destroy(@PathVariable("id") Long id) {
		cartService.deleteCart(id);
		return;
	}
}

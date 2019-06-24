package com.krisshore.ecommerce.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.krisshore.ecommerce.models.Cart;
import com.krisshore.ecommerce.models.Product;
import com.krisshore.ecommerce.repositories.CartRepository;

@Service
public class CartService {
	// Cart Repository Dependency
	private final CartRepository cartRepo;
	
	public CartService(CartRepository cartRepo) {
		this.cartRepo = cartRepo;
	}
	
	// Return all Carts
	public List<Cart> allCarts() {
		return cartRepo.findAll();
	}
	
	// Create a Cart
	public Cart createCart(Cart cart) {
		return cartRepo.save(cart);
	}
	
	// Retrieve a Cart
	public Cart findCart(Long id) {
		Optional<Cart> optionalCart = cartRepo.findById(id);
		
		if(optionalCart.isPresent()) {
			return optionalCart.get();
		} else {
			return null;
		}
	}
	
	// Update a Cart
	public Cart updateCart(Long id, List<Product> products) {
		Optional<Cart> thisCart = cartRepo.findById(id);
		
		if(thisCart.isPresent()) {
			Cart cartToUpdate = thisCart.get();
			
			cartToUpdate.setProducts(products);
			
			return cartRepo.save(cartToUpdate);
		} else {
			return null;
		}
	}
	
	// Delete a Cart
	public void deleteCart(Long id) {
		Optional<Cart> thisCart = cartRepo.findById(id);
		
		if(thisCart.isPresent()) {
			cartRepo.deleteById(id);
			return;
		} else {
			return;
		}
	}
}

package com.krisshore.ecommerce.controllers;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.krisshore.ecommerce.models.Product;
import com.krisshore.ecommerce.models.Review;
import com.krisshore.ecommerce.services.ProductService;
import com.krisshore.ecommerce.services.ReviewService;
import com.krisshore.ecommerce.services.UserService;

@RestController
@RequestMapping("/")
public class ReviewsApi {
	private final ReviewService reviewService;
	private final ProductService productService;
	private final UserService userService;
	
	public ReviewsApi(ReviewService reviewService, ProductService productService, UserService userService) {
		this.reviewService = reviewService;
		this.productService = productService;
		this.userService = userService;
	}
	
	// Find All
	@RequestMapping("api/products/reviews")
	public List<Review> index() {
		return reviewService.allReviews();
	}
	
	// Create New Review
	@RequestMapping(value="api/products/{id}/reviews", method=RequestMethod.POST)
	public Review create(@PathVariable("id") Long id, @RequestBody Map<String, Object> payload, HttpSession session) {
		Product productToReview = productService.findProduct(id);
		
		Long user_id = (Long) session.getAttribute("user_id");
		
		Review newReview = new Review(
									payload.get("title").toString(),
									Integer.parseInt(payload.get("rating").toString()),
									payload.get("description").toString(),
									payload.get("userName").toString(),
									productToReview,
									userService.findUser(user_id)
								);
		return reviewService.createReview(newReview);
	}
	
	// Find One
	@RequestMapping("api/products/reviews/{id}")
	public Review find(@PathVariable("id") Long id) {
		Review oneReview = reviewService.findReview(id);
		return oneReview;
	}
	
	// Edit One
	@RequestMapping(value="api/products/reviews/{id}", method=RequestMethod.PUT)
	public Review update(@PathVariable("id") Long id, @RequestBody Map<String, Object> payload) {
		return reviewService.updateReview(
									id, 
									payload.get("title").toString(), 
									Integer.parseInt(payload.get("rating").toString()), 
									payload.get("description").toString(),
									payload.get("userName").toString()
								);
	}
	
	// Delete One
	@RequestMapping(value="api/products/reviews/{id}", method=RequestMethod.DELETE)
	public void destroy(@PathVariable("id") Long id) {
		reviewService.deleteReview(id);
		return;
	}
}

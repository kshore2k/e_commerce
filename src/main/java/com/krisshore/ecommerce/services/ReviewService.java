package com.krisshore.ecommerce.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.krisshore.ecommerce.models.Review;
import com.krisshore.ecommerce.repositories.ReviewRepository;

@Service
public class ReviewService {
	private final ReviewRepository reviewRepo;
	
	public ReviewService(ReviewRepository reviewRepo) {
		this.reviewRepo = reviewRepo;
	}
	
	// Return all Reviews
	public List<Review> allReviews() {
		return reviewRepo.findAll();
	}
		
	// Create a Review
	public Review createReview(Review review) {
		return reviewRepo.save(review);
	}
	
	// Retrieve a Review by Id
	public Review findReview(Long id) {
		Optional<Review> optionalReview = reviewRepo.findById(id);
		
		if(optionalReview.isPresent()) {
			return optionalReview.get();
		} else {
			return null;
		}
	}
	
	// Update a Review
	public Review updateReview(Long id, String title, Integer rating, String description, String userName) {
		Optional<Review> thisReview = reviewRepo.findById(id);
		
		if(thisReview.isPresent()) {
			Review reviewToUpdate = thisReview.get();
			
			reviewToUpdate.setTitle(title);
			reviewToUpdate.setRating(rating);
			reviewToUpdate.setDescription(description);
			reviewToUpdate.setUserName(userName);
			
			return reviewRepo.save(reviewToUpdate);
		} else {
			return null;
		}
	}
	
	// Delete a Review
	public void deleteReview(Long id) {
		Optional<Review> thisReview = reviewRepo.findById(id);
		
		if(thisReview.isPresent()) {
			reviewRepo.deleteById(id);
			return;
		} else {
			return;
		}
	}
}

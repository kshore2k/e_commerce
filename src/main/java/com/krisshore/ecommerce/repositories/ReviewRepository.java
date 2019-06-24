package com.krisshore.ecommerce.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.krisshore.ecommerce.models.Review;

public interface ReviewRepository extends CrudRepository<Review, Long>{

	List<Review> findAll();
}

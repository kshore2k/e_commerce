package com.krisshore.ecommerce.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.krisshore.ecommerce.models.Product;

public interface ProductRepository extends CrudRepository<Product, Long>{
	
	List<Product> findAll();
	
	List<Product> findByCollection(String collection);
	
	List<Product> findByCollectionAndCategory(String collection, String category);
	
	List<Product> findByCollectionAndPriceGreaterThanEqualAndPriceLessThanEqual(String collection, Double minPrice, Double maxPrice);
	
	List<Product> findByCollectionAndRating(String collection, Integer rating);
	
}

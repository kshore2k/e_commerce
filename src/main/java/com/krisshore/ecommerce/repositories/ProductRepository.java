package com.krisshore.ecommerce.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.krisshore.ecommerce.models.Product;

public interface ProductRepository extends CrudRepository<Product, Long>{
	
	List<Product> findAll();
	
	List<Product> findByCategory(String category);
	
	List<Product> findByCollection(String collection);
}

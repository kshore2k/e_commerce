package com.krisshore.ecommerce.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.krisshore.ecommerce.models.Cart;

public interface CartRepository extends CrudRepository<Cart, Long>{
	
	List<Cart> findAll();

}

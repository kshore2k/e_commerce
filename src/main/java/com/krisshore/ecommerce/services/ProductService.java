package com.krisshore.ecommerce.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.krisshore.ecommerce.models.Product;
import com.krisshore.ecommerce.repositories.ProductRepository;

@Service
public class ProductService {
	private final ProductRepository productRepo;
	
	public ProductService(ProductRepository productRepo) {
		this.productRepo = productRepo;
	}
	
	// Return all Products
	public List<Product> allProducts() {
		return productRepo.findAll();
	}
	
	// Create a Product
	public Product createProduct(Product product) {
		return productRepo.save(product);
	}
	
	// Retrieve a product by Id
	public Product findProduct(Long id) {
		Optional<Product> optionalProduct = productRepo.findById(id);
		
		if(optionalProduct.isPresent()) {
			return optionalProduct.get();
		} else {
			return null;
		}
	}
	
	// Retrieve a product by Collection
	public List<Product> productCollection(String collection) {
		return productRepo.findByCollection(collection);
	}
	
	// Retrieve a product by Category
	public List<Product> productsByCollectionAndCategory(String collection, String category) {
		return productRepo.findByCollectionAndCategory(collection, category);
	}
	
	// Retrieve products by Price
	public List<Product> productsByCollectionAndPrice(String collection, Double minPrice, Double maxPrice) {
		return productRepo.findByCollectionAndPriceGreaterThanEqualAndPriceLessThanEqual(collection, minPrice, maxPrice);
	}
	
	// Retrieve products by rating
	public List<Product> productsByCollectionAndRating(String collection, Integer rating) {
		return productRepo.findByCollectionAndRating(collection, rating);
	}
	
	// Update a Product
	public Product updateProduct(
						Long id,
						String title,
						String description,
						Double price,
						String imageUrl,
						String features,
						Integer rating,
						String itemNumber,
						String category,
						String collection
					) {
		Optional<Product> thisProduct = productRepo.findById(id);
		
		if(thisProduct.isPresent()) {
			Product productToUpdate = thisProduct.get();
			
			productToUpdate.setTitle(title);
			productToUpdate.setDescription(description);
			productToUpdate.setPrice(price);
			productToUpdate.setImage_url(imageUrl);
			productToUpdate.setFeatures(features);
			productToUpdate.setRating(rating);
			productToUpdate.setItem_number(itemNumber);
			productToUpdate.setCategory(category);
			productToUpdate.setCollection(collection);
			
			return productRepo.save(productToUpdate);
		} else {
			return null;
		}
	}
	
	// Delete a Product
		public void deleteProduct(Long id) {
			Optional<Product> thisProduct = productRepo.findById(id);
			
			if(thisProduct.isPresent()) {
				productRepo.deleteById(id);
				return;
			} else {
				return;
			}
		}
	
}

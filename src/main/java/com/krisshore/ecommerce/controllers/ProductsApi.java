package com.krisshore.ecommerce.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.krisshore.ecommerce.models.Product;
import com.krisshore.ecommerce.services.ProductService;

@RestController
@RequestMapping("/")
public class ProductsApi {
	private final ProductService productService;
	
	public ProductsApi(ProductService productService) {
		this.productService = productService;
	}
	
	// Find All
	@RequestMapping("api/products")
	public List<Product> index() {
		return productService.allProducts();
	}
	
	// Create New Product
	@RequestMapping(value="api/products", method=RequestMethod.POST)
	public Product create(@RequestBody Map<String, Object> payload) {
		Product newProduct = new Product(
								payload.get("title").toString(),
								payload.get("description").toString(),
								Double.parseDouble((payload.get("price").toString())),
								payload.get("image_url").toString(),
								payload.get("features").toString(),
								Integer.parseInt(payload.get("rating").toString()),
								payload.get("item_number").toString(),
								payload.get("category").toString(),
								payload.get("collection").toString()
							);
		return productService.createProduct(newProduct);
	}
	
	// Find One
	@RequestMapping("api/products/{id}")
	public Product find(@PathVariable("id") Long id) {
		Product oneProduct = productService.findProduct(id);
		return oneProduct;
	}
	
	// Edit One
	@RequestMapping(value="api/products/{id}", method=RequestMethod.PUT)
	public Product update(@PathVariable("id") Long id, @RequestBody Map<String, Object> payload) {
		return productService.updateProduct(
									id,
									payload.get("title").toString(),
									payload.get("description").toString(),
									Double.parseDouble((payload.get("price").toString())),
									payload.get("image_url").toString(),
									payload.get("features").toString(),
									Integer.parseInt(payload.get("rating").toString()),
									payload.get("item_number").toString(),
									payload.get("category").toString(),
									payload.get("collection").toString()
								);
	}
	
	// Delete One
	@RequestMapping(value="api/products/{id}", method=RequestMethod.DELETE)
	public void destroy(@PathVariable("id") Long id) {
		productService.deleteProduct(id);
		return;
	}
}

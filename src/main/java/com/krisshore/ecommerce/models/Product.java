package com.krisshore.ecommerce.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="products")
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Size(min=1, max=200)
	private String title;
	
	@Size(min=10, max=200)
	private String description;
	
	private Double price;
	private String imageUrl;
	
	@Size(min=10, max=200)
	private String features;
	
//	@Size(min=1, max=5)
	private Integer rating;
	
	@Size(min=1, max=20)
	private String itemNumber;
	
	@Size(min=1, max=20)
	private String category;
	
	@Size(min=1, max=200)
	private String collection;
	
	@OneToMany(mappedBy="product", fetch=FetchType.LAZY)
	private List<Review> reviews;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(
			name="products_carts",
			joinColumns=@JoinColumn(name="product_id"),
			inverseJoinColumns=@JoinColumn(name="cart_id")
			)
	@JsonBackReference
	private List<Cart> carts;
	
	
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    
	public Product() {

	}


	public Product(String title, String description, Double price, String imageUrl, String features, Integer rating, String itemNumber, String category, String collection) {
		this.title = title;
		this.description = description;
		this.price = price;
		this.imageUrl = imageUrl;
		this.features = features;
		this.rating = rating;
		this.itemNumber = itemNumber;
		this.category = category;
		this.collection = collection;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Double getPrice() {
		return price;
	}


	public void setPrice(Double price) {
		this.price = price;
	}


	public String getImage_url() {
		return imageUrl;
	}


	public void setImage_url(String image_url) {
		this.imageUrl = image_url;
	}


	public String getFeatures() {
		return features;
	}


	public void setFeatures(String features) {
		this.features = features;
	}


	public Integer getRating() {
		return rating;
	}


	public void setRating(Integer rating) {
		this.rating = rating;
	}


	public String getItem_number() {
		return itemNumber;
	}


	public void setItem_number(String item_number) {
		this.itemNumber = item_number;
	}


	public List<Review> getReviews() {
		return reviews;
	}


	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}


	public List<Cart> getCarts() {
		return carts;
	}


	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}
	
	public String getCollection() {
		return collection;
	}


	public void setCollection(String collection) {
		this.collection = collection;
	}


	public Date getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}


	public Date getUpdatedAt() {
		return updatedAt;
	}


	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	@PrePersist
	protected void onCreate(){
		this.createdAt = new Date();
	}
	
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }

}

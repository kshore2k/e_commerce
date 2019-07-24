package com.krisshore.ecommerce.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="reviews")
public class Review {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Size(min=3, max=100)
	private String title;
	
	private Integer rating;
	
	@Size(min=3, max=500)
	private String description;
	
	@Size(min=3, max=20)
	private String userName;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="product_id")
	@JsonBackReference
	private Product product;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_id")
	@JsonIgnore
	private User user;
	
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
	
    
    public Review() {
    	
	}


	public Review(String title, Integer rating, String description, String userName, Product product, User user) {
		this.title = title;
		this.rating = rating;
		this.description = description;
		this.userName = userName;
		this.product = product;
		this.user = user;
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
	
	public Integer getRating() {
		return rating;
	}


	public void setRating(Integer rating) {
		this.rating = rating;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public Product getProduct() {
		return product;
	}


	public void setProduct(Product product) {
		this.product = product;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
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

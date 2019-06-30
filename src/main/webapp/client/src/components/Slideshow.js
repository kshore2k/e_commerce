import React, {Component } from 'react';
import './Slideshow.css';
import img1 from '../static/camp-hero1.jpg';
import img2 from '../static/camp-hero2.jpg';
import img3 from '../static/camp-hero3.jpg';

class Slideshow extends Component {

    componentDidMount() {
        this.slideIndex = 1;

        this.showSlides(this.slideIndex);

        this.setSlideInterval();
    };
    
    plusSlides = (n) => {
        this.showSlides(this.slideIndex += n);

        clearInterval(this.intervalID);

        this.setSlideInterval();
    };

    currentSlide = (n) => {
        this.showSlides(this.slideIndex = n);

        clearInterval(this.intervalID);

        this.setSlideInterval();
    };

    setSlideInterval = () => {
        this.intervalID = setInterval(() => {
            this.plusSlides(1)
        }, 5000);
    };

    showSlides = (n) => {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            this.slideIndex = 1
        }    
        if (n < 1) {
            this.slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        if (slides[this.slideIndex-1]) {
            slides[this.slideIndex-1].style.display = "block"; 
        }
        if (dots[this.slideIndex-1]) {
            dots[this.slideIndex-1].className += " active";
        }
        
    };

    render() {
        const imageArr = [img1,img2,img3];

        const slideImages = imageArr.map((imageSrc,idx) => {
            return (
                <div className="mySlides fade" key={idx}>
                    <img src={imageSrc} alt="Camping"/>
                </div>
            );
        });

        const imageDots = imageArr.map((imgForDot,idx) => {
            return (
                <span className="dot" key={idx} onClick={() => this.currentSlide(idx+1)}></span>
            );
        });

        return (
            <div className="slideshow-container">

                {slideImages}

                <span className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</span>
                <span className="next" onClick={() => this.plusSlides(1)}>&#10095;</span>

                <div id="dot-container">
                    {imageDots}
                </div>

            </div>
        );
    };
};

export default Slideshow;
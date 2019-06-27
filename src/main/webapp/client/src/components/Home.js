import React, {Component } from 'react';
import './Home.css';
import img1 from '../static/camp1copy.jpg';
import img2 from '../static/camp2copy.jpg';
import img3 from '../static/camp3copy.jpg';

class Home extends Component {

    componentDidMount(){
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
        this.intervalID = setInterval(() => {
            this.plusSlides(1)
        }, 5000);
    }
    
    plusSlides = (n) => {
        this.showSlides(this.slideIndex += n);

        clearInterval(this.intervalID);

        this.intervalID = setInterval(() => {
        this.plusSlides(1)
        }, 5000);
    }

    showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {this.slideIndex = 1}    
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        if(slides[this.slideIndex-1]){
            slides[this.slideIndex-1].style.display = "block"; 
        }
    }

    render(){
        return (
            <div className="slideshow-container">

                <div className="mySlides fade">
                    <img src={img1} alt="img"/>
                    <div className="text">Caption Text</div>
                </div>

                <div className="mySlides fade">
                    <img src={img2} alt="img"/>
                    <div className="text">Caption Two</div>
                </div>

                <div className="mySlides fade">
                    <img src={img3} alt="img"/>
                    <div className="text">Caption Three</div>
                </div>

                <span className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</span>
                <span className="next" onClick={() => this.plusSlides(1)}>&#10095;</span>

            </div>
        )
    }
};

export default Home;
import React,{useState,useEffect} from 'react'
import speaker from "../../assets/Hero-Section/speaker.jpg";
import iphone from "../../assets/Hero-Section/i-phone.jpg";
import earbuds from "../../assets/Hero-Section/earbuds.jpg";
import macbook from "../../assets/Hero-Section/macbook.jpg";

export default function HeroSections() {
    const [currentSlide, setCurrentSlide] = useState(1); // Track the current slide

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1)); // Auto-slide logic
      }, 3000); // 3000ms = 3 seconds
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  
    return (
      <div className="carousel w-full">
        <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
          <img
            src={macbook}
            className="w-full h-[30vh] md:h-[44vh] lg:h-[80vh]"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle" onClick={() => setCurrentSlide(4)}>❮</a>
            <a href="#slide2" className="btn btn-circle" onClick={() => setCurrentSlide(2)}>❯</a>
          </div>
        </div>
        <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
          <img
            src={iphone}
            className="w-full h-[30vh] md:h-[44vh] lg:h-[80vh]"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle" onClick={() => setCurrentSlide(1)}>❮</a>
            <a href="#slide3" className="btn btn-circle" onClick={() => setCurrentSlide(3)}>❯</a>
          </div>
        </div>
        <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
          <img
            src={earbuds}
            className="w-full h-[30vh] md:h-[44vh] lg:h-[80vh]"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle" onClick={() => setCurrentSlide(2)}>❮</a>
            <a href="#slide4" className="btn btn-circle" onClick={() => setCurrentSlide(4)}>❯</a>
          </div>
        </div>
        <div id="slide4" className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
          <img
            src={speaker}
            className="w-full h-[30vh] md:h-[44vh] lg:h-[80vh]"
            alt="Slide 4"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle" onClick={() => setCurrentSlide(3)}>❮</a>
            <a href="#slide1" className="btn btn-circle" onClick={() => setCurrentSlide(1)}>❯</a>
          </div>
        </div>
      </div>
    );
}

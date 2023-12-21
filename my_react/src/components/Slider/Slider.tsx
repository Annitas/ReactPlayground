import { useState } from "react";
import classes from './Slider.module.css'

interface Slide {
    url: string;
    name: string;
    role: string;
    comment: string;
  }
  
  interface SliderProps {
    slides: Slide[];
  }
  
  const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };
  
    return (
      <>
        <div className={classes.slider}>
          <h1 className={classes.customer_saying}>What our customer are saying</h1>
          <hr className={classes.slider_line}/>
          <div className={classes.slider_content}>
            <img className={classes.slider_image} src={slides[currentSlide].url} alt={slides[currentSlide].name} />
            <div className={classes.slider_customer_block}>
              <h2 className={classes.slider_customer_name}>{slides[currentSlide].name}</h2>
              <span className={classes.slider_customer_role}>{slides[currentSlide].role}</span>
            </div>
            <div className={classes.slider_description_block}>
              <text className={classes.slider_customer_comment}>{slides[currentSlide].comment}</text>
            </div>
          </div>
        </div>
        <div className={classes.slider_buttons}>
          <button className={classes.slider_button} onClick={prevSlide}><img className={classes.image} src="../src/assets/leftarrow.png" alt="portlandlogo"/></button>
          <ul className={classes.slider_dots}>
            {slides.map((slide, index) => (
            <li key={index.toString()} className={index == currentSlide ? "slider-dot active" : "slider-dot inactive"} 
                onClick={() => setCurrentSlide(index)}>
              
            </li>
            ))}
          </ul>
          <button className={classes.slider_button} onClick={nextSlide}><img className={classes.image} src="../src/assets/rightarrow.png" alt="portlandlogo"/></button>
        </div>
       </> 
    );
    
    
  };


  const SliderApp: React.FC = () => {
    const text: string = "Our dedicated patient engagement app and" +
                          "web portal allow you to access information instantaneously (no tedeous form, long calls," +
                          " or administrative hassle) and securely";
    const slides: Slide[] = [
      { url: "../src/assets/firstcat.png", name: "Bubbles", role: "Jokes expert", "comment": text },
      { url: "../src/assets/secondcat.png",  name: "Kit-Kat", role: "Bath lover", "comment": text  },
      { url: "../src/assets/thirdcat.png",  name: "Meowise", role: "Meow", "comment": text },
      { url: "../src/assets/fourthcat.png",  name: "Katy Purry", role: "Woooow", "comment": text },
    ];
  
    return (
      <div className="app">
        <Slider slides={slides} />
      </div>
    );
  };
  
  export default SliderApp;
  
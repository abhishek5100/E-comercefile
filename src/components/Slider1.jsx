import React from 'react';
import Slider from 'react-slick'; // If using react-slick
import 'slick-carousel/slick/slick.css'; // If using react-slick
import 'slick-carousel/slick/slick-theme.css'; // If using react-slick
import pic1 from "./images/Coffee 1.jpg"
import pic3 from "./images/Coffee 3.jpg"
import pic4 from "./images/Coffee 3.webp"
import pic5 from "./images/Coffee 4.jpg"
import pic6 from "./images/Coffee 4.webp"
import pic7 from "./images/Coffee 5.webp"
import pic8 from "./images/Coffee 6.webp"


const Slider1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        
    };

    return (
       <div className='p-5'>
         <Slider {...settings}>
            <div>
                <img src={pic1} alt="" />
            </div>
          
            <div>
                <img src={pic3} alt="" />
            </div>
             <div>
                <img src={pic4} alt="" />
            </div> 
            <div>
                <img src={pic5} alt="" />
            </div>
             <div>
                <img src={pic6} alt="" />
            </div> 
            <div>
                <img src={pic7} alt="" />
            </div> 
            <div>
                <img src={pic8} alt="" />
            </div> 
        
            {/* Add more slides as needed */}
        </Slider>
       </div>
    );
};

export default Slider1;

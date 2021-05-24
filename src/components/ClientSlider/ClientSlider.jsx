import Slider from 'react-slick'
import image from './images/example.png'
import '../../styles/components/clientSlider.css'
import { useState } from 'react';

const images = [image, image, image, image, image, image, image]

export default function ClientSlider(){

    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        className:'center',
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0,
        dots: true,
        dotsClass: 'slick-dots',
        beforeChange: (current, next) => setImageIndex(next),
    }

    return(
        <div id="clientSlider">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div className={idx === imageIndex ? "clientSlide activeClientSlide" : "clientSlide"}>
                        <img className="image" src={img} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
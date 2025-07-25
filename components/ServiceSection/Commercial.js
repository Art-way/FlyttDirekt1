import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from '../../api/service'
import Link from "next/link";
import Image from "next/image";

const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Commercial = () => {
    return (
        <div className="wpo-service-wrap wpo-service-slide">
            <Slider {...settings}>
                {Services.slice(6, 12).map((service, srv) => (
                    <div className="wpo-service-item" key={srv}>
                        <div className="wpo-service-icon">
                            <div className="icon">
                                <Image src={service.sIcon} alt="" />
                            </div>
                        </div>
                        <div className="wpo-service-text">
                            <h2><Link onClick={ClickHandler} href="/[slug]" as={`/${service.slug}`}>{service.sTitle}</Link></h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Commercial;
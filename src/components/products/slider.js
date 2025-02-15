import React from 'react';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Slider = () => {
    return (
        <div className=" h-[334px]">
            <SlickSlider {...settings}>
                <div className="h-[334px]">
                    <Image
                        width={900}
                        height={1000}
                        className="w-full h-full"
                        src="https://wallpapers.com/images/high/anime-pictures-bj226rrdwe326upu.webp"
                        alt="Anime Wallpaper"
                    />
                </div>
                <div className="h-[334px]">
                    <Image
                        width={900}
                        height={1000}
                        className="w-full h-full"
                        src="https://wallpapers.com/images/high/trafalgar-law-one-piece-adoptive-father-corazon-jnycc26ry563q7sc.webp"
                        alt="Trafalgar Law Wallpaper"
                    />
                </div>
                <div className="h-[334px]">
                    <Image
                        width={900}
                        height={1000}
                        className="w-full h-full"
                        src="https://wallpapers.com/images/high/one-piece-pictures-e00ebjeuzkkfoe42.webp"
                        alt="One Piece Wallpaper"
                    />
                </div>
            </SlickSlider>
        </div>
    );
};

export default Slider;
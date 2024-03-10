import React, { useState } from "react";

import { ScrollToLeft, ScrollToRight, ScrollToTop } from "./arrows/Arrow";


const CarouselSettings = () => {
  const [isActive, setIsActive] = useState({ left: false, right: true });


  const activateRight = () => { setIsActive({ left: false, right: true }) };

  const activateLeft = () => { setIsActive({ left: true, right: false }) };

  const carouselSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    initialSlide: 0,
    slidesToScroll: 1,
    nextArrow: <ScrollToRight onActive={activateRight} isActive={isActive.right} />,
    prevArrow: <ScrollToLeft onActive={activateLeft} isActive={isActive.left} />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          autoplay: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          nextArrow: <ScrollToRight onActive={activateRight} isActive={isActive.right} />,
          prevArrow: <ScrollToLeft onActive={activateLeft} isActive={isActive.left} />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
          vertical: true,
          slidesToShow: 3,
          draggable: true,
          prevArrow: null,
          slidesToScroll: 1,
          verticalSwiping: true,
          nextArrow: <ScrollToTop />,
        },
      },
    ],
  }
  return { carouselSettings };
}

export default CarouselSettings;
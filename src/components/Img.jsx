import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeHolder from '../assets/placeHolder.jpg'


const Img = ({ src }) => {
    return (
        <LazyLoadImage
            className="h-[157.5px] w-[280px]"
            alt="image"
            effect="blur"
            src={src || placeHolder}
        />
    );
};

export default Img;
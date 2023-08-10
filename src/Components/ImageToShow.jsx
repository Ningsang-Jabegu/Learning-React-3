import React from "react";
import pic1 from "../images/katie-zaferes.png";
import pic2 from "../images/wedding-photography.png";
import pic3 from "../images/mountain-bike.png";
export default function ImageToShow(props) {
    let image
    if(props.imgNo === "Katie Zaferes"){
        image = pic1
    } else if(props.imgNo === "Wedding Photography") {
        image = pic2
    }else if(props.imgNo === "Mountain Biking") {
        image = pic3
    }
    return(
        <img src={image} alt={`${props.imgNo}`} className="card--image"/>
    )
}
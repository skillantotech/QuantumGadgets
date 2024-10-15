import React from "react";
import earbud from "../../assets/Category-Section/earbud-c.webp";
import speaker from "../../assets/Category-Section/speaker.png";
import mobile from "../../assets/Category-Section/mobile-c.png";
import tablet from "../../assets/Category-Section/tab-c.png";
import headphone from "../../assets/Category-Section/headphone-c.png";
import laptop from "../../assets/Category-Section/lappy-c.png";
import desktop from "../../assets/Category-Section/desktop-c.png";
import powerbank from "../../assets/Category-Section/powerbank-c.png";

export default function CategoryCards() {
  let productList = [
    {
      image: mobile,
      category: "Mobile",
    },
    {
      image: laptop,
      category: "Laptop",
    },
    {
      image: tablet,
      category: "Tablet",
    },
    {
      image: mobile,
      category: "Mobile",
    },
    {
      image: headphone,
      category: "Headphone",
    },
    {
      image: earbud,
      category: "Earbuds",
    },
    {
      image: speaker,
      category: "Speaker",
    },
    {
      image: powerbank,
      category: "PowerBank",
    },

    {
      image: desktop,
      category: "Desktop",
    },
    {
      image: mobile,
      category: "Mobile",
    },
  ];
  return (
    <>
      {productList.map((product,index) => (
        <div className="item mr-2 md:mr-8 lg:mr-16 " key={index}>
          <div className=" bg-gray-400 w-16 md:w-20 lg:w-24 rounded-full overflow-hidden ">
            <img src={product.image} alt="photo" />
          </div>
          <p className=" text-sm md:mt-2 font-medium text-gray-500 text-center">
            {product.category}
          </p>
        </div>
      ))}

   
    </>
  );
}

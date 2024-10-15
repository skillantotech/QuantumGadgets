import React from "react";
import Oppo from "../../assets/New-Arrival/Oppo.png";
import SmartSpeaker from "../../assets/New-Arrival/SmartSpeaker.png";
import AppleDesktop from "../../assets/New-Arrival/AppleDesktop.png";
import HpPavilion from "../../assets/New-Arrival/HP-Pavilion.png";

export default function NewArrival() {
  let newArrivalProductList = [
    { image: Oppo, productName: "Oppo A78", discount: "Upto 40% Off" },
    {
      image: SmartSpeaker,
      productName: "Smart Speaker",
      discount: "Upto 20% Off",
    },
    {
      image: AppleDesktop,
      productName: "Apple Desktop",
      discount: "Upto 30% Off",
    },
    { image: HpPavilion, productName: "Hp Pavilion", discount: "Upto 10% Off" },
    { image: HpPavilion, productName: "Hp Pavilion", discount: "Upto 10% Off" }
  ];

  return (
    <div className="w-4/5 mx-auto my-1 md:my-2 lg:my-5  ">
         <h3 className="font-medium mb-2 text-lg">New Arrivals</h3>
      <div className="flex justify-between flex-wrap ">
       
        {newArrivalProductList.map((product,index) => 
          <div className="productCard  mb-3 shadow-md" key={index}>
            <div className="w-36 md:w-40 lg:w-full ">
              <img src={product.image} alt="photo" />
            </div>
            <div className="text-center bg-gray-200 lg:p-2">
              <h4 className="font-semibold text-sm">{product.productName}</h4>
              <p className="text-xs text-[#3B82F6]">{product.discount}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

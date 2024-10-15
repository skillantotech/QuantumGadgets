import React from 'react'
import Tablet from '../../assets/WeeklyDeal-Section/Tablet.png'
import Earbud from '../../assets/WeeklyDeal-Section/boatEarbud.png'
import Speaker from '../../assets/WeeklyDeal-Section/boatspeaker.png'
import Headphone from '../../assets/WeeklyDeal-Section/Headphone.png'
function WeeklyDeal() {
    let weeklyDealsProduct = [
        { image: Tablet, productName: "Tablet", discount: "Upto 40% Off" },
        {
          image: Earbud,
          productName: "Earbuds",
          discount: "Upto 20% Off",
        },
        {
          image: Speaker,
          productName: "Boat Speaker",
          discount: "Upto 30% Off",
        },
        {
            image: Headphone,
            productName: "Headphones ",
            discount: "Upto 30% Off",
          }
       
      ];
  return (
    <div className="w-4/5 mx-auto my-1 md:my-2 lg:my-5  ">
    <h3 className="font-medium mb-2 text-lg">Weakly Deals</h3>
 <div className="flex justify-between flex-wrap ">
  
   {weeklyDealsProduct.map((product,index) => 
     <div className="productCard  mb-3 shadow-md lg:w-[24%]" key={index}>
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
  )
}

export default WeeklyDeal

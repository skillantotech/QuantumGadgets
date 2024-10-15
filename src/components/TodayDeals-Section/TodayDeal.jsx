import React from 'react'

import airpurifier from '../../assets/TodayDeal/AirPurifier.png'
import earbuds from '../../assets/TodayDeal/Earbuds.png'
import mobile from '../../assets/TodayDeal/Mobile.png'
import speaker from '../../assets/TodayDeal/Speaker.png'


export default function TodayDeal() {

    let todayDealsProduct = [
        { image: airpurifier, productName: "Air  Purifier", discount: "Upto 40% Off" },
        {
          image: earbuds,
          productName: "Earbuds",
          discount: "Upto 20% Off",
        },
        {
          image: mobile,
          productName: "I-Phone-16",
          discount: "Upto 30% Off",
        },
        {
            image: speaker,
            productName: "Boat Smart Speaker ",
            discount: "Upto 30% Off",
          }
       
      ];
  return (
    <div className="w-4/5 mx-auto my-1 md:my-2 lg:my-5  ">
    <h3 className="font-medium mb-2 text-lg">Toady Deals</h3>
 <div className="flex justify-between flex-wrap ">
  
   {todayDealsProduct.map((product,index) => 
     <div className="productCard  mb-3 shadow-md lg:w-[32%]" key={index}>
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

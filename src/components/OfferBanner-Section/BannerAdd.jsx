import React from 'react'
import Headphone from '../../assets/Offer-Banner/Headphone.png'
import Earphone from '../../assets/Offer-Banner/wireless-earbuds.png'
export default function BannerAdd() {
  return (
    <div className="w-4/5 mx-auto my-1 md:my-2 lg:my-5 flex justify-between">
      <img src={Headphone} width="48%" />
      <img src={Earphone} alt="" width="48%"/>
    </div>
  )
}

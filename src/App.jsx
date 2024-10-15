
import './App.css'

import Category from './components/Category-Section/Category'
import Example from './components/Example'



import HeroSections from './components/Hero-Section/HeroSections'
import Login from './components/Login-Section/Login'
import NewArrival from './components/NewArrival-Section/NewArrival'
import BannerAdd from './components/OfferBanner-Section/BannerAdd'
import TodayDeal from './components/TodayDeals-Section/TodayDeal'
import WeeklyDeal from './components/WeeklyDeal-Section/WeeklyDeal'


function App() {
 

  return (
  <>
  <HeroSections/>
 <Example/>
  {/* <Category/> */}
  <NewArrival/>
  {/* <Login/> */}
 <BannerAdd/>
//  <TodayDeal/>
<WeeklyDeal/>
  </>
  )
}

export default App

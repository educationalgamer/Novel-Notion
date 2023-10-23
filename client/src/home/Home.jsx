import Banner from "../components/Banner"
import BestSellerBooks from './BestSellerBooks'
import FavBook from "./FavBook"
import OtherBooks from "./OtherBooks"
import PromoBanner from './PromoBanner'
import MyFooter from '../components/MyFooter'
const Home = () => {
  return (
    <div>
 <Banner/>
 <BestSellerBooks/>
 <FavBook/>
 <PromoBanner/>
 <OtherBooks/>
  <MyFooter/>
    </div>
  
    
  )
}

export default Home

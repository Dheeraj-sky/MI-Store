import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import Slider from './components/Slider.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import DATA from "./data/data.js"
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import Starproduct from './components/Starproduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'


function App() {
  return (
     <Router>
     <PreNavbar/>
     <Navbar/>
     <Slider start={DATA.banner.start}/>
     <Offers offer={DATA.offer}/>
     <Heading text="STAR PRODUCTS" />
     <Starproduct star={DATA.starProduct}/>
     <Heading text="HOT ACCESSORIES"/>
     <HotAccessoriesMenu/>
     <Routes>
     <Route exact path="/music" 
     element={<HotAccessories music={DATA.hotAccessories.music} musicCover={DATA.hotAccessoriesCover.music}/>}/>

<Route exact  path="/smartDevice" 
 element={ <HotAccessories smartDevice={DATA.hotAccessories.smartDevice} smartDeviceCover={DATA.hotAccessoriesCover.smartDevice} /> }  />


<Route exact  path="/home"
 element={ <HotAccessories home={DATA.hotAccessories.home} homeCover={DATA.hotAccessoriesCover.home} /> }  />

<Route exact  path="/lifestyle"
 element={ <HotAccessories lifestyle={DATA.hotAccessories.lifeStyle} lifestyleCover={DATA.hotAccessoriesCover.lifeStyle} /> }  />

<Route exact  path="/mobileAccessories"
 element={ <HotAccessories mobileAccessories={DATA.hotAccessories.mobileAccessories} mobileAccessoriesCover={DATA.hotAccessoriesCover.lifeStyle} /> }  />
     </Routes>

     <Heading text="PRODUCT REVIEWS"/>
     <ProductReviews ProductReviews={DATA.productReviews}/>
     
     <Heading text="VIDEOS"/>
     <Videos Video={DATA.videos} />

     <Heading text="IN THE PRESS"/>
     <Banner banner={DATA.banner} />

       <Footer footer={DATA.footer}/>     


     </Router>
  );
}

export default App;

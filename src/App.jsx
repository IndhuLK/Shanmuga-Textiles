import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavFoot/Navbar";
import Home from "./Components/Home/Home";
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/NavFoot/Footer";
import WomenWear from "./Components/Women/WomenWear";
import StitchingService from "./Components/Stitching/StitchingService";
import KurtiwithPants from "./Components/Women/KurtiwithPants";
import AariWorkPage from "./Components/Stitching/AariWorkPage";
import Kids from "./Components/KidsWear/Kids";
import BirthdayDresses from "./Components/KidsWear/BirthdayDresses";
import MomDaughter from "./Components/Collections/MomDaughter";
import CollectionsCombo from "./Components/Collections/CollectionsCombo";
import MainTab from "./Components/Collections/MainTab";
import SareesCol from "./Components/Sarees/SareesCol";
import LehengaStitching from "./Components/Stitching/LehengaStitching";
import ChudiStitching from "./Components/Stitching/ChudiStitching";
import UmbrellaStitching from "./Components/Stitching/UmbrellaStitching";
import CholiStitching from "./Components/Stitching/CholiStitching";
import SkirtStitching from "./Components/Stitching/SkirtStitching";
import CottonSaree from "./Components/Sarees/CottonSaree";
import MysoreCotton from "./Components/Sarees/MysoreCotton";
import SilkSaree from "./Components/Sarees/SilkSaree";
import SareeComboOffer from "./Components/Sarees/SareeComboOffer";
import Blouse from "./Components/Blouse/Blouse";
import BittuKurti from "./Components/Women/BittuKurti";
import KurtiReliance from "./Components/Women/KurtiReliance";
import PlazzoSet from "./Components/Women/PlazzoSet";
import CottonTop from "./Components/Women/CottonTop";
import DigitalTop from "./Components/Women/DigitalTop";
import WesternTop from "./Components/Women/WesternTop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sarees" element={<SareesCol />} />
          {/*Submenu */}
          <Route path="/sarees/cotton-saree" element={<CottonSaree />} />
          <Route path="/sarees/Mysore-Silk-Cotton" element={<MysoreCotton />} />
          <Route path="/sarees/silk-sarees" element={<SilkSaree />} />
          <Route path="/sarees/Saree-Combo-Offer" element={<SareeComboOffer />} />

          <Route path="/women" element={<WomenWear />} />
          {/*Submenu */}
          <Route path="/women/kurtis" element={<KurtiwithPants />} />
          <Route path="/women/kurti-maxi" element={<BittuKurti />} />
          <Route path="/women/kurti-reliance-brand" element={<KurtiReliance />} />
          <Route path="/women/plazzo-set" element={<PlazzoSet/>} />
          <Route path="/women/cotton-top" element={<CottonTop/>} />
          <Route path="/women/digital-top" element={<DigitalTop/>} />
          <Route path="/women/western-top" element={<WesternTop/>} />


          <Route path="/services" element={<StitchingService />} />
          {/*Stitching designs */}
          <Route path="/aari-work" element={<AariWorkPage />} />
          <Route path="/lehenga-stitching" element={<LehengaStitching />} />
          <Route path="/chudi-stitching" element={<ChudiStitching />} />
          <Route path="/umbrella-frock" element={<UmbrellaStitching />} />
          <Route path="/choli-stitching" element={<CholiStitching />} />
          <Route path="/skirt-and-top" element={<SkirtStitching />} />
          
          <Route path="/blouse" element={<Blouse />} />

          <Route path="/kids" element={<Kids />} />
          {/*Submenu */}
          <Route path="/kids/birthday-dress" element={<BirthdayDresses />} />
          <Route path="/collections" element={<CollectionsCombo />} />
          {/*Submenu */}
          <Route path="/collections/mom-kid/combo-sets" element={<MainTab />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import './App.css';
import HeaderArea from './components/HeaderArea';
import OurStory from './components/OurStory';
import OurServices from './components/OurServices';
import {PricingPlans, CtaArea }from './components/PricingPlans';
import BlogNews from './components/BlogNews';
import OurClients from './components/OurClients';
import Accordions from './components/Accordions';
import ContactUs from './components/ContactUs';
import ContactMap from './components/ContactMap';
import AfterLoad from './components/AfterLoad';

function Home() {

  return (
    <div>
      <HeaderArea />
      {/* <AfterLoad /> */}
      <OurStory />
      <OurServices />
      <PricingPlans />
      <CtaArea />
      <BlogNews />
      <OurClients />
      <Accordions />
      <ContactUs />
      <ContactMap />
    </div>
  );
}

export default Home;
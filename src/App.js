import './App.css';
import Navbar from './components/Navbar';
import HeaderArea from './components/HeaderArea';
import OurStory from './components/OurStory';
import OurServices from './components/OurServices';
import {PricingPlans, CtaArea }from './components/PricingPlans';
import BlogNews from './components/BlogNews';
import OurClients from './components/OurClients';
import ContactUs from './components/ContactUs';
import ContactMap from './components/ContactMap';
import FooterArea from './components/FooterArea';
import Accordions from './components/Accordions';

function App() {

  return (
    <div>
      <Navbar title="FAQ" link='#faq'/>
      <HeaderArea />
      <Accordions />
      <OurStory />
      <OurServices />
      <PricingPlans />
      <CtaArea />
      <BlogNews />
      <OurClients />
      <ContactUs />
      <ContactMap />
      <FooterArea />
    </div>
  );
}

export default App;
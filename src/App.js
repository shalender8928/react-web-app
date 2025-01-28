// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Layout from './Layout.js';
import Home from './Home.js';
import NoPage from './NoPage.js';
// import Navbar from './components/Navbar';
// import HeaderArea from './components/HeaderArea';
// import OurStory from './components/OurStory';
// import OurServices from './components/OurServices';
// import {PricingPlans, CtaArea }from './components/PricingPlans';
import BlogNews from './components/BlogNews';
// import OurClients from './components/OurClients';
import ContactUs from './components/ContactUs';
// import ContactMap from './components/ContactMap';
// import FooterArea from './components/FooterArea';
// import Accordions from './components/Accordions';
import Login from './pages/Login';

function App() {

  return (
    /*<div>
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

      <Router>
        <Routes>
          <Route path="/accordion" exact element={<Accordions />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>*/

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/blogs/" element={<BlogNews />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/contact/" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
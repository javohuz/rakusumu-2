import React from "react";
import Header from "../components/Header";
import Logo_slider from "../components/Logo_slider";
import Section_2 from "../components/Section_2";
import Section_3 from "../components/Section_3";
import Customer_Reviews from "../components/Customer_Reviews";
import Footert_top_box from "../components/Footert_top_box";
import Section_4 from "../components/Section_4";
import Real_estate_steps from "../components/Real_estate_steps";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

import "../styles/main.css";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Logo_slider />
      <Section_2 />
      <Section_3 />
      <Customer_Reviews />
      <Footert_top_box />
      <Section_4 />
      <Real_estate_steps />
      <FAQ />
      <Footer />
    </div>
  );
};

export default IndexPage;

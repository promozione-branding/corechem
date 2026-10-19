import Footer from "@/components/Inquiry/Footer";
import Header from "@/components/Inquiry/Header";
import Hero from "@/components/Inquiry/Hero";
import React from "react";
import WhyChoose from "@/components/Inquiry/WhyChoose";
import Products from "@/components/Inquiry/Products";
import CTAL from "@/components/Inquiry/CTAL";
import Industry from "@/components/Inquiry/Industry";
import Contact from "@/components/Inquiry/Contact";
import BCTA from "@/components/Inquiry/BCTA";
import Whychoose2 from "@/components/Inquiry/Whychoose2";
import FeatureStripInquiry from "@/components/Inquiry/FacilitybarInquiry";
import TabForm from "@/components/Inquiry/TabForm";

export default function Inquiry() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <FeatureStripInquiry></FeatureStripInquiry>
      <Products></Products>
      <TabForm/>
      <WhyChoose></WhyChoose>
      {/* <AboutUsSection></AboutUsSection> */}
      <Whychoose2></Whychoose2>

      <CTAL></CTAL>
      <Industry></Industry>
      <Contact></Contact>
      <BCTA></BCTA>

      <Footer></Footer>
    </>
  );
}

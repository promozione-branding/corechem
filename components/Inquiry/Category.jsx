"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import dynamic from 'next/dynamic';
const ContactForm = dynamic(() => import("../Popup"), {
  ssr: false,
  loading: () => null,
});

const categories = [
  {
    name: "Titanium Dioxide",
    image: "/prod/Titanium Dioxide (TiO₂) – Tipure r902 (2).webp",
  },
  {
    name: "Titanium Rutile",
    image: "/prod/Titanium Dioxide Rutile.webp",
  },
  {
    name: "Color Pigment",
    image: "/prod/Orange Colour Pigment.webp",
  },
  {
    name: "Pigment Powder",
    image: "/prod/Pigment Colour Powder.webp",
  },
  {
    name: "Lithopone",
    image: "/prod/Lithopone Chemical (2).webp",
  },
  {
    name: "Carbon Black",
    image: "/prod/N330 Carbon Black.webp",
  },
];

function CategoryCard({ category ,setIsOpen}) {
    // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div onClick={() => setIsOpen(true)} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-48 md:h-60 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-[#062347] text-center  flex items-center justify-center">
          {category.name}
        </h3>

        <div>
        <a onClick={(e)=>{e.stopPropagation()}}   href="https://wa.me/919818544039" className="mt-3 w-full text-center block bg-[#c8921c] text-white py-2.5 rounded-xl font-medium hover:bg-[#b88418] transition">
           Enquire Now
        </a>
        </div>
      </div>
    </div>
       

    </>
  );
}


export default function Category() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <section className="py-4 md:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#062347]">
            Our Categories
          </h2>
          {/* <p className="text-[#c8921c] md:text-2xl mt-2">Our Cat</p> */}
        </div>

        
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
          {categories.map((category, index) => (
            <CategoryCard isOpen={isOpen} setIsOpen={setIsOpen} key={index} category={category} />
          ))}
        </div>

        {/* Desktop Slider */}
         <div className="hidden lg:block">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={1000}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <CategoryCard isOpen={isOpen} setIsOpen={setIsOpen} category={category} />
              </SwiperSlide>
            ))}
          </Swiper> 
        </div> 
 </div>
    </section>

     {isOpen && <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />}

    </>
  );
}

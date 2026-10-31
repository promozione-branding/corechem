"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoLogoWhatsapp } from "react-icons/io";
import { handleWhatsappClick } from "@/lib/track";

const products = [
  {
    id: "titanium-dioxide-jinhai-r6618",
    image: "/prod/extra/Jinhai R6618(T).webp",
    grade: "Titanium Dioxide (TiO₂) – Jinhai",
    code: "R-6628",
    desc: "High brightness and excellent durability for applications.",
  },
  {
    id: "kronos-titanium-dioxide",
    image: "/prod/Kronos Titanium Dioxide.webp",
    grade: "Titanium Dioxide Kronos",
    code: "R-2310",
    desc: "Premium titanium dioxide with excellent opacity.",
  },
  {
    id: "titanium-dioxide-kmml-822",
    image: "/prod/Titanium Dioxide (TiO₂) – Kmml-822.webp",
    grade: "Titanium Dioxide (TiO₂) - KMML",
    code: "822 + PG",
    desc: "Excellent dispersibility and strong hiding power.",
  },
  {
    id: "titanium-dioxide-venator-tr92",
    image: "/prod/Titanium Dioxide (TiO₂) – Venator TR92.webp",
    grade: "Titanium Dioxide (TiO₂) - Venator",
    code: "TR92",
    desc: "High whiteness and ideal for indoor applications.",
  },
  {
    id: "titanium-dioxide-kronos-r2220",
    image: "/prod/Titanium Dioxide Kronos R2220.webp",
    grade: "Titanium Dioxide Kronos",
    code: "R-2220",
    desc: "Premium titanium dioxide with excellent opacity.",
  },
  {
    id: "titanium-dioxide-dawn-r2195",
    image: "/prod/Titanium Dioxide (TiO₂) –Dawn-2195.webp",
    grade: "Titanium Dioxide (TiO₂) - Dawn",
    code: "2195",
    desc: "Premium titanium dioxide with excellent opacity.",
  },
  {
    id: "titanium-dioxide-r248",
    image: "/prod/R-248 Titanium dioxide.webp",
    grade: "Titanium Dioxide R248",
    code: "R-248",
    desc: "Premium titanium dioxide with excellent opacity.",
  },
];

export default function Products() {
  return (
    <section className="py-8 bg-slate-50">
      <div className=" mx-auto px-4">
        <div className="text-center mb-5 md:mb-12">
          <span className="text-[#C8921C] font-semibold uppercase tracking-wider">
            Our Products
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#062347] mt-3">
            Titanium Dioxide Grades
          </h2>


        </div>

        <Swiper
          className="py-10"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={25}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md h-112 transition flex flex-col"
              >
                {/* PRODUCT IMAGE + CONTENT (CLICKABLE) */}
                <Link href={`/products/${product.id}`} className="block flex-1">
                  <Image
                    src={product.image}
                    alt={product.id}
                    width={300}
                    height={200}
                    title={product.name}
                    className="w-full h-80 object-cover"
                  />

                  <div className="p-3">
                    <h2 className="text-lg text-center font-semibold">
                      {product.grade}
                    </h2>

                    {product.price && (
                      <p className="text-gray-600 text-center">{product.price}</p>
                    )}
                  </div>
                </Link>

                <div className="px-3 pb-3! mt-auto">
                  <a onClick={() => handleWhatsappClick({ source: "Website city page", obj: product.grade })}
                    href={`https://wa.me/919818544039?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(
                      product.grade
                    )}%20.%20Please%20share%20the%20price.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#c8921c] flex justify-center items-center gap-2 text-white px-3 py-2 rounded-md font-medium hover:bg-[#a87412] transition w-full"
                  >
                    Get More Details
                    <IoLogoWhatsapp size={22} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
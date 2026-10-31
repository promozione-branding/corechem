"use client"
import { handleWhatsappClick } from '@/lib/track'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Category({ category }) {
    return (
        <>
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/parallex.jpg')" }}
                className="w-full bg-cover bg-center h-[50vh]  relative"
            >
                <div className="px-5 absolute inset-0 text-center flex items-center justify-center ">
                    <h2 className=" text-[#2B4D9D] bg-white p-3 text-2xl md:text-6xl font-bold z-10">
                        {category.name}
                    </h2>
                </div>
            </section>

            {/* Products Grid */}
            <div className="p-10  mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {category.products.map((product, index) => (
                        <div
                            key={product.id}
                            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                        >
                            {/* PRODUCT IMAGE + CONTENT (CLICKABLE) */}
                            <Link href={`/products/${product.id}`} className="block flex-1">
                                <Image
                                    src={product.image[0]?.src || "/placeholder.png"}
                                    alt={product.image[0]?.alt || product.name}
                                    width={300}
                                    height={200}
                                    title={product.name}
                                    className="w-full h-80 object-cover"
                                />

                                <div className="p-3">
                                    <h2 className="text-lg text-center font-semibold">
                                        {product.name}
                                    </h2>

                                    {product.price && (
                                        <p className="text-gray-600 text-center">{product.price}</p>
                                    )}
                                </div>
                            </Link>

                            <div className="px-3 pb-3! mt-auto">
                                <a
                                    href={`https://wa.me/919818544039?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(
                                        product.name
                                    )}%20.%20Please%20share%20the%20price.`}
                                    onClick={() => handleWhatsappClick({ source: "Website product page", obj: product.name })}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-[#2B4D9D] to-[#4B3089] flex justify-center items-center gap-2 text-white px-3 py-2 rounded-md font-medium hover:bg-[#a87412] transition w-full"
                                >
                                    Get Instant Price
                                    <IoLogoWhatsapp size={22} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

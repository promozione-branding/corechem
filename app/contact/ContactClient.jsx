"use client";

import { useState } from "react";
import axios from "axios";

import { Phone, Mail, MapPin, ArrowRight, Send } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [place, setplace] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const webisteUrl = window.location.hostname + window.location.pathname;
      const formData = {
        platform: webisteUrl || "Corechem Contact Form",
        supplierToken: "6a1965202b56a9ede272a9ca",

        platformEmail: "corechemcorporation@gmail.com",
        name,
        phone,
        email,
        place,
        product: requirement,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData,
      );

      if (data?.success) {
        setStatus("success");

        setName("");
        setPhone("");
        setEmail("");
        setplace("");
        setRequirement("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);

      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden bg-[#f8fafc]">
      {/* HERO SECTION */}
      <section
        style={{ backgroundImage: "url('/parallex2.jpg')" }}
        className="relative flex min-h-[65vh] items-center justify-center overflow-hidden bg-cover bg-center"
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/35" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/70 via-white/40 to-blue-100/70" />

        {/* BLUR EFFECTS */}
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-orange-200/40 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-200/40 blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl px-6 mb-10 text-center">
          <h1 className=" text-5xl font-extrabold leading-tight text-[#1e293b] md:text-7xl">
            Let’s Build Reliable Chemical Supply Partnerships
          </h1>




        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="relative z-20 -mt-24 px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {/* PHONE */}
          <div className="rounded-[30px] border border-white bg-white/90 p-8 shadow-[0_15px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition hover:-translate-y-1">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-[#4B3089]">
              <Phone className="h-8 w-8" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#1e293b]">
              Call Anytime
            </h3>

            <p className="mt-4 text-lg text-slate-600">+91 9818544039</p>

            <p className="text-lg text-slate-600">+91 9250056235</p>
          </div>

          {/* EMAIL */}
          <div className="rounded-[30px] border border-white bg-white/90 p-8 shadow-[0_15px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition hover:-translate-y-1">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Mail className="h-8 w-8" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#1e293b]">
              Email Address
            </h3>

            <p className="mt-4 break-all text-lg text-slate-600">
              info@corechemcorp.com
              <br />
              sales@corechemcorp.com
            </p>
          </div>

          {/* ADDRESS */}
          <div className="rounded-[30px] border border-white bg-white/90 p-8 shadow-[0_15px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition hover:-translate-y-1">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-[#4B3089]">
              <MapPin className="h-8 w-8" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#1e293b]">
              Office Address
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Office No- 101-E, Crown Heights, Swarn Jayanti Park, Sector 10, Rohini, Delhi, 110085
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="relative py-12 md:py-24">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/50 to-blue-50/50" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <span className="font-semibold uppercase tracking-wide text-[#2B4D9D]">
              Get In Touch
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#1e293b] md:text-5xl">
              Send Us Your Requirement
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our team is ready to assist you with product information, pricing,
              bulk supply inquiries, and customized Titanium Dioxide sourcing
              solutions.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-purple-100 p-3 text-[#4B3089]">
                  <Phone className="h-6 w-6" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#1e293b]">
                    Call Support
                  </h4>

                  <p className="text-slate-600">+91 9818544039</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#1e293b]">
                    Email Address
                  </h4>

                  <p className="text-slate-600">
                    info@corechemcorp.com
                    <br />
                    sales@corechemcorp.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="relative overflow-hidden rounded-[24px] md:rounded-[36px] border border-white bg-white/50 p-5 md:p-10">

            {/* BG */}
            <div className="absolute inset-0 bg-[url('/parallex.jpg')] bg-cover bg-center opacity-30" />

            <div className="relative">

              {/* HEADER */}
              <div className="mb-6 md:mb-8 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b]">
                  Contact Form
                </h3>

                <p className="mt-2 text-sm md:text-base text-slate-600">
                  Fill out the form below and our team will contact you shortly.
                </p>
              </div>

              <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>

                {/* NAME + PHONE */}
                <div className="grid gap-3 md:gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="h-12 md:h-14 rounded-xl border border-slate-200 bg-white px-4 md:px-5 text-sm md:text-base outline-none transition focus:border-[#BE8220]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    type="tel"
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    placeholder="Phone Number"
                    className="h-12 md:h-14 rounded-xl border border-slate-200 bg-white px-4 md:px-5 text-sm md:text-base outline-none transition focus:border-[#BE8220]"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* CITY + PRODUCT */}
                <div className="grid gap-3 md:gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="City"
                    className="h-12 md:h-14 rounded-xl border border-slate-200 bg-white px-4 md:px-5 text-sm md:text-base outline-none transition focus:border-[#BE8220]"
                    value={place}
                    onChange={(e) => setplace(e.target.value)}
                  />

                  <select
                    className="h-12 md:h-14 rounded-xl border border-slate-200 bg-white px-4 md:px-5 text-sm md:text-base outline-none transition focus:border-[#BE8220]"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                  >
                    <option value="">Select Product</option>
                    <option value="Titanium Dioxide">Titanium Dioxide</option>
                    <option value="Titanium Dioxide Rutile">Titanium Dioxide Rutile</option>
                    <option value="Color Pigment">Color Pigment</option>
                    <option value="Pigment Powder">Pigment Powder</option>
                    <option value="Caustic Soda">Caustic Soda</option>
                    <option value="Calcium Carbonate">Calcium Carbonate</option>
                    <option value="Optical Brighter">Optical Brighter</option>
                    <option value="Carbon">Carbon</option>
                    <option value="Industrial Chemicals">Industrial Chemicals</option>
                    <option value="Bulk Supply">Bulk Supply Solutions</option>
                  </select>
                </div>

                {/* EMAIL */}
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="h-12 md:h-14 w-full rounded-xl border border-slate-200 bg-white px-4 md:px-5 text-sm md:text-base outline-none transition focus:border-[#BE8220]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* MESSAGE */}
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 md:px-5 py-3 md:py-4 text-sm md:text-base outline-none transition focus:border-[#BE8220]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-12 md:h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2B4D9D] to-[#4B3089] px-6 text-sm md:text-base font-semibold text-white shadow-lg transition hover:scale-105"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                  {!loading && <Send className="h-5 w-5" />}
                </button>

                {/* STATUS */}
                {status === "success" && (
                  <p className="rounded-xl bg-green-100 px-4 py-3 text-sm md:text-base font-medium text-green-700">
                    Thank you! Our team will contact you shortly.
                  </p>
                )}

                {status === "error" && (
                  <p className="rounded-xl bg-red-100 px-4 py-3 text-sm md:text-base font-medium text-red-700">
                    Something went wrong. Please try again.
                  </p>
                )}

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 pb-12 md:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white shadow-[0_20px_80px_rgba(15,23,42,0.10)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.998521230482!2d77.10934619999999!3d28.7195902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01f0efe2cef3%3A0x9440478f2a43dad6!2sCorechem%20Corporation!5e0!3m2!1sen!2sin!4v1780309132298!5m2!1sen!2sin"

            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />        </div>
      </section>
    </div>
  );
}

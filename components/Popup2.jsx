"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";

// import { auth } from "@/lib/firebase";


export default function ContactForm2({ setIsOpen, isOpen }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");


  // const [otp, setOtp] = useState("");
  // const [showOtpBox, setShowOtpBox] = useState(false);
  // const [confirmationResult, setConfirmationResult] = useState(null);
  // const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  // const recaptchaId = "contact-popup-recaptcha";



  const services = [
    {
      title: "Titanium Dioxide",

    },

    {
      title: "Titanium Dioxide Rutile",

    },

    {
      title: "Color Pigment",

    },

    {
      title: "Pigment Powder",

    },

    {
      title: "Lithopone",

    },

    {
      title: "Caustic Soda",

    },

    {
      title: "Calcium Carbonate",

    },

    {
      title: "Optical Brighter",

    },

    {
      title: "Carbon",

    },
  ];


  // useEffect(() => {
  //   const timer = setTimeout(() => setIsOpen(true), 5000);

  //   if (typeof window !== "undefined") {
  //     const initRecaptcha = async () => {
  //       try {
  //         if (window.contactPopupRecaptcha) {
  //           window.contactPopupRecaptcha.clear();
  //         }

  //         window.contactPopupRecaptcha = new RecaptchaVerifier(
  //           auth,
  //           recaptchaId,
  //           {
  //             size: "invisible",
  //           }
  //         );

  //         await window.contactPopupRecaptcha.render();
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };

  //     initRecaptcha();
  //   }

  //   return () => {
  //     clearTimeout(timer);

  //     if (window.contactPopupRecaptcha) {
  //       window.contactPopupRecaptcha.clear();
  //       window.contactPopupRecaptcha = null;
  //     }
  //   };
  // }, []);


  // FORM SUBMIT (NO OTP)
  const submitForm = async () => {
    try {
      setLoading(true);
      const webisteUrl = window.location.hostname + window.location.pathname;
      const formData = {
        platform: webisteUrl || "Corechem corporation popup form",
        platformEmail: "corechemcorporation@gmail.com",
        supplierToken: "6a1965202b56a9ede272a9ca",
        name,
        phone,
        email: email || "N/A",
        product,
        message,
        place: "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        toast.success("Form Submitted Successfully");

        setStatus("✅ Your enquiry has been submitted successfully!");

        setName("");
        setPhone("");
        setEmail("");
        setProduct("");
        setMessage("");

        // setOtp("");

        // setShowOtpBox(false);
        // setConfirmationResult(null);
        // setIsPhoneVerified(false);

        setTimeout(() => {
          setIsOpen(false);
        }, 2000);

      } else {
        toast.error("Submission Failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server Error");
    } finally {
      setLoading(false);
    }
  };



  // const sendOTP = async () => {
  //   try {
  //     setLoading(true);

  //     const appVerifier = window.contactPopupRecaptcha;

  //     const result = await signInWithPhoneNumber(
  //       auth,
  //       `+91${phone}`,
  //       appVerifier
  //     );

  //     setConfirmationResult(result);
  //     setShowOtpBox(true);

  //     toast.success("OTP Sent Successfully");
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  // const verifyOTP = async () => {
  //   try {
  //     setLoading(true);

  //     await confirmationResult.confirm(otp);

  //     toast.success("Phone Verified");

  //     setIsPhoneVerified(true);

  //     await submitForm();
  //   } catch (err) {
  //     console.log(err);
  //     toast.error("Invalid OTP");
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || phone.length !== 10) {
      return toast.error("Enter Valid Phone Number");
    }

    await submitForm()

    // if (isPhoneVerified) {
    //   await submitForm();
    //   return;
    // }

    // await sendOTP();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-6 backdrop-blur-sm">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-popup-title"
        className="relative max-h-[calc(100dvh-3rem)] w-full max-w-sm overflow-y-auto rounded-3xl bg-[#062347] bg-cover bg-center p-5 text-white shadow-2xl shadow-black/40 sm:max-w-2xl sm:p-8 md:p-10"
        style={{ backgroundImage: "url(/bag/try2.webp)" }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-[#062347]/75" />
        <div className="relative">
          <h2
            id="inquiry-popup-title"
            className="text-center text-xl font-bold leading-tight sm:text-2xl md:text-3xl"
          >
            Claim Free Titanium Dioxide Sample &amp; Direct Factory Quote!
          </h2>

          <div className="mx-auto mb-3 mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#c8921c] to-blue-500 sm:mb-4" />
          <p className="mb-5 text-center text-sm text-blue-50/90 sm:mb-7">
            Share your requirements and our team will be in touch.
          </p>

          <form className="space-y-3.5 sm:space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-3 max-md:flex-col">
              <input
                type="text"
                autoComplete="name"
                aria-label="Your name"
                placeholder="Your Name"
                className="w-1/2 rounded-xl border border-white/70 bg-blue-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-[#c8921c] focus:bg-white focus:ring-4 focus:ring-[#c8921c]/25 max-md:w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <select
                aria-label="Select product"
                className="w-1/2 rounded-xl border border-white/70 bg-blue-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c8921c] focus:bg-white focus:ring-4 focus:ring-[#c8921c]/25 max-md:w-full"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                required
              >
                <option value="">Select Product</option>
                {services.map((item) => (
                  <option key={item.title} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={10}
              pattern="[0-9]{10}"
              title="Enter a 10-digit mobile number"
              aria-label="10-digit phone number"
              placeholder="Phone Number (10 digits)"
              className="w-full rounded-xl border border-white/70 bg-blue-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-[#c8921c] focus:bg-white focus:ring-4 focus:ring-[#c8921c]/25"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              required
            />

            <textarea
              aria-label="Message"
              placeholder="Message"
              className="h-28 w-full resize-y rounded-xl border border-white/70 bg-blue-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-[#c8921c] focus:bg-white focus:ring-4 focus:ring-[#c8921c]/25"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-[#0077e6] to-[#005bb5] px-5 py-5.5 text-base font-bold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:from-[#086dcc] hover:to-[#064f99] focus:outline-none focus:ring-4 focus:ring-blue-300/50 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:text-2xl"
            >
              {loading ? "Sending your enquiry..." : "Submit Enquiry"}
            </button>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className="rounded-xl border border-green-200 bg-green-50 p-3 text-center text-sm font-medium text-green-800"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
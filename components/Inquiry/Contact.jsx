// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// import { auth } from "@/lib/firebase";

// export default function Contact() {
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     product: "",
//     message: "",
//   });

//   // ==============================
//   // OTP STATES
//   // ==============================

//   const [otp, setOtp] = useState("");
//   const [showOtpBox, setShowOtpBox] = useState(false);
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [isPhoneVerified, setIsPhoneVerified] = useState(false);

//   const recaptchaId = "contact-form-recaptcha";

//   // ==============================
//   // PRODUCTS
//   // ==============================

//   const products = [
//     "Titanium Dioxide",
//     "Titanium Dioxide Rutile",
//     "Color Pigment",
//     "Pigment Powder",
//     "Lithopone",
//     "Caustic Soda",
//     "Calcium Carbonate",
//     "Optical Brightener",
//     "Carbon Black",
//   ];

//   // ==============================
//   // HANDLE INPUT
//   // ==============================

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // If user changes phone after verification,
//     // remove previous verification
//     if (name === "phone" && isPhoneVerified) {
//       setIsPhoneVerified(false);
//       setShowOtpBox(false);
//       setConfirmationResult(null);
//       setOtp("");
//     }
//   };

//   // ==============================
//   // INITIALIZE FIREBASE RECAPTCHA
//   // ==============================

//   useEffect(() => {
//     let mounted = true;

//     const initRecaptcha = async () => {
//       try {
//         if (typeof window === "undefined") return;

//         if (!mounted) return;

//         // Clear old verifier
//         if (window.contactFormRecaptcha) {
//           try {
//             window.contactFormRecaptcha.clear();
//           } catch (error) {
//             console.log("Recaptcha clear error:", error);
//           }

//           window.contactFormRecaptcha = null;
//         }

//         const container = document.getElementById(recaptchaId);

//         if (!container) {
//           console.log("Recaptcha container not found");
//           return;
//         }

//         window.contactFormRecaptcha = new RecaptchaVerifier(auth, recaptchaId, {
//           size: "invisible",

//           callback: () => {
//             console.log("Recaptcha solved");
//           },

//           "expired-callback": () => {
//             console.log("Recaptcha expired");
//           },
//         });

//         await window.contactFormRecaptcha.render();

//         console.log("Firebase recaptcha initialized");
//       } catch (error) {
//         console.error("Firebase recaptcha initialization error:", error);
//       }
//     };

//     initRecaptcha();

//     return () => {
//       mounted = false;

//       if (typeof window !== "undefined") {
//         if (window.contactFormRecaptcha) {
//           try {
//             window.contactFormRecaptcha.clear();
//           } catch (error) {
//             console.log("Recaptcha cleanup error:", error);
//           }

//           window.contactFormRecaptcha = null;
//         }
//       }
//     };
//   }, []);

//   // ==============================
//   // SEND OTP
//   // ==============================

//   const sendOTP = async () => {
//     if (loading) return;

//     if (!form.phone || form.phone.length !== 10) {
//       toast.error("Please enter a valid 10-digit phone number");
//       return;
//     }

//     try {
//       setLoading(true);

//       // Get recaptcha
//       let appVerifier = window.contactFormRecaptcha;

//       // If recaptcha doesn't exist, create it
//       if (!appVerifier) {
//         const container = document.getElementById(recaptchaId);

//         if (!container) {
//           toast.error(
//             "Security verification is not ready. Please refresh the page.",
//           );
//           return;
//         }

//         appVerifier = new RecaptchaVerifier(auth, recaptchaId, {
//           size: "invisible",

//           callback: () => {
//             console.log("Recaptcha solved");
//           },

//           "expired-callback": () => {
//             console.log("Recaptcha expired");
//           },
//         });

//         window.contactFormRecaptcha = appVerifier;

//         await appVerifier.render();
//       }

//       const phoneNumber = `+91${form.phone}`;

//       console.log("Sending OTP to:", phoneNumber);

//       const result = await signInWithPhoneNumber(
//         auth,
//         phoneNumber,
//         appVerifier,
//       );

//       // Save Firebase confirmation result
//       setConfirmationResult(result);

//       // Show OTP box
//       setShowOtpBox(true);

//       // Reset OTP
//       setOtp("");

//       toast.success("OTP sent successfully!");
//     } catch (error) {
//       console.error("SEND OTP ERROR:", error);

//       if (error?.code === "auth/invalid-phone-number") {
//         toast.error("Invalid phone number");
//       } else if (error?.code === "auth/too-many-requests") {
//         toast.error("Too many attempts. Please try again later.");
//       } else if (error?.code === "auth/quota-exceeded") {
//         toast.error("OTP limit exceeded. Please try again later.");
//       } else if (error?.code === "auth/captcha-check-failed") {
//         toast.error("Security verification failed. Please try again.");
//       } else {
//         toast.error(error?.message || "Unable to send OTP");
//       }

//       // Reset recaptcha after error
//       if (window.contactFormRecaptcha) {
//         try {
//           window.contactFormRecaptcha.clear();
//         } catch (error) {
//           console.log("Recaptcha reset error:", error);
//         }

//         window.contactFormRecaptcha = null;
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==============================
//   // VERIFY OTP
//   // ==============================

//   const verifyOTP = async () => {
//     if (loading) return;

//     if (!otp || otp.length !== 6) {
//       toast.error("Please enter a valid 6-digit OTP");
//       return;
//     }

//     if (!confirmationResult) {
//       toast.error("OTP session expired. Please request a new OTP.");

//       setShowOtpBox(false);
//       return;
//     }

//     try {
//       setLoading(true);

//       console.log("Verifying OTP...");

//       // IMPORTANT:
//       // Only verify OTP here.
//       // DO NOT submit the form here.
//       await confirmationResult.confirm(otp);

//       console.log("OTP verified successfully");

//       setIsPhoneVerified(true);

//       setShowOtpBox(false);

//       setOtp("");

//       toast.success("Phone number verified successfully!");
//     } catch (error) {
//       console.error("VERIFY OTP ERROR:", error);

//       if (error?.code === "auth/invalid-verification-code") {
//         toast.error("Invalid OTP. Please try again.");
//       } else if (error?.code === "auth/code-expired") {
//         toast.error("OTP expired. Please request a new OTP.");

//         setShowOtpBox(false);
//         setConfirmationResult(null);
//       } else {
//         toast.error(error?.message || "OTP verification failed");
//       }

//       setIsPhoneVerified(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==============================
//   // SUBMIT FORM TO BRANDBNALO
//   // ==============================

//   const submitForm = async () => {
//     if (loading) return;

//     // Extra protection
//     if (!isPhoneVerified) {
//       toast.error("Please verify your phone number first.");
//       return;
//     }

//     try {
//       setLoading(true);

//       console.log("Submitting enquiry...");

//       const payload = {
//         platform: "Corechem Corporation",

//         platformEmail: "corechemcorporation@gmail.com",

//         supplierToken: "6a1965202b56a9ede272a9ca",

//         name: form.name,

//         phone: form.phone,

//         email: form.email,

//         product: form.product,

//         message: form.message,

//         place: "Website Landing Page",
//       };

//       console.log("API Payload:", payload);

//       const res = await axios.post(
//         "https://brandbnalo.com/api/form/add",
//         payload,
//         {
//           validateStatus: (status) => status >= 200 && status < 500,
//         },
//       );

//       console.log("API Response:", res.data);
//       console.log("API Status:", res.status);

//       if (res.status >= 200 && res.status < 300) {
//         toast.success("Inquiry Submitted Successfully!");

//         // Reset form
//         setForm({
//           name: "",
//           phone: "",
//           email: "",
//           product: "",
//           message: "",
//         });

//         // Reset OTP
//         setOtp("");

//         setShowOtpBox(false);

//         setConfirmationResult(null);

//         setIsPhoneVerified(false);

//         // Reset recaptcha
//         if (window.contactFormRecaptcha) {
//           try {
//             window.contactFormRecaptcha.clear();
//           } catch (error) {
//             console.log("Recaptcha cleanup error:", error);
//           }

//           window.contactFormRecaptcha = null;
//         }
//       } else {
//         toast.error(res.data?.message || "Failed to submit inquiry");
//       }
//     } catch (error) {
//       console.error("SUBMIT FORM ERROR:", error);

//       if (error?.response) {
//         console.error("API Response:", error.response.data);

//         console.error("API Status:", error.response.status);
//       }

//       toast.error(
//         error?.response?.data?.message || "Server error. Please try again.",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==============================
//   // HANDLE FORM SUBMIT
//   // ==============================

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Name
//     if (!form.name.trim()) {
//       toast.error("Please enter your name");
//       return;
//     }

//     // Phone
//     if (!form.phone || form.phone.length !== 10) {
//       toast.error("Please enter a valid 10-digit phone number");
//       return;
//     }

//     // Email
//     if (!form.email.trim()) {
//       toast.error("Please enter your email");
//       return;
//     }

//     // Product
//     if (!form.product) {
//       toast.error("Please select a product");
//       return;
//     }

//     // Message
//     if (!form.message.trim()) {
//       toast.error("Please enter your requirements");
//       return;
//     }

//     // If phone already verified,
//     // don't send OTP again.
//     if (isPhoneVerified) {
//       return;
//     }

//     // Send OTP
//     await sendOTP();
//   };

//   // ==============================
//   // RENDER
//   // ==============================

//   return (
//     <section className="relative overflow-hidden py-6 md:py-15">
//       {/* BACKGROUND */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/bag/try2.webp')",
//         }}
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-[#062347]/90" />

//       {/* FIREBASE INVISIBLE RECAPTCHA */}
//       <div id={recaptchaId} className="absolute" />

//       <div className="container relative z-10 mx-auto px-4">
//         <div className="grid items-center gap-10 lg:grid-cols-2">
//           {/* ========================= */}
//           {/* LEFT CONTENT */}
//           {/* ========================= */}

//           <div className="hidden text-white md:block">
//             <span className="inline-block rounded-full border border-[#c8921c] px-5 py-2 text-sm font-medium text-[#c8921c]">
//               Premium Titanium Dioxide Supplier
//             </span>

//             <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
//               Looking for High-Quality
//               <span className="block text-[#c8921c]">Titanium Dioxide?</span>
//             </h2>

//             <p className="mt-6 text-lg text-gray-300">
//               Get premium-grade Titanium Dioxide for paints, plastics, coatings,
//               inks, rubber, paper, and industrial applications. Contact our
//               experts today for pricing, bulk orders, and technical support.
//             </p>

//             <div className="mt-10 hidden gap-4 sm:grid">
//               {[
//                 "High Whiteness",
//                 "Excellent Opacity",
//                 "Bulk Supply Available",
//                 "Competitive Pricing",
//                 "Fast Delivery",
//                 "Industrial Grade Quality",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur"
//                 >
//                   ✓ {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ========================= */}
//           {/* FORM */}
//           {/* ========================= */}

//           <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
//             <h3 className="text-center text-xl font-bold text-[#062347] md:text-3xl">
//               Request a Free Quote
//             </h3>

//             <p className="mt-2 text-center text-sm text-gray-500 md:text-md">
//               Fill out the form and our team will contact you shortly.
//             </p>

//             <form onSubmit={handleSubmit} className="mt-4 space-y-3 md:mt-8">
//               {/* NAME */}

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 disabled={showOtpBox || isPhoneVerified}
//                 className="w-full rounded-xl border p-2.5 outline-none transition focus:border-[#c8921c] disabled:bg-gray-100 md:p-4"
//               />

//               {/* PHONE */}

//               <input
//                 type="tel"
//                 name="phone"
//                 maxLength={10}
//                 inputMode="numeric"
//                 placeholder="Phone Number"
//                 value={form.phone}
//                 onChange={(e) => {
//                   const value = e.target.value.replace(/\D/g, "");

//                   setForm((prev) => ({
//                     ...prev,
//                     phone: value,
//                   }));

//                   // Phone changed
//                   setIsPhoneVerified(false);
//                   setShowOtpBox(false);
//                   setConfirmationResult(null);
//                   setOtp("");
//                 }}
//                 required
//                 disabled={isPhoneVerified}
//                 className="w-full rounded-xl border p-2.5 outline-none transition focus:border-[#c8921c] disabled:bg-green-50 md:p-4"
//               />

//               {/* EMAIL */}

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 disabled={isPhoneVerified}
//                 className="w-full rounded-xl border p-2.5 outline-none transition focus:border-[#c8921c] disabled:bg-gray-100 md:p-4"
//               />

//               {/* PRODUCT */}

//               <select
//                 name="product"
//                 value={form.product}
//                 onChange={handleChange}
//                 required
//                 disabled={isPhoneVerified}
//                 className="w-full rounded-xl border p-2.5 outline-none transition focus:border-[#c8921c] disabled:bg-gray-100 md:p-4"
//               >
//                 <option value="">Select Product</option>

//                 {products.map((item) => (
//                   <option key={item} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>

//               {/* MESSAGE */}

//               <textarea
//                 name="message"
//                 rows="3"
//                 placeholder="Tell us your requirements..."
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//                 disabled={isPhoneVerified}
//                 className="w-full rounded-xl border p-2.5 outline-none transition focus:border-[#c8921c] disabled:bg-gray-100 md:p-4"
//               />

//               {/* ================================= */}
//               {/* SEND OTP BUTTON */}
//               {/* ================================= */}

//               {!showOtpBox && !isPhoneVerified && (
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full rounded-xl bg-[#c8921c] py-4 font-semibold text-white transition hover:bg-[#b88418] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? "Sending OTP..." : "Get Free Quote"}
//                 </button>
//               )}

//               {/* ================================= */}
//               {/* OTP BOX */}
//               {/* ================================= */}

//               {showOtpBox && !isPhoneVerified && (
//                 <div className="mt-4 rounded-2xl border border-[#c8921c]/30 bg-[#fffaf0] p-5">
//                   <div className="mb-4 text-center">
//                     <p className="text-sm font-semibold text-[#062347]">
//                       Verify Your Phone Number
//                     </p>

//                     <p className="mt-1 text-xs text-gray-500">
//                       OTP sent to +91 {form.phone}
//                     </p>
//                   </div>

//                   <input
//                     type="text"
//                     inputMode="numeric"
//                     maxLength={6}
//                     placeholder="Enter 6-digit OTP"
//                     value={otp}
//                     onChange={(e) => {
//                       const value = e.target.value.replace(/\D/g, "");

//                       setOtp(value);
//                     }}
//                     className="w-full rounded-xl border bg-white p-3 text-center text-lg font-semibold tracking-[0.5em] outline-none focus:border-[#c8921c]"
//                   />

//                   {/* VERIFY BUTTON */}

//                   <button
//                     type="button"
//                     onClick={verifyOTP}
//                     disabled={loading || otp.length !== 6}
//                     className="mt-3 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     {loading ? "Verifying OTP..." : "Verify OTP"}
//                   </button>

//                   {/* RESEND */}

//                   <button
//                     type="button"
//                     onClick={sendOTP}
//                     disabled={loading}
//                     className="mt-3 w-full text-sm font-medium text-[#062347] underline disabled:opacity-50"
//                   >
//                     Resend OTP
//                   </button>
//                 </div>
//               )}

//               {/* ================================= */}
//               {/* PHONE VERIFIED */}
//               {/* ================================= */}

//               {isPhoneVerified && (
//                 <div className="mt-4 space-y-3">
//                   {/* VERIFIED MESSAGE */}

//                   <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-center">
//                     <p className="text-sm font-semibold text-green-700">
//                       ✓ Phone number verified successfully
//                     </p>
//                   </div>

//                   {/* SUBMIT INQUIRY */}

//                   <button
//                     type="button"
//                     onClick={submitForm}
//                     disabled={loading}
//                     className="w-full rounded-xl bg-[#c8921c] py-4 font-semibold text-white transition hover:bg-[#b88418] disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     {loading ? "Submitting Inquiry..." : "Submit Inquiry"}
//                   </button>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  product: "",
  message: "",
};

const products = [
  "Titanium Dioxide",
  "Titanium Dioxide Rutile",
  "Color Pigment",
  "Pigment Powder",
  "Lithopone",
  "Caustic Soda",
  "Calcium Carbonate",
  "Optical Brightener",
  "Carbon Black",
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialForm);

  // ==============================
  // HANDLE INPUT
  // ==============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "phone"
          ? value.replace(/\D/g, "").slice(0, 10)
          : value,
    }));
  };

  // ==============================
  // SUBMIT FORM DIRECTLY
  // ==============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!form.product) {
      toast.error("Please select a product");
      return;
    }

    if (!form.message.trim()) {
      toast.error("Please enter your requirements");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        platform: "Corechem Corporation",
        platformEmail: "corechemcorporation@gmail.com",
        supplierToken: "6a1965202b56a9ede272a9ca",
        name: form.name.trim(),
        phone: form.phone,
        email: form.email.trim(),
        product: form.product,
        message: form.message.trim(),
        place: "Website Landing Page",
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      if (res.status >= 200 && res.status < 300) {
        if (res.data?.success === false) {
          toast.error(
            res.data?.message || "Failed to submit inquiry"
          );
          return;
        }

        toast.success("Inquiry Submitted Successfully!");

        setForm({ ...initialForm });
      }
    } catch (error) {
      console.error("SUBMIT FORM ERROR:", error);

      toast.error(
        error?.response?.data?.message ||
        "Server error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-6 md:py-15">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bag/try2.webp')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#062347]/90" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* ========================= */}
          {/* LEFT CONTENT */}
          {/* ========================= */}

          <div className="hidden text-white md:block">
            <span className="inline-block rounded-full border border-[#c8921c] px-5 py-2 text-sm font-medium text-[#c8921c]">
              Premium Titanium Dioxide Supplier
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Looking for High-Quality
              <span className="block text-[#c8921c]">
                Titanium Dioxide?
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-300">
              Get premium-grade Titanium Dioxide for paints,
              plastics, coatings, inks, rubber, paper, and
              industrial applications. Contact our experts
              today for pricing, bulk orders, and technical
              support.
            </p>

            <div className="mt-10 hidden gap-4 sm:grid">
              {[
                "High Whiteness",
                "Excellent Opacity",
                "Bulk Supply Available",
                "Competitive Pricing",
                "Fast Delivery",
                "Industrial Grade Quality",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          {/* ========================= */}
          {/* CONTACT FORM */}
          {/* ========================= */}

          <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] md:p-8">

            <h3 className="text-center text-xl font-bold text-[#062347] md:text-3xl">
              Request a Free Quote
            </h3>

            <p className="mt-2 text-center text-sm text-gray-500 md:text-base">
              Fill out the form and our team will contact
              you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-4 space-y-3 md:mt-8"
            >

              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full rounded-xl border p-2.5 outline-none transition focus:border-[#c8921c] md:p-4"
              />

              {/* PHONE */}
              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                maxLength={10}
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-2.5 outline-none transition focus:border-[#c8921c] md:p-4"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-2.5 outline-none transition focus:border-[#c8921c] md:p-4"
              />

              {/* PRODUCT */}
              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                required
                className="w-full rounded-xl border bg-white p-2.5 outline-none transition focus:border-[#c8921c] md:p-4"
              >
                <option value="">Select Product</option>

                {products.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {/* MESSAGE */}
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us your requirements..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-xl border p-2.5 outline-none transition focus:border-[#c8921c] md:p-4"
              />

              {/* DIRECT SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center rounded-xl bg-[#c8921c] py-4 font-semibold text-white transition hover:bg-[#b88418] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Submitting Inquiry..."
                  : "Get Free Quote"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

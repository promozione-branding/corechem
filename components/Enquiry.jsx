"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

export default function ContactForm({
  isOpen,
  onClose,
}) {
  const [submitted, setSubmitted] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // OTP STATES
  const [otp, setOtp] = useState("");

  const [showOtpBox, setShowOtpBox] =
    useState(false);

  const [confirmationResult, setConfirmationResult] =
    useState(null);

  const [isPhoneVerified, setIsPhoneVerified] =
    useState(false);

  const [formValues, setFormValues] =
    useState(null);

  // INIT RECAPTCHA
  useEffect(() => {
    if (!isOpen) return;

    if (
      typeof window !== "undefined" &&
      !window.recaptchaVerifier
    ) {
      window.recaptchaVerifier =
        new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "normal",
          }
        );

      window.recaptchaVerifier.render();
    }

    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();

        window.recaptchaVerifier = null;
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  // SEND OTP
  const sendOTP = async (phone) => {
    try {
      setLoading(true);

      const appVerifier =
        window.recaptchaVerifier;

      const result =
        await signInWithPhoneNumber(
          auth,
          "+91" + phone.trim(),
          appVerifier
        );

      setConfirmationResult(result);

      setShowOtpBox(true);

      toast.success("OTP Sent Successfully");
    } catch (error) {
      console.log(error);

      toast.error(
        error.message || "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const verifyOTP = async () => {
    try {
      setLoading(true);

      await confirmationResult.confirm(otp);

      setIsPhoneVerified(true);

      toast.success(
        "Phone Verified Successfully"
      );

      // SUBMIT FORM AFTER VERIFY
      await submitForm(formValues);
    } catch (error) {
      console.log(error);

      toast.error("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // SUBMIT FORM
  const submitForm = async (values) => {
    try {
      setLoading(true);
      const webisteUrl = window.location.hostname + window.location.pathname;
      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        {
          platform:
            webisteUrl || "Sangam Garbage Bag enquiry Form",

          platformEmail:
            "info@polywell.co.in",


          name: values.name,

          phone: values.phone,

          email: values.email,

          place: "N/A",

          product: values.product,

          message: values.message,
        }
      );

      if (data?.success) {
        setSubmitted(true);

        setSuccessMessage(
          "✅ Your enquiry has been submitted successfully!"
        );

        toast.success(
          "Form Submitted Successfully"
        );

        const whatsappText = `Hi, I am ${values.name}.
Email: ${values.email}
Product: ${values.product}
Message: ${values.message}
Contact: ${values.phone}`;

        setTimeout(() => {
          window.open(
            `https://wa.me/918810422935?text=${encodeURIComponent(
              whatsappText
            )}`,
            "_blank"
          );
        }, 1000);

        setTimeout(() => {
          setSubmitted(false);

          onClose();
        }, 4000);
      } else {
        setSuccessMessage(
          "❌ Failed to send. Please try again."
        );
      }
    } catch (error) {
      console.log(error);

      setSuccessMessage(
        "❌ Server error. Try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const values = {
      name: form.name.value,

      phone: form.phone.value,

      email: form.email.value,

      product: form.products.value,

      message: form.message.value,
    };

    if (
      !values.phone ||
      values.phone.length < 10
    ) {
      return toast.error(
        "Enter Valid Phone Number"
      );
    }

    // SAVE FORM DATA
    setFormValues(values);

    // IF VERIFIED ALREADY
    if (isPhoneVerified) {
      await submitForm(values);

      return;
    }

    // SEND OTP FIRST
    await sendOTP(values.phone);
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
      <div
        className="relative z-[1000] rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-[570px] text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/bag/descbg.png)",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute z-[1000] inset-0 bg-black/20 rounded-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-[10001]">
          {/* CLOSE BUTTON */}
          <button
            className="absolute top-0 right-0 text-white hover:text-red-500 text-2xl cursor-pointer"
            onClick={handleClose}
          >
            ✕
          </button>

          {/* HEADING */}
          <h2 className="text-center text-white text-2xl md:text-3xl font-semibold">
            Get In Touch With Us
          </h2>

          <div className="w-28 h-[4px] bg-cyan-600 mx-auto mt-3 mb-8 rounded-full"></div>

          {!submitted ? (
            <form
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              {/* NAME + PRODUCT */}
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={loading}
                  className="w-full md:w-1/2 p-3 placeholder-white rounded-md text-white border-2 border-white bg-transparent focus:outline-none"
                />

                <select
                  name="products"
                  required
                  disabled={loading}
                  defaultValue=""
                  className="w-full md:w-1/2 p-3 rounded-md text-black text-sm border-2 border-white focus:outline-none bg-blue-50"
                >
                  <option value="">
                    Select Product
                  </option>

                  <option value="Biodegradable Garbage Bags">
                    Biodegradable Garbage Bags
                  </option>

                  <option value="Disposable Garbage Bags">
                    Disposable Garbage Bags
                  </option>

                  <option value="Biomedical Garbage Bags">
                    Biomedical Garbage Bags
                  </option>
                </select>
              </div>

              {/* PHONE */}
              <div className="flex items-center rounded-md border-2 border-white overflow-hidden">
                <span className="ml-3">
                  🇮🇳
                </span>

                <input
                  type="tel"
                  name="phone"
                  maxLength={10}
                  minLength={10}
                  required
                  disabled={loading}
                  placeholder="8123456789"
                  className="w-full p-3 bg-transparent text-white placeholder-white focus:outline-none"
                />
              </div>

              {/* RECAPTCHA */}
              <div
                id="recaptcha-container"
                className="mt-2"
              ></div>

              {/* OTP BOX */}
              {showOtpBox &&
                !isPhoneVerified && (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) =>
                        setOtp(e.target.value)
                      }
                      className="w-full p-3 rounded-md border-2 border-white bg-transparent text-white placeholder-white focus:outline-none"
                    />

                    <button
                      type="button"
                      onClick={verifyOTP}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold"
                    >
                      Verify OTP
                    </button>
                  </div>
                )}

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                required
                disabled={loading}
                placeholder="Email Address"
                className="w-full p-3 rounded-md border-2 border-white bg-transparent text-white placeholder-white focus:outline-none"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                required
                disabled={loading}
                placeholder="Message"
                className="w-full p-3 rounded-md border-2 border-white bg-transparent text-white placeholder-white h-28 resize-none focus:outline-none"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-[#0077e6] to-[#005bb5] rounded-md font-semibold text-white shadow-md hover:opacity-90 transition"
              >
                {loading
                  ? "Loading..."
                  : !showOtpBox
                    ? "Send OTP"
                    : !isPhoneVerified
                      ? "Verify OTP First"
                      : "Send Message"}
              </button>
            </form>
          ) : (
            <p className="text-center text-white font-semibold text-lg">
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaArrowRight } from "react-icons/fa";

const inquiryTypes = [
  {
    label: "Get Quotation",
    message:
      "Could you please send me a quotation for the items listed below?",
  },
  {
    label: "Get Price List",
    message:
      "Can you provide me with the latest price list for your products?",
  },
  {
    label: "Discuss Requirement",
    message:
      "I would like to discuss my requirements in detail. Can we set up a time to talk?",
  },
];

export default function TabForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [form, setForm] = useState({
    name: "",
    place: "",
    mobile: "",
    message: inquiryTypes[0].message,
  });

  const handleTabChange = (index) => {
    setActiveTab(index);
    setForm((prev) => ({
      ...prev,
      message: inquiryTypes[index].message,
    }));
    setStatus("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      toast.error("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      const formData = {
        platform: "Corechem corporation popup form",
        platformEmail: "corechemcorporation@gmail.com",
        supplierToken: "6a1965202b56a9ede272a9ca",

        name: form.name.trim(),
        phone: form.mobile,
        email: "N/A",
        product: inquiryTypes[activeTab].label,
        message: form.message.trim(),
        place: form.place.trim() || "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        toast.success("Form Submitted Successfully");
        setStatus("Your enquiry has been submitted successfully!");

        setForm({
          name: "",
          place: "",
          mobile: "",
          message: inquiryTypes[activeTab].message,
        });
        setActiveTab(0);
      } else {
        toast.error(data?.message || "Submission Failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        error.response?.data?.message || "Server Error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-4xl px-4 sm:mt-10">
      <div className="rounded-3xl border border-[#c8921c]/40 bg-gradient-to-br from-[#eaf1ff] to-[#d1e0fa] p-5 shadow-[0_15px_50px_rgba(6,35,71,0.12)] sm:p-8 md:p-10">
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-[#062347] sm:text-2xl md:text-3xl">
            Share a Quick Message with Us
          </h3>

          <p className="mt-2 text-sm text-gray-600 sm:text-sm">
            Tell us what you need, and our team will get back to you.
          </p>
        </div>

        {/* Inquiry Tabs */}
        <div className="mt-6 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-2 sm:justify-center sm:gap-3">
            {inquiryTypes.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleTabChange(index)}
                aria-pressed={activeTab === index}
                className={`rounded-full border px-2 py-2 text-sm font-semibold transition-all duration-300 sm:px-5 sm:text-base ${
                  activeTab === index
                    ? "border-[#c8921c] bg-[#062347] text-white shadow-md"
                    : "border-white bg-white text-gray-700 hover:border-[#c8921c] hover:text-[#062347]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          {/* Name and Place */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              aria-label="Your Name"
              autoComplete="name"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#c8921c] focus:ring-2 focus:ring-[#c8921c]/20"
            />

            <input
              type="text"
              name="place"
              value={form.place}
              onChange={handleChange}
              placeholder="City / Place"
              aria-label="City or Place"
              autoComplete="address-level2"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#c8921c] focus:ring-2 focus:ring-[#c8921c]/20"
            />
          </div>

          {/* Dynamic Message */}
          <div>
            <label
              htmlFor="inquiry-message"
              className="mb-2 block text-sm font-medium text-[#062347]"
            >
              Enter Buying Requirement Details
            </label>

            <textarea
              id="inquiry-message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your requirements..."
              className="w-full resize-y rounded-xl border border-gray-300 bg-white px-3 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#c8921c] focus:ring-2 focus:ring-[#c8921c]/20"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="inquiry-mobile"
              className="mb-2 block text-sm font-medium text-[#062347]"
            >
              Mobile Number
            </label>

            <div className="flex gap-3">
              <div className="flex shrink-0 items-center rounded-xl border border-gray-300 bg-white px-3 font-semibold text-gray-700 sm:px-4">
                🇮🇳 <span className="ml-2">+91</span>
              </div>

              <input
                id="inquiry-mobile"
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    mobile: e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10),
                  }))
                }
                placeholder="Enter mobile number"
                autoComplete="tel-national"
                inputMode="numeric"
                pattern="[6-9][0-9]{9}"
                title="Enter a valid 10-digit Indian mobile number"
                maxLength={10}
                required
                className="min-w-0 flex-1 rounded-xl border border-gray-300 bg-white px-3 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#c8921c] focus:ring-2 focus:ring-[#c8921c]/20"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-1 text-center">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#062347] to-[#0a3a6e] px-8 py-3 font-bold text-white shadow-lg shadow-[#062347]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[260px]"
            >
              {loading ? "Submitting..." : "Send Inquiry"}
              {!loading && (
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </button>

            {status && (
              <p
                role="status"
                className="mt-3 text-sm font-medium text-green-700"
              >
                ✅ {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

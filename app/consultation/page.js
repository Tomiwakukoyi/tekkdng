"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Select from "react-select";
import Image from "next/image";
import { Country, State } from "country-state-city";

export default function ConsultationPage() {
  const form = useRef();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    setCountries(
      Country.getAllCountries().map((country) => ({
        value: country.isoCode,
        label: country.name,
      }))
    );
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      setStates(
        State.getStatesOfCountry(selectedCountry.value).map((state) => ({
          value: state.isoCode,
          label: state.name,
        }))
      );
    } else {
      setStates([]);
    }
  }, [selectedCountry]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedState(null);
  };

  const employeeOptions = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-500", label: "201-500 employees" },
    { value: "501+", label: "501+ employees" },
  ];

  const serviceOptions = [
    { value: "project_management", label: "Project Management" },
    { value: "consulting", label: "Consulting" },
    { value: "software_web_dev", label: "Software and Web Development" },
    { value: "digital_marketing", label: "Digital/Social Media Marketing" },
    { value: "hardware_supply", label: "Hardware Supply and Maintenance" },
    { value: "ai_ml", label: "AI and Machine Learning Solutions" },
    { value: "research", label: "Research and Development" },
    { value: "cloud_services", label: "Cloud Services and Migration" },
    { value: "cybersecurity", label: "Cybersecurity Solutions" },
    {
      value: "data_analytics",
      label: "Data Analytics and Business Intelligence",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your consultation request has been sent successfully!");
          form.current.reset(); // Optional: Reset the form after sending
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send your consultation request. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 my-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              We're Excited to Embark on a Journey Together!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Let's Discover if We're the Perfect Match...
            </p>
            <p className="text-gray-600 mb-4">
              At Tekkd, we're passionate about forging long-lasting strategic
              partnerships with businesses eager to elevate their IT game. If
              your team has around 20 members or more, we're especially excited
              about the possibility of working with you!
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Our Services
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Project Management</li>
              <li>Consulting</li>
              <li>Software and Web Development</li>
              <li>Digital/Social Media Marketing</li>
              <li>Hardware Supply and Maintenance</li>
              <li>AI and Machine Learning Solutions</li>
              <li>Research and Development</li>
              <li>Cloud Services and Migration</li>
              <li>Cybersecurity Solutions</li>
              <li>Data Analytics and Business Intelligence</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Get Better IT Support
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="user_name"
                    className="text-sm font-medium text-gray-700 block mb-1"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="user_lastname"
                    className="text-sm font-medium text-gray-700 block mb-1"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="user_lastname"
                    name="user_lastname"
                    className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="text-sm font-medium text-gray-700 block mb-1"
                >
                  Business Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="text-sm font-medium text-gray-700 block mb-1"
                >
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="country"
                    className="text-sm font-medium text-gray-700 block mb-1"
                  >
                    Country
                  </label>
                  <Select
                    id="country"
                    name="country"
                    options={countries}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="text-sm font-medium text-gray-700 block mb-1"
                  >
                    State
                  </label>
                  <Select
                    id="state"
                    name="state"
                    options={states}
                    value={selectedState}
                    onChange={setSelectedState}
                    isDisabled={!selectedCountry}
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="employees"
                  className="text-sm font-medium text-gray-700 block mb-1"
                >
                  Number of Employees
                </label>
                <Select
                  id="employees"
                  name="employees"
                  options={employeeOptions}
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              </div>
              <div>
                <label
                  htmlFor="services"
                  className="text-sm font-medium text-gray-700 block mb-1"
                >
                  Services You're Interested In
                </label>
                <Select
                  id="services"
                  name="services"
                  options={serviceOptions}
                  isMulti
                  className="react-select-container"
                  classNamePrefix="react-select"
                  onChange={setSelectedServices}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 block mb-1"
                >
                  How did you hear about us?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2  focus:ring-offset-2 transition-colors text-lg font-semibold"
                >
                  Book a Consultation
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <Image
        src="/images/aboutImg.png"
        width={600}
        height={300}
        alt="Background"
        className="absolute opacity-5 left-40 hidden md:flex"
      />
    </div>
  );
}

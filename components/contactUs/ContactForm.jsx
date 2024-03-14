import React from "react";

const ContactForm = () => {
  return (
    <div className="mt-8   bg-gray-50 p-5 rounded-lg  font-sans">
      <h1 className="font-semibold text-2xl mb-10 py-5 flex items-center justify-center mx-auto">Contact Us</h1>
      <form className=" mx-auto  w-full">
        <div className="flex flex-col items-start mx-10 justify-center gap-4">
          <div className="flex flex-col gap-4 sm:gap-12 sm:flex-row sm:items-start sm:justify-between  ">
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="text-sm font-medium mb-1 block pb-2"
              >
                FULL NAME
              </label>
              <input
               type="text"
                id="fullName"
                name="fullName"
                placeholder="Name"
                className="w-full py-1 px-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm font-medium mb-1 block pb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full py-1 px-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="text-sm font-medium mb-1 block pb-2">
              SUBJECT
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="w-full py-1 px-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-sm font-medium mb-1 block pb-2">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full py-1 px-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#17a2b8] text-white py-2 px-4 mx-10 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

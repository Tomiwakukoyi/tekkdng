"use client"
import React,{useRef} from "react";
import emailjs from '@emailjs/browser';


const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0xaswxd', 'template_ctcorza', form.current, {
        publicKey: 'HV78EyH-GOW3Jms7n',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="mt-8 w-full sm:w-[70%] bg-gray-50 p-5 rounded-lg  font-sans">
      <h1 className="font-semibold text-2xl mb-10 py-5 flex items-center justify-center mx-auto">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className=" mx-auto  w-full">
        <div className="flex flex-col items-start sm:w-full justify-center gap-4">
          <div className="flex flex-col gap-4 sm:gap-0 sm:px-16  w-full sm:flex-row sm:items-start sm:justify-between">
            <div className="mb-4 w-[80%] sm:w-[30%]">
              <label
                htmlFor="fullName"
                className="text-sm font-medium mb-1 block pb-2"
              >
                FULL NAME
              </label>
              <input
               type="text"
                id="fullName"
                name="user_name"
                placeholder="Name"
                className="w-full py-1 px-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="mb-4 w-[80%] sm:w-[40%]">
              <label htmlFor="email" className="text-sm font-medium mb-1 block pb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Email"
                className="w-full py-1 px-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>

          <div className="mb-4 w-[80%] sm:w-[42%] sm:px-16">
            <label htmlFor="subject" className="text-sm font-medium mb-1 block pb-2">
              SUBJECT
            </label>
            <input
              type="text"
              id="subject"
              name="user_subject"
              placeholder="Subject"
              className="w-full py-1 px-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="mb-4 w-[80%] md:w-[70%] sm:px-16">
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
          type="submit" value="Send"
          className="bg-[#17a2b8] text-white py-2 px-4 sm:mx-16 mx-10 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

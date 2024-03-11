import ContactForm from "@/components/contactUs/ContactForm";
import ContactUsComp from "@/components/contactUs/ContactUsComp";
import contactInfo from "@/public/data/contactInfo";

const ContactUs = () => {
  return (
    <div className=" flex flex-col mx-auto items-center justify-center mt-24 w-[80%]">
      {/* <h1 className=" font-medium text-2xl">Contact Us</h1>
      <div className=" flex flex-wrap items-center justify-center gap-5 md:gap-14 mt-14">
        {contactInfo.map((data, index) => (
          <ContactUsComp index={index} {...data} />
        ))}
      </div> */}

    <ContactForm />
    </div>
  );
};

export default ContactUs;

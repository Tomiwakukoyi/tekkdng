import ContactForm from "@/components/contactUs/ContactForm";
import ContactUsComp from "@/components/contactUs/ContactUsComp";
import contactInfo from "@/public/data/contactInfo";

const ContactUs = () => {
  return (
    <div className=" flex flex-col mx-auto items-center justify-center mt-24 w-[80%] gap-10">
      <div className=" flex flex-col items-center justify-center my-auto">
      
        <div className=" flex flex-wrap items-center mx-auto my-auto justify-center gap-8 md:gap-14 mt-6">
          {contactInfo.map((data, index) => (
            <ContactUsComp
              index={index}
              {...data}
              iconStyle={{
                color: "white",
                fontSize: "24px",
                backgroundColor: "#17a2b8",
              }}
            />
          ))}
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactUs;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook ,faPhone , faEnvelope} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section className="p-5">
      <section className="flex justify-center gap-2 p-5">
        <FontAwesomeIcon
          icon={faContactBook}
          size="3x"
          className="text-[#3085C3]"
        />
        <h1 className="text-4xl lg:text-5xl text-[#3085C3] font-bold">Contact Us</h1>
      </section>
      <div className="flex flex-col lg:flex-row justify-center w-full lg:w-3/4 mx-auto gap-5 mt-5" id="contact-us">
        <div className="basis-[50%]">
          <h1 className="text-center my-2 text-3xl text-[#3085C3] font-black">
            Meet Us
          </h1>
          <p className="text-center my-2 text-xl text-black font-semibold">
            Discover our friendly team at the heart of Chennai. We're located at
          </p>
          <p className="text-center my-2 text-lg text-black font-medium">
            No. 111, Durai Arasan St, Pushpa Colony, Saligramam, Chennai, Tamil
            Nadu 600093
          </p>
        </div>
        <div className="basis-[50%]">
          <h1 className="text-center text-3xl text-[#3085C3] font-black">
            Get In Touch
          </h1>
          <p className="text-black text-center text-xl font-semibold">
            Stay connected with us:
          </p>
          <section className="flex justify-center">
            <a
              className="text-lg font-extrabold text-[#3085C3] hover:text-[#F89F00]"
              href="tel:+919381382643"
            >
                <FontAwesomeIcon icon={faPhone} />
              +919381382643
            </a>
          </section>
          <p className="text-black text-center text-xl font-semibold">
            Reach out to us anytime:
          </p>
          <section className="flex justify-center">
              <a
                className="text-[#3085C3] hover:text-[#F89F00] text-lg font-extrabold"
                href="mailto:info@saravasoft.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                info@saravasoft.com
              </a>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Contact;

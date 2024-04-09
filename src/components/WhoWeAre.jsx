import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard  } from "@fortawesome/free-regular-svg-icons";
function WhoWeAre() {
  return (
    <div className="bg-white my-5" id="about-us">
      <section className="flex justify-center gap-2">
        <FontAwesomeIcon icon={faAddressCard} size="3x" className="text-[#3085C3]"/>
        <h1 className="text-3xl lg:text-5xl text-[#3085C3] font-bold">Who We Are</h1>
      </section>

      <p className="text-center p-4 text-black">
        SaravanaSoft, an esteemed Tally Authorized Partner with a 3-star
        certification, has been steadfast in delivering comprehensive business
        solutions since its establishment in 2016. Drawing upon over 20 years of
        experience and a profound understanding of the ever-evolving challenges
        in the business world, we have a proven history of providing
        tailor-made, efficient, and reliable solutions to our diverse clientele.
        Our expertise spans across multiple industries, granting us valuable
        insights into the daily hurdles encountered by businesses of all sizes.
        This knowledge empowers us to create customized turn-key modules,
        allowing businesses to streamline their operations and reduce time and
        effort. From managing finances and inventory to implementing enterprise
        resource planning, our suite of personalized Tally products caters to a
        broad spectrum of business requirements. We take immense pride in our
        unwavering commitment to delivering holistic solutions that empower
        businesses to thrive in a highly competitive landscape.
      </p>
    </div>
  );
}

export default WhoWeAre;

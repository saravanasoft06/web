import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Map() {
  return (
    <div className="m-2 lg:m-10">
      <section className="flex justify-center gap-2 p-5">
        <FontAwesomeIcon icon={faLocationDot} size="3x" className="text-[#3085C3]"/>
        <h1 className="text-4xl lg:text-5xl text-[#3085C3] font-bold">Location</h1>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7208715873458!2d80.19571067882836!3d13.053430980277248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ebca89b00b%3A0x579867a76c93f74c!2sSaravanaSoft!5e0!3m2!1sen!2sin!4v1697616904381!5m2!1sen!2sin"
        className="w-11/12 h-[450px] border-none mx-auto"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;

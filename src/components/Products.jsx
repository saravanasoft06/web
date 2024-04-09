import React from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Products({ images, headings, contents }) {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      pathLength: 0,
      y: "10vw",
    }),
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.5,
        duration: 1,
      },
    }),
    // exit: (index) => ({
    //   opacity: 0,
    //   y: "5vw",
    //   transition: {
    //     delay: index * 0.75,
    //     duration: 1,
    //   },
    // }),
  };


  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    // else {
    //   animation.start("exit"); 
    // }

   
  }, [inView, animation]);

  return (
    <div ref={ref} className="bg-[#D4E6F4]" id="products">
      <section className="flex justify-center gap-2 p-5">
        <FontAwesomeIcon
          icon={faCartShopping}
          size="3x"
          className="text-[#3085C3]"
        />
        <h1 className="text-4xl lg:text-5xl text-[#3085C3] font-bold">
          Products
        </h1>
      </section>

      <div className="bg-[#D4E6F4] w-11/12 mx-auto flex justify-evenly p-2 lg:p-10  flex-wrap">
        {images.map((image, index) => (
          <section className="hover:scale-105">
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={animation}
              custom={index}
              className="card w-[300px] bg-[#3085C3] shadow-xl m-1"
            >
              <figure className="border bg-white">
                <img src={image} alt="Shoes" className="h-[200px] w-11/12" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title text-[#FFCC70]">{headings[index]}</h2>
                <p>{contents[index]}</p>
              </div>
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Products;

// AWS - https://maaziah.com/

//bg-gradient-to-r from-[#4dba69] via-[#3cb3c7] to-[#25b2e3]
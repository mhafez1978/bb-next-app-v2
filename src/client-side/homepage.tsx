"use client";
import React, { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import { motion } from "framer-motion";
import FirstCallToAction from "@/components/first-cta";
import SocialProof from "@/components/social-proof";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import TestimonialSlider from "@/components/testimonials-slider";
import SecondCallToAction from "@/components/second-cta";

const homepage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  return (
    <div>
      {loaded === false && (
        <div className="bg-[#222222] h-[100vh] w-[100vw] top-0 left-0 flex flex-col justify-center items-center">
          <span className="sr-only">Loading...</span>
          <Spinner
            aria-label="Warning spinner example"
            color="warning"
            size="xl"
            className="w-[300px] h-[300px]"
          />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <FirstCallToAction />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SocialProof />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "100vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <AboutSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 1, x: "100vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 }}
        viewport={{ once: true }}
      >
        <ServicesSection />
      </motion.div>
      <motion.div
        initial={{ x: "-100vw" }}
        whileInView={{ x: 0 }}
        transition={{ delay: 1.0 }}
        viewport={{ once: true }}
      >
        <SecondCallToAction />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "100vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 }}
        viewport={{ once: true }}
      >
        <TestimonialSlider />
      </motion.div>
    </div>
  );
};

export default homepage;

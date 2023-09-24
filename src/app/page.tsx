"use client";
import FirstCallToAction from "@/components/first-cta";
import SocialProof from "@/components/social-proof";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import TestimonialSlider from "@/components/testimonials-slider";
import SecondCallToAction from "@/components/second-cta";
import { motion } from "framer-motion";

const Home = () => {
  const multiplier: number = 5;

  return (
    <>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <FirstCallToAction />
      </motion.div>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
      >
        <SocialProof />
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        whileInView={{ x: 0 }}
        transition={{ delay: 1.5 }}
        viewport={{ once: true }}
      >
        <AboutSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        viewport={{ once: true }}
      >
        <ServicesSection />
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        whileInView={{ x: 0 }}
        transition={{ delay: 1.5 }}
        viewport={{ once: true }}
      >
        <TestimonialSlider />
      </motion.div>
      <motion.div
        initial={{ x: "-100vw" }}
        whileInView={{ x: 0 }}
        transition={{ delay: 1.5 }}
        viewport={{ once: true }}
      >
        <SecondCallToAction />
      </motion.div>
    </>
  );
};

export default Home;

"use client";
import { motion } from "framer-motion";

const ServiceDetailsLeft = ({
  scrollId,
  serviceTitle,
  serviceDetails,
  serviceImage,
  serviceAltText,
  background,
  color,
}: any) => {
  return (
    <>
      <section id={scrollId} className={`bg-${background} py-10`}>
        <div className="w-[80vw] px-[80px] mx-auto flex flex-row">
          <motion.div
            initial={{ x: "-50vw" }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col w-1/2 justify-center"
          >
            <h2 className={`text-${color} text-4xl mb-8`}>{serviceTitle}</h2>
            <p className={`text-${color} w-full`}>{serviceDetails}</p>
          </motion.div>
          <motion.div
            initial={{ x: "50vw" }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-row justify-center items-end max-h-[60vh] w-1/2 rounded overflow-hidden py-4 px-4"
          >
            <img
              src={serviceImage}
              alt={serviceAltText}
              width="90%"
              height="90%"
              className="p-2 drop-shadow-lg shadow-black"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsLeft;

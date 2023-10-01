"use client";
import { motion } from "framer-motion";

const ServiceDetails = ({
  scrollId,
  serviceTitle,
  serviceDetails,
  serviceImage,
  serviceAltText,
  background,
  color,
}) => {
  return (
    <>
      <section id={scrollId} className={`bg-${background} py-10`}>
        <div className="w-[80vw] px-[80px] mx-auto flex flex-row">
          <motion.div
            initial={{ x: "-50vw" }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-row justify-start items-start max-h-[60vh] w-1/2 rounded overflow-hidden py-4 px-4"
          >
            <img
              src={serviceImage}
              width="90%"
              height="90%"
              alt={serviceAltText}
              className="p-2 drop-shadow-lg shadow-black"
            />
          </motion.div>
          <motion.div
            initial={{ x: "50vw" }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col w-1/2 justify-center items-end"
          >
            <div className="flex flex-col justify-start ">
              <h2 className={`text-4xl mb-8 text-${color}`}>{serviceTitle}</h2>
              <p className={`w-full  text-${color}`}>{serviceDetails}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;

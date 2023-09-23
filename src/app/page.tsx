import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";
import ServicesSection from "@/components/services-section";
import DesignProcess from "@/components/design-process";
import TestimonialSlider from "@/components/testimonials-slider";

export const metadata: Metadata = {
  title: "Blooming Brands | Home",
  description: "Websites and Online Marketing",
};

const Home = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <ServicesSection />
      <TestimonialSlider />
    </>
  );
};

export default Home;

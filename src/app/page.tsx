import Homepage from "@/client-side/homepage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: `Blooming Brands | Home`,
  description: "Websites and Online Marketing",
};

const Home = () => {
  return <Homepage />;
};

export default Home;

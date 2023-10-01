import Homepage from "@/client-side/homepage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: `Blooming Brands | HomePage`,
  description: "Websites and Online Marketing",
};

const Home = () => {
  // const multiplier: number = 5;

  return <Homepage />;
};

export default Home;

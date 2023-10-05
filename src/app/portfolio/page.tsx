import PortfolioPage from "@/client-side/PortfolioPage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blooming Brands | Portfolio",
  description: "Websites and Online Marketing",
};

const Portfolio = () => {
  return <PortfolioPage />;
};

export default Portfolio;

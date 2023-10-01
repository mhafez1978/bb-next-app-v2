import PortfolioPage from "@/client-side/portfoliopage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blooming Brands | Portfolio",
  description: "Websites and Online Marketing",
};

const Portfolio = () => {
  return <PortfolioPage />;
};

export default Portfolio;

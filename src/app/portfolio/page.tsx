import type { Metadata } from "next";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "Blooming Brands | Portfolio",
  description: "Websites and Online Marketing",
};

interface Props {
  pageTitle?: string;
}

const Portfolio = () => {
  return (
    <div>
      <PageHeader pageTitle="Portfolio" />
      <div className="min-h-[20vh]">
        <h1 className=" text-red-400">This is Portfolio Page!!!</h1>
      </div>
    </div>
  );
};

export default Portfolio;

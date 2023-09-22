import type { Metadata } from "next";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "Blooming Brands | Services",
  description: "Websites and Online Marketing",
};

interface Props {
  pageTitle?: string;
}

const Services = () => {
  return (
    <div>
      <PageHeader pageTitle="Services" />
      <div className="min-h-[20vh]">
        <h1 className=" text-red-400">This is Services Page!!!</h1>
      </div>
    </div>
  );
};

export default Services;

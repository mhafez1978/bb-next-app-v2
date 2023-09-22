import type { Metadata } from "next";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "Blooming Brands | Contact",
  description: "Websites and Online Marketing",
};

interface Props {
  pageTitle?: string;
}

const Contact = () => {
  return (
    <div>
      <PageHeader pageTitle="Contact" />
      <div className="min-h-[20vh]">
        <h1 className=" text-red-400">This is Contact Page !!!</h1>
      </div>
    </div>
  );
};

export default Contact;

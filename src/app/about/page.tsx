import type { Metadata } from "next";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "Blooming Brands | About",
  description: "Websites and Online Marketing",
};

interface Props {
  pageTitle?: string;
}

const About = () => {
  return (
    <div>
      <PageHeader pageTitle="About" />
      <div className="min-h-[20vh]">
        <h1 className=" text-red-400">This is About Page !!!</h1>
      </div>
    </div>
  );
};

export default About;

import type { Metadata } from "next";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "Blooming Brands | Latest News",
  description: "Websites and Online Marketing",
};

interface Props {
  pageTitle?: string;
}

const LatestNews = () => {
  return (
    <div>
      <PageHeader pageTitle="Latest News" />
      <div className="min-h-[20vh]">
        <h1 className=" text-red-400">This is Latest News Page!!!</h1>
      </div>
    </div>
  );
};

export default LatestNews;

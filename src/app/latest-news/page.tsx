import LatestNewsPage from "@/clientside/LatestNewsPage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blooming Brands | Latest News",
  description: "Websites and Online Marketing",
};

const LatestNews = () => {
  return <LatestNewsPage />;
};

export default LatestNews;

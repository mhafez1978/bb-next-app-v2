import "./globals.css";
import "flowbite";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../node_modules/flowbite/dist/flowbite.min.css";
import "../../node_modules/tw-elements/dist/css/tw-elements.min.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Blooming Brands | 404 Page Not Found`,
  description: "Websites and Online Marketing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
            rel="stylesheet"
          />
        </head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          {/* <!--
          This HTML file is a template.
          If you open it directly in the browser, you will see an empty page.

          You can add webfonts, meta tags, or analytics to this file.
          The build step will place the bundled scripts into the <body> tag.

          To begin the development, run `npm start` or `yarn start`.
          To create a production bundle, use `npm run build` or `yarn build`.
          --> */}

          <Header />

          {children}
          <Footer />
          <Script
            strategy="afterInteractive"
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          />
          <Script
            strategy="afterInteractive"
            src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"
          />
          <Script
            strategy="afterInteractive"
            src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"
          />
        </body>
      </html>
    </>
  );
}

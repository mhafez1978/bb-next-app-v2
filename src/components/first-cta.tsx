"use client";

const FirstCallToAction = () => {
  return (
    <div
      className="w-full left-0 right-0 overflow-x-hidden lg:h-[100vh] md:h-[100vh] sm:h-[100vh] flex flex-col justify-center items-center bg-fixed"
      style={{
        backgroundImage: 'url("/images/hero-bg.webp")',
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="h-full flex flex-col justify-center items-center z-30">
        <div className="space-adjustment mx-auto max-w-4xl sm:max-w-2xl">
          <div className="flex flex-col justify-center items-center text-center py-12 sm:py-4 sm:px-4">
            <h1 className="hero-title font-bold text-white text-7xl sm:text-4xl leading-tight text-center ">
              Let&apos;s Accelerate Your Business Growth.
            </h1>
            <p className="w-[100%] mx-auto text-center mt-6 text-lg leading-8 text-white max-w-3xl">
              At Blooming Brands we&apos;re all about providing digital
              solutions to support your brand growth. We design beautiful, fast
              websites to engage your clients and showcase your products and
              services online. Have a project in-mind start the conversation and
              schedule a call.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="outline rounded-md px-3.5 py-2.5 text-lg font-semibold text-white "
              >
                Schedule A Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCallToAction;

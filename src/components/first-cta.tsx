"use client";

const FirstCallToAction = () => {
  return (
    <div className="relative w-full lg:h-[80vh] sm:h-[50vh] flex flex-col justify-center items-center bg-fixed bg-[url('/images/hero-bg.webp')] bg-cover bg-top bg-no-repeat">
      <div className="overlay absolute lg:h-[80vh] sm:h-[71.5vh] top-0 left-0 right-0 z-20 bg-black/60"></div>
      <div className="h-full flex flex-col justify-center items-center z-30">
        <div className="space-adjustment mx-auto max-w-4xl sm:max-w-2xl">
          <div className="flex flex-col justify-center items-center text-center py-12 sm:py-4 sm:px-4">
            <h1 className="hero-title font-bold text-white text-7xl sm:text-4xl leading-tight ">
              Blazing Fast Websites Built For Conversion
            </h1>
            <p className="mt-6 text-lg leading-8 text-white max-w-3xl">
              We specialize in crafting responsive websites that focus on user
              experiences and drive higher conversion rates. Through optimizing
              your brand message, compelling calls-to-action, and data-driven
              marketing strategies, we consistently deliver measurable and
              impactful results.
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

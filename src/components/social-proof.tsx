import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import MySlider from "./slick-slider";

const SocialProof = () => {
  return (
    <div className="h-[20vh] bg-white text-black pb-4 pt-6">
      <div className="w-full h-full mx-auto max-w-7xl px-24">
        <div className="w-full h-full mx-auto lg:text-center py-2 md:py-2 sm:py-2">
          <h2 className="mb-10 text-3xl font-extrabold tracking-tight leading-tight text-left text-gray-900 dark:text-white md:text-4xl">
            We&apos;ve partnerd with the best in the industry.
          </h2>
          <MySlider />
        </div>
      </div>
    </div>
  );
};

export default SocialProof;

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const CTASection = () => {
  const [isUp, setisUp] = useState(false);
  const toggleIsUp = () => {
    setisUp(!isUp);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      toggleIsUp();
    }, 300);
    return () => clearInterval(interval);
  }, [isUp]);

  return (
    <section className="relative overflow-hidden">
      <img
        className={cn(
          " absolute inset-0 object-cover w-full brightness-50 translate-y-0 transform ease-in-out  transition-all duration-[5000ms]",
          isUp && "-translate-y-[2rem]"
        )}
        alt="cta"
        src="/img/bg-slide-1.webp"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#000B1C] to-neutral-900 opacity-50" />
      <div className="absolute inset-0 m-3 xs:m-4 sm:m-6 md:m-8 border border-gray-500/70 sm:border-gray-500" />
      <div className="relative flex items-center py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 justify-center flex-col px-4 xs:px-5 sm:px-6 lg:px-8">
        <h4 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-heading-lg max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-white text-center leading-tight xs:leading-snug sm:leading-tight font-semibold lg:font-normal">
          IT Solutions & Services Right At Your Fingertips
        </h4>
        <Button className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 uppercase py-3 xs:py-4 sm:py-5 md:py-6 lg:py-7 px-6 xs:px-7 sm:px-8 md:px-9 lg:px-10 text-sm xs:text-sm sm:text-base touch-manipulation active:scale-95 hover:scale-105 transition-transform duration-300 w-full xs:w-auto max-w-xs xs:max-w-none">
          Discover More
        </Button>
      </div>
    </section>
  );
};

export default CTASection;

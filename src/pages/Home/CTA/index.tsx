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
      <div className="absolute inset-0  m-8 border border-gray-500" />
      <div className=" relative flex items-center py-28 justify-center flex-col ">
        <h4 className="text-heading-lg max-w-xl text-white text-center">
          IT Solutions & Services Right At Your Fingertips
        </h4>
        <Button className="mt-10 uppercase p-7 px-10 ">Discover More</Button>
      </div>
    </section>
  );
};

export default CTASection;

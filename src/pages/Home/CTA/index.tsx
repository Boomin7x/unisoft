import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden ">
      <img
        className={cn(
          "absolute inset-0 object-cover size-full brightness-50 translate-y-0 transform ease-in-out transition-all duration-[5000ms]"
        )}
        alt="cta"
        src="/img/bg-slide-1.webp"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#000B1C] to-neutral-900 opacity-50" />
      <div className="absolute inset-0 m-4 sm:m-6 lg:m-8 md:border border-gray-500" />
      <div className="relative flex items-center py-16 sm:py-20 lg:py-28 justify-center flex-col px-4 sm:px-6 lg:px-8">
        <h4 className="text-2xl sm:text-3xl lg:text-4xl max-w-lg sm:max-w-xl text-white text-center leading-tight">
          IT Solutions & Services Right At Your Fingertips
        </h4>
        <Button className="mt-6 sm:mt-8 lg:mt-10 uppercase p-4 sm:p-5 lg:p-7 px-6 sm:px-8 lg:px-10 text-sm sm:text-base">
          Discover More
        </Button>
      </div>
    </section>
  );
};

export default CTASection;

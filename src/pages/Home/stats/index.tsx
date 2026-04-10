import { Icon } from "@iconify/react";
import { useEffect, useState, type FC } from "react";

const StatsSection = () => {
  const statsData = [
    {
      icon: "gridicons:stats-alt-2",
      number: 412,
      name: "projects completed",
    },
    {
      icon: "mdi:customer-service",
      number: 412,
      name: "happy clients",
    },
    {
      icon: "stash:trophy",
      number: 4,
      name: "Awward winning",
    },
    {
      icon: "fluent:people-team-20-regular",
      number: 3,
      name: "Company Team",
    },
  ];
  return (
    <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 relative bg-[url(/img/bg-slide-1.webp)] bg-cover bg-center">
      <div className="bg-purple-950 absolute inset-0 opacity-90 brightness-50" />
      <div className="bg-white absolute inset-0 opacity-20 brightness-20" />
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {statsData?.map((items, i) => (
            <Stats key={items?.number + i} {...items} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface IStats {
  icon: string;
  number: number;
  name: string;
}

const Stats: FC<IStats> = ({ icon, number, name }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    // Reset to 0 if number changes
    setCurrentNumber(0);
  }, [number]);

  useEffect(() => {
    if (currentNumber >= number) return;

    const increment = Math.ceil(number / 50); // Animate in ~1s for most numbers
    const interval = setInterval(() => {
      setCurrentNumber((prev) => {
        const next = prev + increment;
        return next >= number ? number : next;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [currentNumber, number]);

  return (
    <div className="flex flex-col gap-2 xs:gap-3 items-center text-white relative justify-center text-center">
      <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 lg:w-[5rem] lg:h-[5rem] bg-secondary flex items-center justify-center rounded-sm">
        <Icon icon={icon} className="text-primary text-2xl xs:text-3xl sm:text-4xl" />
      </div>
      <h3 className="text-3xl xs:text-4xl sm:text-5xl font-bold">{currentNumber}</h3>
      <h5 className="text-xs xs:text-sm uppercase font-medium tracking-wider leading-tight">{name}</h5>
    </div>
  );
};

export default StatsSection;

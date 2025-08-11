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
    <section className="py-16 sm:py-20 lg:py-28 border relative bg-[url(/img/bg-slide-1.webp)] relative bg-cover bg-center">
      <div className="bg-purple-950 absolute inset-0 opacity-90 brightness-50" />
      <div className="bg-white absolute inset-0 opacity-20 brightness-20" />
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
        {statsData?.map((items, i) => (
          <Stats key={items?.number + i} {...items} />
        ))}
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
    <div className="flex flex-col gap-2 sm:gap-3 items-center text-white relative justify-center">
      <div className="size-12 sm:size-16 lg:size-[5rem] bg-secondary flex items-center justify-center">
        <Icon
          icon={icon}
          className="text-primary text-2xl sm:text-3xl lg:text-4xl"
        />
      </div>
      <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
        {currentNumber}
      </h3>
      <h5 className="text-xs uppercase text-center leading-tight">{name}</h5>
    </div>
  );
};

export default StatsSection;

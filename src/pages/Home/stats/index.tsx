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
    <section className="py-28 border relative bg-[url(/img/bg-slide-1.webp)] relative bg-cover bg-center">
      <div className="bg-purple-950 absolute inset-0 opacity-90 brightness-50" />
      <div className="bg-white absolute inset-0 opacity-20 brightness-20" />
      <div className=" max-w-4xl mx-auto flex items-center justify-between">
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
    <div className="flex flex-col gap-3 items-center text-white relative justify-center">
      <div className="size-[5rem] bg-secondary flex items-center justify-center">
        <Icon icon={icon} className="text-primary text-4xl" />
      </div>
      <h3 className="text-5xl">{currentNumber}</h3>
      <h5 className="text-xs uppercase">{name}</h5>
    </div>
  );
};

export default StatsSection;

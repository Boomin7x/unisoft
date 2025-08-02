import { cn } from "@/lib/utils";
import useScroll from "@/pages/_hooks/useScroll";

const Navbar = () => {
  const { isScrollingDown, isScrollingUp } = useScroll();
  return (
    <div
      className={cn(
        `py-7 w-full flex shadow-lg fixed top-0 left-0 right-0 z-50 bg-transparent transition-colors duration-300`,
        isScrollingDown && "bg-emerald-500",
        isScrollingUp && "bg-white"
      )}
    >
      <div className="mx-auto">Navbar</div>
    </div>
  );
};

export default Navbar;

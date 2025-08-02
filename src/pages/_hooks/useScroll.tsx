import React from "react";

const useScroll = () => {
  const [isScrollingDown, setIsScrollingDown] = React.useState(false);
  const [isScrollingUp, setIsScrollingUp] = React.useState(false);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setIsScrollingDown(true);
        setIsScrollingUp(false);
      } else {
        setIsScrollingDown(false);
        setIsScrollingUp(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrollingDown, isScrollingUp };
};

export default useScroll;

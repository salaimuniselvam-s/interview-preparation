import { useEffect, useState } from "react";

export const useWidth = (a, b, c) => {
  console.log(a, b, c);
  const [width, setWidth] = useState("");

  const resize = () => setWidth(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
};

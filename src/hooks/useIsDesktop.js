import { useState, useEffect } from "react";

function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(
    () => window.innerWidth >= breakpoint
  );

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= breakpoint);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isDesktop;
}

export default useIsDesktop;

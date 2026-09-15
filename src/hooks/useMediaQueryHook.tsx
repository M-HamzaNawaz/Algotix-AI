import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useBreakpoint = () => {
  const [isTablet, setIsTablet] = useState(false);

  const isTab = useMediaQuery({ minWidth: 768 });
  useEffect(() => {
    setIsTablet(isTab);
  }, [isTab]);

  return { isTablet };
};

export default useBreakpoint;

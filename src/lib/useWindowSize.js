import debounce from "lodash/debounce";
import { useState, useEffect } from "react";

const isClient = typeof window !== "undefined";

function getSize() {
  return {
    height: isClient
      ? window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
      : undefined,
    width: isClient
      ? window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      : undefined,
  };
}

function useWindowSize(wait = 150, options = undefined) {
  const [windowSize, setWindowSize] = useState(getSize);
  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }
    const debouncedHandleResize = debounce(handleResize, wait, options);

    window.addEventListener("resize", debouncedHandleResize);

    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, [options, wait]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export default useWindowSize;

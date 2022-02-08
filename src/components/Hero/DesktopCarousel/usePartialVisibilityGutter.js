import { useState, useEffect } from "react";

import { useTheme } from "@material-ui/core";

import useWindowSize from "@/outbreakafrica/lib/useWindowSize";
import useBreakpoint from "@/outbreakafrica/lib/useBreakpoint";

function usePartialVisibilityGutter(spacing = 0) {
  const theme = useTheme();
  const breakpoint = useBreakpoint();
  const { width: windowWidth } = useWindowSize();
  const [partialVisibilityGutter, setPartialVisibilityGutter] = useState(0);
  useEffect(() => {
    if (["md", "lg", "xl"].includes(breakpoint)) {
      const pageWidth = theme.widths.values[breakpoint];
      const gutter = (windowWidth - pageWidth) / 2 - spacing;
      setPartialVisibilityGutter(gutter);
    } else {
      setPartialVisibilityGutter(0);
    }
  }, [breakpoint, windowWidth]);
  return partialVisibilityGutter;
}

export default usePartialVisibilityGutter;

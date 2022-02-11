import { useTheme } from "@material-ui/core";
import { useState, useEffect } from "react";

import useBreakpoint from "@/outbreakafrica/lib/useBreakpoint";
import useWindowSize from "@/outbreakafrica/lib/useWindowSize";

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
  }, [breakpoint, spacing, theme.widths.values, windowWidth]);
  return partialVisibilityGutter;
}

export default usePartialVisibilityGutter;

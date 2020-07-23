import { useMediaQuery, useTheme } from "@material-ui/core";

function useBreakpoint() {
  const theme = useTheme();
  let breakpoint = "xs";
  if (useMediaQuery(theme.breakpoints.only("sm"))) {
    breakpoint = "sm";
  }
  if (useMediaQuery(theme.breakpoints.only("md"))) {
    breakpoint = "md";
  }
  if (useMediaQuery(theme.breakpoints.only("lg"))) {
    breakpoint = "lg";
  }
  if (useMediaQuery(theme.breakpoints.only("xl"))) {
    breakpoint = "xl";
  }

  return breakpoint;
}

export default useBreakpoint;

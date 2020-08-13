import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography, widths }) => ({
  root: {
    width: "100%",
  },
  actionIcon: {
    height: typography.pxToRem(24),
    width: typography.pxToRem(24),
    [breakpoints.up("md")]: {
      height: typography.pxToRem((widths.values.md * 30) / widths.values.xl),
      width: typography.pxToRem((widths.values.md * 30) / widths.values.xl),
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem((widths.values.lg * 30) / widths.values.xl),
      width: typography.pxToRem((widths.values.lg * 30) / widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      height: typography.pxToRem(30),
      width: typography.pxToRem(30),
    },
  },
  attribution: {
    backgroundColor: palette.background.default,
    borderBottom: `4px solid ${palette.primary.main}`,
  },
  attributionSource: {
    "& div": {
      color: "#9D9C9C",
    },
    "& .site": {
      color: palette.secondary.main,
      display: "block",
    },
  },
  chartRoot: {
    padding: "42px 38px 33px 38px",
    marginBottom: "33px",
  },
  containerGrid: {
    width: "100%",
  },
  chart: {
    margin: "0 !important",
  },
  containerRoot: {},
  content: {
    paddingBottom: 0,
  },
  title: {
    fontSize: typography.subtitle2.fontSize,
    fontWeight: typography.subtitle2.fontWeight,
  },
  iframe: {
    width: "100%",
    height: "100%",
  },
  source: {
    color: "#9D9C9C",
    marginLeft: "0 !important",
    textDecoration: "none",
  },
}));

export default useStyles;

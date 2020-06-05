import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    width: "100%",
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

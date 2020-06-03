import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    width: "100%",
  },
  chartRoot: {
    padding: "42px 38px 33px 38px",
    marginBottom: "33px",
  },
  containerRoot: {
    backgroundColor: "#EEEEEE !important",
  },
  chart: {
    margin: "0.5rem !important",
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

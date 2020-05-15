import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({typography}) => ({
  root: {
    width: "100%",
  },
  chartRoot: {
    boxShadow: "0px 4px 4px #00000029",
    border: "1px solid #D6D6D6",
    marginBottom: "1.3125rem",
    marginTop: "2.5rem",
    padding: "42px 38px 33px 38px",
    position: "relative",
    width: "100%",
  },
  containerRoot: {
    width: "100%",
    backgroundColor: "#EEEEEE !important",
  },
  chart: {
    margin: '0.5rem !important',
  },
  content: {
    paddingBottom: 0,
  },
  actionIcon: {
    width: "2rem",
    height: "auto"
  },
  descriptionWrapper: {
    position: 'absolute',
  },
  description: {
    width: '100%',
  },
  title: {
    fontSize: typography.subtitle2.fontSize,
    fontWeight: typography.subtitle2.fontWeight,
  },
  iframe:{
    width: '100%',
    height: '100%',
  },
  source: {
    color: "#9D9C9C",
    marginLeft: '0 !important',
    textDecoration: 'none'
  },
}));

export default useStyles;

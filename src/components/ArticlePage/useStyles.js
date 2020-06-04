import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography, widths }) => ({
  root: {},
  section: {},
  attributes: {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    position: "relative",
    marginBottom: "50px",
    [breakpoints.up("md")]: {
      marginBottom: (widths.values.md * 100) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      marginBottom: (widths.values.lg * 100) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      marginBottom: "100px",
    },
  },
  content: {
    width: "inherit",
    "& .wp-block-quote": {
      color: palette.primary.main,
      fontSize: typography.body1.fontSize,
      margin: 0,
      marginBottom: "21px",
    },
    "& img" : {
      width: "100%",
    },
    "& figure": {
      marginRight: 0,
      marginLeft: 0,
      marginTop: "2rem",
      marginBottom: "3.125rem",
    },
    [breakpoints.up("md")]: {
      "& .wp-block-quote": {
        borderLeft: "1px solid #0050FF",
        marginLeft: (widths.values.md * 69) / widths.values.xl,
        marginBottom: (widths.values.md * 50) / widths.values.xl,
        paddingLeft: (widths.values.md * 69) / widths.values.xl,
        paddingTop: (widths.values.md * 24) / widths.values.xl,
      },
      "& figure": {
        marginTop: (widths.values.md * 86) / widths.values.xl,
        marginBottom: (widths.values.md * 100) / widths.values.xl,
      },
    },
    [breakpoints.up("lg")]: {
      "& .wp-block-quote": {
        marginLeft: (widths.values.lg * 69) / widths.values.xl,
        marginBottom: (widths.values.lg * 50) / widths.values.xl,
        paddingLeft: (widths.values.lg * 69) / widths.values.xl,
        paddingTop: (widths.values.lg * 24) / widths.values.xl,
      },
      "& figure": {
        marginTop: (widths.values.lg * 86) / widths.values.xl,
        marginBottom: (widths.values.lg * 100) / widths.values.xl
      },
    },
    [breakpoints.up("xl")]: {
      "& .wp-block-quote": {
        marginLeft: "69px",
        marginBottom: "50px",
        paddingLeft: "69px",
        paddingTop: "24px",
      },
      "& figure": {
        marginTop: "5.375rem",
        marginBottom: "6.25rem",
      },
    },
  },
  date: {
    paddingLeft: 7,
    fontSize: 12,
    [breakpoints.up("md")]: {
      fontSize: "initial",
      paddingLeft: 0,
    },
  },
  highlight: {
    fontWeight: "bold",
    marginBottom: "2.3125rem",
    "& p": {
      margin: 0,
    },
  },
  icon: {
    objectFit: "contain",
    height: "1.375rem",
    width: "1.375rem",
    [breakpoints.up("xl")]: {
      height: "2.125rem",
      width: "2.125rem",
    },
  },
  link: {
    display: "inline-block",
    paddingRight: "1rem",
  },
  organization: {
    fontSize: 14,
    fontWeight: "bold",
    [breakpoints.up("md")]: {
      display: "block",
      fontSize: "initial",
    },
  },
  readAttr: {
    paddingTop: 7,
    [breakpoints.up("md")]: {
      paddingLeft: (widths.values.md * 74) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      paddingLeft: (widths.values.lg * 74) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      paddingLeft: 74,
    },
  },
  socialIcons: {
      [breakpoints.up("md")]: {
        position: "absolute",
        right: (widths.values.md * -307) / widths.values.xl ,
      },
      [breakpoints.up("lg")]: {
        right: (widths.values.lg * -307) / widths.values.xl,
      },
      [breakpoints.up("xl")]: {
        right: "-307px",

      },
  },
  title: {
    marginBottom: "2rem",
  },
}));

export default useStyles;

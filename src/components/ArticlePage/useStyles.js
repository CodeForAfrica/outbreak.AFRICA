import { makeStyles } from "@material-ui/core/styles";
import quote from "assets/quote.svg";

const useStyles = makeStyles(
  ({ breakpoints, palette, typography, widths }) => ({
    root: {},
    section: {},
    attributes: {
      display: "flex",
      alignItems: "flex-end",
      width: "100%",
      position: "relative",
      marginBottom: typography.pxToRem(50),
      [breakpoints.up("md")]: {
        marginBottom: (widths.values.md * 100) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        marginBottom: (widths.values.lg * 100) / widths.values.xl,
      },
      [breakpoints.up("xl")]: {
        marginBottom: typography.pxToRem(100),
      },
    },
    authorDiv: {
      display: "none",
      [breakpoints.up("md")]: {
        position: "relative",
        display: "initial",
        height: (widths.values.md * 839) / widths.values.xl,
        paddingRight: (widths.values.md * 73) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        height: (widths.values.lg * 839) / widths.values.xl,
        paddingRight: (widths.values.lg * 73) / widths.values.xl,
      },
      [breakpoints.up("xl")]: {
        height: typography.pxToRem(839),
        paddingRight: typography.pxToRem(73),
      },
    },
    articleContent: {
      [breakpoints.up("md")]: {
        minHeight: (widths.values.md * 1591) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        minHeight: (widths.values.lg * 1591) / widths.values.xl,
      },
      [breakpoints.up("xl")]: {
        minHeight: typography.pxToRem(1591),
      },

    },
    aside: {
      [breakpoints.up("md")]: {
        right: (widths.values.md * 73) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        right: (widths.values.lg * 73) / widths.values.xl,
      },
      [breakpoints.up("xl")]: {
        right: typography.pxToRem(73),
      },
    },
    content: {
      width: "inherit",
      "& .wp-block-quote": {
        color: palette.primary.main,
        fontSize: typography.body1.fontSize,
        margin: 0,
        marginTop: typography.pxToRem(85),
        marginBottom: typography.pxToRem(21),
        position: "relative",
        "&:before": {
          content: `url(${quote})`,
          color: palette.primary.main,
          backgroundColor: "white",
          height: typography.pxToRem(50),
          position: "absolute",
          top: typography.pxToRem(-70),
          left: typography.pxToRem(-10),
        },
        "& p": {
          margin: 0,
        },
      },
      "& img": {
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
          marginLeft: (widths.values.md * 69) / widths.values.xl,
          marginBottom: (widths.values.md * 50) / widths.values.xl,
          marginTop: (widths.values.md * 23) / widths.values.xl,
          paddingTop: (widths.values.md * 24) / widths.values.xl,
          "&:before": {
            top: "-10px !important",
            height: "70px !important",
          },
          "& p": {
            paddingLeft: (widths.values.md * 69) / widths.values.xl,
            borderLeft: "1px solid #0050FF",
          },
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
          marginTop: (widths.values.lg * 23) / widths.values.xl,
          paddingTop: (widths.values.lg * 24) / widths.values.xl,
          "& p": {
            paddingLeft: (widths.values.lg * 69) / widths.values.xl,
          },
        },
        "& figure": {
          marginTop: (widths.values.lg * 86) / widths.values.xl,
          marginBottom: (widths.values.lg * 100) / widths.values.xl,
        },
      },
      [breakpoints.up("xl")]: {
        "& .wp-block-quote": {
          marginLeft: typography.pxToRem(69),
          marginBottom: typography.pxToRem(50),
          marginTop: typography.pxToRem(23),
          paddingTop: typography.pxToRem(24),
          "& p": {
            paddingLeft: typography.pxToRem(69),
          },
        },
        "& figure": {
          marginTop: "5.375rem",
          marginBottom: "6.25rem",
        },
      },
    },
    chartShadow: {
      boxShadow: "0rem 0.25rem 0.25rem #00000029",
      border: "1px solid #D6D6D6",
    },
    date: {
      fontSize: 12,
      display: "flex",
      [breakpoints.up("md")]: {
        display: "initial",
        fontSize: "initial",
        paddingLeft: 0,
      },
    },
    heroImage: {
      width: "100%",
      height: typography.pxToRem(119),
      [breakpoints.up("md")]: {
        height: (widths.values.md * 633) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        height: (widths.values.lg * 633) / widths.values.xl,
      },
      [breakpoints.up("xl")]: {
        height: typography.pxToRem(633),
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
      display: "inline-flex",
      paddingRight: "1rem",
    },
    topLink: {
      lineHeight: 60 / 24,
      "&:hover": {
        color: palette.primary.main,
      },
      "& svg": {
        fontSize: "0.8rem",
        marginRight: "0.8rem",
      },
    },
    organization: {
      fontSize: 14,
      fontWeight: "bold",
      display: "flex",
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
      paddingTop: "3.125rem",
      [breakpoints.up("md")]: {
        paddingTop: "1.5rem",
        display: "initial",
        position: "absolute",
        right: (widths.values.md * -307) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        right: (widths.values.lg * -307) / widths.values.xl,
      },
      [breakpoints.up("xl")]: {
        right: typography.pxToRem(-307),
      },
    },
    title: {
      marginBottom: "2rem",
      paddingTop: "2.1rem",
      [breakpoints.up("md")]: {
        paddingTop: "1rem",
      },
      [breakpoints.up("xl")]: {
        fontSize: typography.pxToRem(60),
        lineHeight: 80/60,
      }
    },
    authorContentDiv: {
      paddingTop: "0rem",
    },
    authorRoot: {
      paddingLeft: typography.pxToRem(41),
      paddingRight: typography.pxToRem(41),
      marginBottom: "0 !important",
    },
    dataSource: {
      backgroundColor: "#EEEEEE",
      boxShadow: "0px 0.25rem 0.25rem #00000029",
      padding: "3.625rem 2.5rem 2.5rem",
      [breakpoints.up("md")]: {
        marginTop: (widths.values.md * 50) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        marginTop: (widths.values.lg * 50) / widths.values.xl,
      },
      [breakpoints.up("lg")]: {
        marginTop: typography.pxToRem(50),
      },
    },
  })
);

export default useStyles;
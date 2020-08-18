import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  ({ breakpoints, palette, typography, widths }) => ({
    root: {},
    section: {},
    sectionTitle: {
      margin: "unset",
      marginBottom: typography.pxToRem(16),
    },
    profile: {},
    profileDescription: {
      marginTop: typography.pxToRem(25),
    },
    profileLink: {},
    profileName: {
      display: "inline-block",
      marginBottom: "0.5rem",
    },
    profileTitle: {
      marginTop: typography.pxToRem(25),
    },
    profileContents: {
      alignContent: "flex-end",
      "&:before": {
        background:
          "transparent linear-gradient(180deg, #170F4900 0%, #170F49E6 24%, #170F49 35%, #170F49 100%) 0% 0% no-repeat padding-box;",
        opacity: 1,
      },
    },
    profileContentsRoot: {
      "&:after": {
        bottom: 0,
        content: '""',
        left: 0,
        mixBlendMode: "multiply",
        opacity: 0.3,
        position: "absolute",
        right: 0,
        top: 0,
      },
    },
    profileContentsRoot0: {
      "&:after": {
        backgroundColor: `${palette.primary.main}`,
      },
    },
    profileContentsRoot1: {
      "&:after": {
        backgroundColor: `${palette.secondary.main}`,
      },
    },
    profileContentsRoot2: {
      "&:after": {
        backgroundColor: `${palette.highlight.main}`,
      },
    },
    profiles: {
      borderTop: "1px solid #D6D6D6",
      padding: `${typography.pxToRem(15.5)} 0`,
      [breakpoints.up("md")]: {
        border: "unset",
        padding: "0.25rem",
        paddingBottom: typography.pxToRem(
          (52 * widths.values.md) / widths.values.xl
        ),
      },
      [breakpoints.up("lg")]: {
        paddingBottom: typography.pxToRem(
          (52 * widths.values.lg) / widths.values.xl
        ),
      },
      [breakpoints.up("xl")]: {
        paddingBottom: typography.pxToRem(52),
      },
    },
  })
);

export default useStyles;

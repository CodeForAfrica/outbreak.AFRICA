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
      maxHeight: typography.pxToRem(24 * 5), // 5 lines
      [breakpoints.up("md")]: {
        maxHeight: "unset",
      },
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
      "&:before": {
        background:
          "transparent linear-gradient(180deg, #170F49 0%, #000000 60%, #000000 100%) 0% 0% no-repeat padding-box",
        mixBlendMode: "multiply",
        opacity: 0.5,
      },
      [breakpoints.up("md")]: {
        alignContent: "flex-end",
        "&:before": {
          background:
            "transparent linear-gradient(180deg, #170F4900 0%, #170F49E6 24%, #170F49 35%, #170F49 100%) 0% 0% no-repeat padding-box;",
          opacity: 1,
        },
      },
    },
    profileContactsIcon: {
      objectFit: "contain",
      height: "1rem",
      width: "1rem",
      [breakpoints.up("xl")]: {
        height: "1.375rem",
        width: "1.375rem",
      },
    },
    profileContactsLink: {
      paddingRight: "0.85rem",
      "&:last-child": {
        marginRight: 0,
      },
      [breakpoints.up("xl")]: {
        paddingRight: "1rem",
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

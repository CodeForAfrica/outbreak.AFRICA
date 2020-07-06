import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
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
  profileName: {},
  profileTitle: {
    marginTop: typography.pxToRem(25),
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
    padding: "0.25rem",
  },
}));

export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    padding: "2rem",
    [breakpoints.up("md")]: {
      padding: 0,
    },
  },
  sectionTitle: {
    margin: "unset",
    marginBottom: typography.pxToRem(16),
  },
  profileDescription: {
    color: palette.text.secondary,
    margin: "0.6875rem 0",
    zIndex: 1,
  },
  profileLink: {},
  profileName: {
    color: palette.text.secondary,
    zIndex: 1,
  },
  profileTitle: {
    color: palette.text.secondary,
    zIndex: 1,
  },
  profiles: {},
  picture: {
    position: 'relative',
    "&:after": {
      backgroundColor: `${palette.primary.main}`,
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
  mobileImg: {
    height: "auto",
    width: "100%",
  },

  profilesGridList: {
    "&:after": {
      mixBlendMode: "overlay",
    },
    "& .profile-0:after": {
      backgroundColor: palette.primary.main,
    },
    "& .profile-1:after": {
      backgroundColor: `#000000`,
    },
    "& .profile-2:after": {
      backgroundColor: palette.highlight.main,
    },
  },
  profilesScrollBar: {},
}));

export default useStyles;

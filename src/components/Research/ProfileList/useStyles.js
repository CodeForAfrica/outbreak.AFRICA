import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({breakpoints, palette}) => ({
  root: {
    padding: "2rem",
    [breakpoints.up("md")]: {
      padding: "5rem",
    },
  },
  icon: {
    width: "1.375rem",
    height: "1.375rem",
    objectFit: "contain",
  },
  link: {
    display: "inline-block",
    paddingRight: "1rem",
  },
  profile: {},
  profileDescription: {
    color: palette.text.secondary,
    margin: "0.6875rem 0",
    zIndex: 1,
  },
  profileLink: {},
  profileItemChildren: {
    zIndex: 1,
  },
  profileName: {
    color: palette.text.secondary,
    zIndex: 1,
  },
  profileNameSelected: {},
  profilePicture: {},
  profilePictureSelected: {},
  profileTitle: {
    color: palette.text.secondary,
    zIndex: 1,
  },
  profiles: {},
  profilesGridList: {
    // "&:after": {
    //  // mixBlendMode: "overlay",
    // },
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

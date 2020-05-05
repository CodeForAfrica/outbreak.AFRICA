import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem",
    [theme.breakpoints.up("md")]: {
      padding: "5rem",
    },
  },
  profile: {},
  profileDescription: {},
  profileLink: {},
  profileName: {},
  profileNameSelected: {},
  profilePicture: {},
  profilePictureSelected: {},
  profileTitle: {},
  profiles: {},
  profilesGridList: {},
  profilesScrollBar: {},
}));

export default useStyles;

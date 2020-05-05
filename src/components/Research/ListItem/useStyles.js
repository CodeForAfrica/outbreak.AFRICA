import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: (props) => (props.onClick ? "pointer" : "inherit"),
    position: "relative",
    height: (props) => props.height,
    padding: 16,
    width: "100%",
    "&:after": {
      backgroundColor: `${theme.palette.primary.main}`,
      backgroundImage: (props) => `url("${props.image.url}")`,
      backgroundPosition: "top left",
      backgroundSize: "100% auto",
      backgroundRepeat: "no-repeat",
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
  picture: {
    display: "none",
    height: "auto",
    width: "100%",
  },
  pictureSelected: {},
  title: {
    width: "100%",
  },
  link: {},
  name: {
    width: "100%",
  },
  nameSelected: {},
  description: {
    width: "100%",
  },
}));

export default useStyles;

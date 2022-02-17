import { RichTypography } from "@commons-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import iconBox from "@/outbreakafrica/assets/icon-infobox.svg";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: (props) => ({
    width: "100%",
    [`& ${props.selector}`]: {
      background: "#C1D5FF",
    },
    [`& ${props.selector} h2`]: {
      ...typography.subtitle1,
      backgroundImage: `url(${iconBox.src})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "24px 24px",
      fontWeight: 700,
      lineHeight: 1,
      paddingBottom: 8,
      paddingLeft: typography.pxToRem(30),
    },
    [`& ${props.selector} label`]: {
      ...typography.caption,
      padding: 0,
      marginBottom: "0.25rem",
    },
    [`& ${props.selector} .asterisk`]: {
      ...typography.caption,
      color: palette.text.primary,
      top: 0,
    },
    [`& ${props.selector} .mc-field-group input`]: {
      border: "1px solid #9D9C9C",
      borderRadius: 10,
    },
    [`& ${props.selector} strong`]: {
      ...typography.subtitle2,
    },
    [`& ${props.selector} .button`]: {
      ...typography.button,
      background: "none",
      borderRadius: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      border: "none",
      borderBottom: `4px solid ${palette.secondary.main}`,
      color: palette.secondary.main,
      width: "auto",
      "&:hover": {
        background: "none",
        border: "none",
        borderBottom: `4px solid ${palette.secondary.main}`,
      },
    },
  }),
}));

function Form({ children, ...props }) {
  const classes = useStyles(props);

  return <RichTypography className={classes.root}>{children}</RichTypography>;
}

Form.propTypes = {
  children: PropTypes.node,
  selector: PropTypes.string.isRequired,
};

Form.defaultProps = {
  children: undefined,
};

export default Form;

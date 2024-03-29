import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import Image from "@/outbreakafrica/components/Image";

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    position: "relative",
  },
}));

function Figure({ className, ...props }) {
  const classes = useStyles(props);

  return (
    <figure className={clsx(classes.root, className)}>
      <Image layout="fill" {...props} />
    </figure>
  );
}

Figure.propTypes = {
  className: PropTypes.string,
};

Figure.defaultProps = {
  className: undefined,
};

export default Figure;

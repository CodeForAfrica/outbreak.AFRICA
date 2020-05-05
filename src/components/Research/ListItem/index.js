/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import React from "react";
import { PropTypes } from "prop-types";

import clsx from "clsx";

import { Button, Grid, Typography } from "@material-ui/core";
import useStyles from "./useStyles";

function ListItem({
  description,
  image,
  link,
  linkComponent,
  name,
  onClick,
  selected,
  title,
  ...props
}) {
  const classes = useStyles({ ...props, image, onClick });
  const buttonProps = onClick
    ? { role: "button", tabIndex: 0, onClick, onKeyUp: undefined }
    : {};
  const LinkComponent = linkComponent || Button;

  return (
    <Grid
      container
      direction="column"
      justify="flex-end"
      alignItems="flex-start"
      {...buttonProps}
      className={classes.root}
    >
      <img
        alt={image.description || name || title}
        src={image.url}
        className={clsx(classes.picture, {
          [classes.pictureSelected]: selected,
        })}
      />
      {name && name.length > 0 && (
        <Typography
          variant="h3"
          className={clsx(classes.name, {
            [classes.nameSelected]: selected,
          })}
        >
          {name}
        </Typography>
      )}
      <Typography variant="subtitle2" className={classes.title}>
        {title}
      </Typography>
      {description && description.length > 0 && (
        <Typography variant="caption" className={classes.description}>
          {description}
        </Typography>
      )}
      {link && link.url && (
        <LinkComponent
          href={link.url}
          variant="outlined"
          size="small"
          className={classes.link}
        >
          {link.title || link.url}
        </LinkComponent>
      )}
    </Grid>
  );
}

ListItem.propTypes = {
  description: PropTypes.string,
  image: PropTypes.shape({
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
  href: PropTypes.string,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
  linkComponent: PropTypes.elementType,
  name: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
ListItem.defaultProps = {
  description: undefined,
  href: undefined,
  link: undefined,
  linkComponent: undefined,
  name: undefined,
  onClick: undefined,
  selected: false,
};

export default ListItem;

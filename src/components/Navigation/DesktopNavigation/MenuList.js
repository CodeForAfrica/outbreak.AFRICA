import React from "react";
import PropTypes from "prop-types";

import { MenuItem, MenuList } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Link from "components/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  menuItem: {
    "&.MuiListItem-button:hover": {
      backgroundColor: theme.palette.text.secondary,
      color: theme.palette.primary.main,
    },
    // ListItem classes are set using .Mui-selected & hence we need to override
    // them the same way; Would have preferred via `selected` but alas!
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.secondary,
    },
    "&.Mui-selected:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.secondary,
    },
  },
}));

function CustomMenuItem(props) {
  return <MenuItem component={Link} divider color="secondary" {...props} />;
}

function CustomMenuList({
  items,
  onKeyDown,
  selected,
  toAs,
  toHref,
  toName,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <MenuList classes={{ root: classes.root }} {...props}>
      {items.map((item) => (
        <CustomMenuItem
          key={toName(item)}
          underline="none"
          href={toHref(item)}
          as={toAs && toAs(item)}
          selected={selected && selected(item)}
          classes={{
            root: classes.menuItem,
          }}
        >
          {toName(item)}
        </CustomMenuItem>
      ))}
    </MenuList>
  );
}

CustomMenuList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  selected: PropTypes.func,
  toHref: PropTypes.func.isRequired,
  toAs: PropTypes.func,
  toName: PropTypes.func.isRequired,
};

CustomMenuList.defaultProps = {
  selected: undefined,
  toAs: undefined,
};

export default CustomMenuList;

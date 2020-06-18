import React from "react";
import PropTypes from "prop-types";

import {
  Grid,
  MenuList,
  Tooltip,
  Typography,
  MenuItem
} from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";
import { Search as SearchIcon } from "@material-ui/icons";
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
import sliceMultiLangData from 'utils/sliceMultiLangData';

import config from 'config';

const useStyles = makeStyles(({ breakpoints, palette, typography, widths }) => ({
  root: {
    alignItems: "center",
    display: "flex",
    width: "100%",
  },
  input: {
    backgroundColor: "#EEEEEE !important",
    border: "1px solid #707070 !important",
    borderRadius: typography.pxToRem(10),
    boxShadow: "none",
    color: "#9D9C9C",
    flex: 1,
    fontSize: "0.8125rem !important",
    [breakpoints.up("md")]: {
      border: "1px solid #9D9C9C !important",
      fontSize: "1.25rem !important",
      lineHeight: typography.pxToRem(38/20),
    },
  },
  iconButton: {
    color: "#9D9C9C",
    fontSize: "1.5rem",
  },
  inputIcon: {
    top: typography.pxToRem(10),
  },
  searchBar: {
    position: "relative",
    maxWidth: typography.pxToRem(247),
    [breakpoints.up("md")]: {
      maxWidth: typography.pxToRem((widths.values.md * 390) /widths.values.xl),
    },
    [breakpoints.up("lg")]: {
      maxWidth: typography.pxToRem((widths.values.lg * 390) /widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      maxWidth: typography.pxToRem(390),
    },
  },
  searchResults: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #707070",
    position: "absolute",
    boxShadow: "none",
    marginTop: '1.25rem',
    padding: '0.625rem',
    zIndex: 1,
    maxWidth: typography.pxToRem(247),
    [breakpoints.up("md")]: {
      maxWidth: typography.pxToRem((widths.values.md * 390) /widths.values.xl),
    },
    [breakpoints.up("lg")]: {
      maxWidth: typography.pxToRem((widths.values.lg * 390) /widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      maxWidth: typography.pxToRem(390),
    },
    '& > li > p': {
      fontFamily: typography.fontText,
      fontSize: '1rem',
      color: "#170F49",
    },
    [breakpoints.up('md')]: {
      backgroundColor: "#EEEEEE",
      '& > li > p': {
        color: "#9D9C9C",
      },
    }
  },
}));

function Search({ ariaLabel, isMobile, onClick, onChange, placeholder, ...props }) {
  const classes = useStyles(props);

  return (
    <ReactiveBase app="outbreak" url={config.ES_URL}>
      <DataSearch
        componentId="autoSuggest"
        dataField={['post_title', 'post_content']}
        highlight
        autosuggest
        queryFormat="and"
        placeholder="Search for issues, topics, etc.."
        showIcon={isMobile}
        className={classes.searchBar}
        iconPosition="right"
        icon={<SearchIcon className={classes.iconButton} />}
        innerClass={{
          input: classes.input,
          icon: classes.inputIcon,
        }}
        parseSuggestion={suggestion => ({
          label: (
            <Typography color="textSecondary" noWrap>
              {sliceMultiLangData(
                suggestion.source.post_title,
                config.DEFAULT_LANG
              )}
            </Typography>
          ),
          value: sliceMultiLangData(
            suggestion.source.post_title,
            config.DEFAULT_LANG
          ),
          source: suggestion.source
        })}
        render={({
          data,
          value,
          downshiftProps: { isOpen, getItemProps }
        }) => {
          return isOpen && Boolean(value.length) && Boolean(data.length) ? (
              <MenuList className={classes.searchResults}>
                {data.slice(0, 10).map(suggestion => (
                  <MenuItem
                    key={`${suggestion.value}-${suggestion._click_id}`} // eslint-disable-line no-underscore-dangle
                    {...getItemProps({ item: suggestion })}
                  >
                    <Tooltip
                      title={suggestion.value}
                      placement="bottom-start"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      {suggestion.label}
                    </Tooltip>
                  </MenuItem>
                ))}
              </MenuList>
          ) : null;
        }}
        />
    </ReactiveBase>
  );
}

Search.propTypes = {
  ariaLabel: PropTypes.string,
  placeholder: PropTypes.string,
  isMobile: PropTypes.bool.isRequired,
};

Search.defaultProps = {
  ariaLabel: "search al datasets",
  placeholder: "Search for issues, topics, etc…",
};
export default Search;

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

import { useRouter } from 'next/router';
import config from 'config';

const useStyles = makeStyles(({ breakpoints, typography }) => ({
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
  inputInput: {
    flex: 1,
    [breakpoints.up("md")]: {
      paddingBottom: typography.pxToRem(7),
      paddingLeft: typography.pxToRem(9),
      paddingRight: typography.pxToRem(9),
      paddingTop: typography.pxToRem(7),
    },
    [breakpoints.up("xl")]: {
      paddingBottom: typography.pxToRem(15),
      paddingLeft: typography.pxToRem(19),
      paddingRight: typography.pxToRem(19),
      paddingTop: typography.pxToRem(13),
    },
  },
  iconButton: {
    color: "#9D9C9C",
    fontSize: "1.5rem",
  },
  inputIcon: {
    top: typography.pxToRem(10),
  }
}));

function Search({ ariaLabel, isMobile, onClick, onChange, placeholder, ...props }) {
  const classes = useStyles(props);
  const router = useRouter();

  const handleInput = queryTerm => {
    if (queryTerm.length > 0) {
      router.push({
        pathname: '/search',
        query: { q: queryTerm, lang: language }
      });
    }
  };

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
        iconPosition="right"
        icon={<SearchIcon className={classes.iconButton} />}
        innerClass={{
          input: classes.input,
          icon: classes.inputIcon,
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleInput(e.target.value);
          }
        }}
        onValueSelected={value => handleInput(value)}
        parseSuggestion={suggestion => ({
          label: (
            <Typography color="textSecondary" noWrap>
              {sliceMultiLangData(
                suggestion.source.post_title,
                language
              )}
            </Typography>
          ),
          value: sliceMultiLangData(
            suggestion.source.post_title,
            language
          ),
          source: suggestion.source
        })}
        render={({
          data,
          value,
          downshiftProps: { isOpen, getItemProps }
        }) => {
          return isOpen && Boolean(value.length) ? (
            <Grid container justify="flex-end">
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
            </Grid>
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

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Page from 'components/Page';
import Ticker from 'components/Ticker';
import MythBusting from 'components/MythBusting';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  ticker: {
    margin: '0 auto',
    padding: '3.8125rem 1.125rem 0 1.125rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '3.8125rem 0 0',
      width: `${(1640 / 1920) * 100}%`
    }
  }
}));

function description() {
  return {
    __html:
      'A searchable database of ' +
      '<span className="highlight">debunked misinformation</span>' +
      ', <br />\n' +
      'backed up by a transnational team of expert ' +
      '<span className="highlight">' +
      'African fact-\n' +
      '<br />' +
      'checkers' +
      '</span> ' +
      'to help you test new questionable claims.'
  };
}

function Home(props) {
  const classes = useStyles(props);

  return (
    <Page>
      <div className={classes.ticker}>
        <Ticker
          source={{
            title: 'openAFRICA',
            url: 'https://open.africa'
          }}
          statuses={[
            {
              name: 'Infections',
              status: 'Confirmed',
              value: '3,721'
            },
            {
              name: 'Deaths',
              status: 'Confirmed',
              value: '670',
              highlight: true
            },
            {
              name: 'Hospitalisations',
              status: 'Confirmed',
              value: '430'
            },
            {
              name: 'Recoveries',
              status: 'Confirmed',
              value: '730'
            }
          ]}
          title="Covid-19 cases in Africa"
        />
      </div>
      <MythBusting
        title="Myth-busting"
        description={`
              A searchable database of
              <span class="highlight">debunked misinformation</span>
               <br />
              backed up by a transnational team of expert
              <span class="highlight">
              African fact-
              <br />
              checkers
              </span>
              to help you test new questionable claims.
        `}
        linkText="LEARN MORE"
      />
    </Page>
  );
}

export default Home;

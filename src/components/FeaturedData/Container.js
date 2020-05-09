// import React from "react";
// import dynamic from 'next/dynamic';

// import { Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { ChartFactory } from "@hurumap-ui/charts";
// import { useProfileLoader } from "@hurumap-ui/core";
// import withApollo from 'lib/withApollo';

// import logo from 'assets/images/logo/logo-outbreak.svg';
// const ChartContainer = dynamic(
//   () => import('@hurumap-ui/core/ChartContainer'),
//   {
//     ssr: false
//   }
// );

// import { RichTypography } from "@commons-ui/core";

// import shareIcon from "assets/icon-share.svg";

// const useStyles = makeStyles(() => ({
//   root: {
//     width: "100%",
//   },
//   chart: {
//     boxShadow: "0px 4px 4px #00000029",
//     border: "1px solid #D6D6D6",
//     marginBottom: "1.3125rem",
//     marginTop: "2.5rem",
//     padding: "42px 38px 33px 38px",
//     position: "relative",
//     width: "100%",
//     "& img": {
//       height: "auto",
//       width: "100%",
//     },
//   },
//   icon: {
//     position: "absolute",
//     right: 38,
//     top: 42,
//     "& img": {
//       height: "auto",
//       width: "2rem",
//     },
//   },
// }));

// function Container({ action, children, description, ...props }) {
//   const classes = useStyles(props);

//   return (
//     <div className={classes.root}>
//       <div className={classes.chart}>
//         <div className={classes.icon}>
//           <img src={shareIcon} alt="share" />
//         </div>
//         {children}
//       </div>
//       <div className={classes.description}>
//         <RichTypography variant="body2">{description}</RichTypography>
//       </div>
//       <div className={classes.description}>
//         <Button variant="contained" size="large">
//           {action}
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default withApollo(Container);
import React, {useEffect, useMemo, useState} from "react";
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import config from 'config';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { RichTypography } from "@commons-ui/core";
import withApollo from 'lib/withApollo';

import shareIcon from "assets/icon-share.svg";

import ChartFactory from '@hurumap-ui/charts/ChartFactory';
import useProfileLoader from '@hurumap-ui/core/useProfileLoader';

import logo from 'assets/images/logo/logo-outbreak.svg';
const ChartContainer = dynamic(
  () => import('@hurumap-ui/core/ChartContainer'),
  {
    ssr: false
  }
);

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  chart: {
    boxShadow: "0px 4px 4px #00000029",
    border: "1px solid #D6D6D6",
    marginBottom: "1.3125rem",
    marginTop: "2.5rem",
    padding: "42px 38px 33px 38px",
    position: "relative",
    width: "100%",
    "& img": {
      height: "auto",
      width: "100%",
    },
  },
  icon: {
    position: "absolute",
    right: 38,
    top: 42,
    "& img": {
      height: "auto",
      width: "2rem",
    },
  },
}));


function Container({ action, children, description, featuredChart, ...props }) {
  const classes = useStyles(props);

  const { type, id, geoId } = featuredChart;
  const [ chart, setChart ] = useState();

  useEffect(() => {
      let url = `${config.WP_BACKEND_URL}/wp-json/hurumap-data/flourish/${id}`;
      if (type === 'hurumap') {
        url = `${config.WP_BACKEND_URL}/wp-json/hurumap-data/charts/${id}`
      }
      fetch(url)
      .then((res) => res.json())
      .then(data => setChart(data && {
        ...data,
        visual: {
          ...data.visual,
          queryAlias: data.visual.queryAlias || `viz${id}`,
        },
        stat: {
          ...data.stat,
          queryAlias: data.visual.queryAlias || `viz${id}`,
        },
    }));

  }, [id, type ]);
    
  const visuals = useMemo(() => (chart ? [chart.visual] : []), [chart]);

  const { profiles, chartData } = useProfileLoader({ geoId, visuals });

  console.log(chart);

  const source = useMemo(() => {
    const { isLoading, profileVisualsData } = chartData;

    if (!chart || isLoading) {
      return null;
    }

    const {
      visual: { queryAlias },
    } = chart;

    const sourceResult = profileVisualsData[`${queryAlias}Source`];
    return sourceResult && sourceResult.nodes && sourceResult.nodes.length
      ? sourceResult.nodes[0]
      : null;
  }, [chart, chartData]);

  if (
    !chart ||
    (!chartData.isLoading &&
      chartData.profileVisualsData[chart.visual.queryAlias] &&
      chartData.profileVisualsData[chart.visual.queryAlias].nodes &&
      chartData.profileVisualsData[chart.visual.queryAlias].nodes.length === 0)
  ) {
    return null
  }

  const rawData = !chartData.isLoading
  ? chartData.profileVisualsData[chart.visual.queryAlias].nodes
  : [];

  return (
     <ChartContainer
        logo={logo}
        key={chart.id}
        title={chart.title}
        subtitle={chart.subtitle}
        description={chart.description}
        sourceLink={chart.sourceTitle}
        sourceTitle={chart.sourceTitle}
        content={{
          height: 330
        }}
        actions={{
          handleShare: () => {},
          handleShowData: () => {},
          handleCompare: () => {}
        }}
        loading={chartData.isLoading}
        variant="analysis"
      >
        {!chartData.isLoading && (
          <ChartFactory
            profiles={profiles}
            definition={chart.visual}
            data={rawData}
          />
          )}
    </ChartContainer>
  );
}

export default withApollo(Container);


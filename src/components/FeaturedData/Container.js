import React, {useEffect, useMemo, useState} from "react";
import config from 'config';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { RichTypography } from "@commons-ui/core";
import withApollo from 'lib/withApollo';

import FacebookIcon from "assets/Icon awesome-facebook-f-b.svg";
import InstagramIcon from "assets/Icon awesome-instagram-b.svg";
import LinkedInIcon from "assets/Icon awesome-linkedin-in-b.svg";
import TwitterIcon from "assets/Icon awesome-twitter-b.svg";

import ChartFactory from '@hurumap-ui/charts/ChartFactory';
import useProfileLoader from '@hurumap-ui/core/useProfileLoader';

import logo from 'assets/images/logo/logo-outbreak.svg';
import ChartContainer from '@hurumap-ui/core/ChartContainer';

const useStyles = makeStyles(({typography}) => ({
  root: {
    width: "100%",
  },
  chartRoot: {
    boxShadow: "0px 4px 4px #00000029",
    border: "1px solid #D6D6D6",
    marginBottom: "1.3125rem",
    marginTop: "2.5rem",
    padding: "42px 38px 33px 38px",
    position: "relative",
    width: "100%",
  },
  containerRoot: {
    width: "100%",
    backgroundColor: "#EEEEEE !important",
  },
  chart: {
    margin: '0.5rem !important',
  },
  content: {
    paddingBottom: 0,
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
  actionIcon: {
    width: "2rem",
    height: "auto"
  },
  descriptionWrapper: {
    position: 'absolute',
  },
  description: {
    width: '100%',
  },
  title: {
    fontSize: typography.subtitle2.fontSize,
    fontWeight: typography.subtitle2.fontWeight,
  },
  iframe:{
    width: '100%',
    height: '100%',
  },
  source: {
    color: "#9D9C9C",
    marginLeft: '0 !important',
    textDecoration: 'none'
  },
}));


function Container({ action, children, description, featuredChart, ...props }) {
  const classes = useStyles(props);

  const { type, id, geoId } = featuredChart;
  const [ chart, setChart ] = useState();

  useEffect(() => {
      if (type === 'hurumap') {
        const url = `${config.WP_BACKEND_URL}/wp-json/hurumap-data/charts/${id}`
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
    }
  }, [id, type ]);

  if (type === 'flourish') {

    return (
      <div>
      <ChartContainer
         logo={logo}
         key={`${type}-${id}`}
         title={""}
         groupActions
         variant="data"
         content={{}}
         classes={{
           chart: classes.chart,
           content: classes.content,
           title: classes.title,
           root: classes.chartRoot,
           containerRoot: classes.containerRoot,
           sourceLink: classes.source,
           groupActionsButton: classes.actionIcon,
           descriptionWrapper: classes.descriptionWrapper,
           description: classes.description,
         }}
         groupIcons={{
           facebook: {
             icon: <img src={FacebookIcon} />,
           },
           twitter: {
             icon: <img src={TwitterIcon} />,
           },
           linkedin: {
             icon: <img src={LinkedInIcon} />,
           },
           instagram: {
             icon: <img src={InstagramIcon} />,
           },
           embed: {},
           link: {},
           download: {}
         }}
       >
          <iframe
            key={id}
            width="100%"
            scrolling="no"
            frameBorder="0"
            className={classes.iframe}
            title="flourish"
            src={`${config.WP_BACKEND_URL}/wp-json/hurumap-data/flourish/${id}/`} />
     </ChartContainer>
     <div className={classes.description}>
         <RichTypography variant="body2">{""}</RichTypography>
       </div>
       <div className={classes.description}>
         <Button variant="contained" size="large">
           {action}
         </Button>
       </div>
       </div>

    )

  }
    
  const visuals = useMemo(() => (chart ? [chart.visual] : []), [chart]);

  const { profiles, chartData } = useProfileLoader({ geoId, visuals });

  const source = useMemo(() => {
    const { isLoading, profileVisualsData } = chartData;

    if (!chart || isLoading){
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
    <div>
     <ChartContainer
        logo={logo}
        key={`${type}-${id}`}
        title={chart.title}
        subtitle={chart.subtitle}
        sourceLink={source && source.href}
        sourceTitle={source && source.title}
        content={{}}
        loading={chartData.isLoading}
        groupActions
        variant="data"
        classes={{
          chart: classes.chart,
          content: classes.content,
          title: classes.title,
          root: classes.chartRoot,
          containerRoot: classes.containerRoot,
          sourceLink: classes.source,
          groupActionsButton: classes.actionIcon,
          descriptionWrapper: classes.descriptionWrapper,
          description: classes.description,
        }}
        groupIcons={{
          facebook: {
            icon: <img src={FacebookIcon} />,
          },
          twitter: {
            icon: <img src={TwitterIcon} />,
          },
          linkedin: {
            icon: <img src={LinkedInIcon} />,
          },
          instagram: {
            icon: <img src={InstagramIcon} />,
          },
          embed: {},
          link: {},
          download: {}
        }}
      >
        {!chartData.isLoading && type === 'hurumap' ? (
          <ChartFactory
            profiles={profiles}
            definition={chart.visual}
            data={rawData}
            disableShowMore
          />
          ): (
            <div>
                Heyyy
            <iframe
              key={id}
              width="100%"
              scrolling="no"
              frameBorder="0"
              //title={chart.title}
              src={`${config.WP_BACKEND_URL}/wp-json/hurumap-data/flourish/${id}`} />
              </div>
          )}
    </ChartContainer>
    <div className={classes.description}>
        <RichTypography variant="body2">{chart.description}</RichTypography>
      </div>
      <div className={classes.description}>
        <Button variant="contained" size="large">
          {action}
        </Button>
      </div>
      </div>
  );
}

export default withApollo(Container);


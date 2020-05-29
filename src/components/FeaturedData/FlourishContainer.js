import React from "react";
import config from "config";
import dynamic from "next/dynamic";
import { Button } from "@material-ui/core";

import { RichTypography } from "@commons-ui/core";

import FacebookIcon from "assets/Icon awesome-facebook-f-b.svg";
import InstagramIcon from "assets/Icon awesome-instagram-b.svg";
import LinkedInIcon from "assets/Icon awesome-linkedin-in-b.svg";
import TwitterIcon from "assets/Icon awesome-twitter-b.svg";

import logo from "assets/images/logo/logo-outbreak.svg";
import useStyles from "./useStyles";

const ChartContainer = dynamic(
  () => import("@hurumap-ui/core/ChartContainer"),
  {
    ssr: false,
  }
);

function FlourishContainer({ action, children, featuredChart, ...props }) {
  const classes = useStyles(props);
  const {
    type,
    id,
    title: flourishTitle,
    description: flourishDescription,
  } = featuredChart;

  return (
    <div>
      <ChartContainer
        logo={logo}
        key={`indicator-${type}-${id}`}
        title={flourishTitle}
        content={{}}
        loading={false}
        groupActions
        variant="data"
        classes={{
          chart: classes.chart,
          content: classes.content,
          title: classes.title,
          root: classes.chartRoot,
          containerRoot: classes.containerRoot,
          groupActionsButton: classes.actionIcon,
          descriptionWrapper: classes.descriptionWrapper,
          description: classes.description,
        }}
        groupIcons={{
          facebook: {
            icon: <img src={FacebookIcon} alt="Facebook" />,
          },
          twitter: {
            icon: <img src={TwitterIcon} alt="Twitter" />,
          },
          linkedin: {
            icon: <img src={LinkedInIcon} alt="LinkedIn" />,
          },
          instagram: {
            icon: <img src={InstagramIcon} alt="Instagram" />,
          },
          embed: {},
          link: {},
          download: {},
        }}
      >
        <iframe
          key={id}
          width="100%"
          scrolling="no"
          frameBorder="0"
          title={flourishTitle}
          src={`${config.WP_HURUMAP_DATA_API}/flourish/${id}/`}
        />
      </ChartContainer>
      <div className={classes.description}>
        <RichTypography variant="body2">{flourishDescription}</RichTypography>
      </div>
      <div className={classes.description}>
        <Button variant="contained" size="large">
          {action}
        </Button>
      </div>
    </div>
  );
}

export default FlourishContainer;

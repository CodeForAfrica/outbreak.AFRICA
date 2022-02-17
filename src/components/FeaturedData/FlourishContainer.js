import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import FacebookIcon from "@/outbreakafrica/assets/Icon awesome-facebook-f-b.svg";
import InstagramIcon from "@/outbreakafrica/assets/Icon awesome-instagram-b.svg";
import LinkedInIcon from "@/outbreakafrica/assets/Icon awesome-linkedin-in-b.svg";
import TwitterIcon from "@/outbreakafrica/assets/Icon awesome-twitter-b.svg";
import DownloadIcon from "@/outbreakafrica/assets/icon download.svg";
import EmbedIcon from "@/outbreakafrica/assets/icon embed.svg";
import LinkIcon from "@/outbreakafrica/assets/icon web.svg";
import logo from "@/outbreakafrica/assets/images/logo/logo-outbreak.svg";
import Figure from "@/outbreakafrica/components/Figure";
import config from "@/outbreakafrica/config";

const ChartContainer = dynamic(
  () => import("@hurumap-ui/core/ChartContainer"),
  {
    ssr: false,
  }
);

function FlourishContainer({ featuredChart, ...props }) {
  const classes = useStyles(props);
  const { type, id, title: flourishTitle } = featuredChart;

  return (
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
        container: classes.containerGrid,
        groupActionsButton: classes.actionIcon,
      }}
      groupIcons={{
        facebook: {
          icon: (
            <Figure
              className={classes.actionIcon}
              src={FacebookIcon}
              alt="Facebook"
            />
          ),
        },
        twitter: {
          icon: (
            <Figure
              className={classes.actionIcon}
              src={TwitterIcon}
              alt="Twitter"
            />
          ),
        },
        linkedin: {
          icon: (
            <Figure
              className={classes.actionIcon}
              src={LinkedInIcon}
              alt="LinkedIn"
            />
          ),
        },
        instagram: {
          icon: (
            <Figure
              className={classes.actionIcon}
              src={InstagramIcon}
              alt="Instagram"
            />
          ),
        },
        embed: {
          icon: (
            <Figure
              className={classes.actionIcon}
              src={EmbedIcon}
              alt="Embed"
            />
          ),
        },
        link: {
          icon: (
            <Figure className={classes.actionIcon} src={LinkIcon} alt="Link" />
          ),
        },
        download: {
          icon: (
            <Figure
              className={classes.actionIcon}
              src={DownloadIcon}
              alt="Download"
            />
          ),
        },
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
  );
}

FlourishContainer.propTypes = {
  featuredChart: PropTypes.shape({
    geoId: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

FlourishContainer.defaultProps = {};

export default FlourishContainer;

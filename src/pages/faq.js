import React, {useState, useEffect } from "react";
import { useRouter } from 'next/router';

import { makeStyles } from "@material-ui/core/styles";

import Page from "components/Page";
import Hero from "components/Hero";

import Content from "components/Content";
import FaqContent from "components/FaqContent";
import config from "config";
import { getSitePage } from "cms";

const useStyles = makeStyles(({ breakpoints, widths }) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
    [breakpoints.up("md")]: {
      margin: "0 auto",
      width: widths.values.md,
    },
    [breakpoints.up("lg")]: {
      width: widths.values.lg,
    },
    [breakpoints.up("xl")]: {
      width: widths.values.xl,
    },
  },
  heroDescription: {
    [breakpoints.up("md")]: {
      maxWidth: (widths.values.md * 1385) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      maxWidth: (widths.values.lg * 1385) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      maxWidth: "86.5625rem",
    },
  },
  contentMainGrid: {
    [breakpoints.up("md")]: {
      paddingLeft: (widths.values.md * 73) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      paddingLeft: (widths.values.lg * 73) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      paddingLeft: "4.5625rem",
    },
  },
}));

function FAQ({ outbreak, ...props }) {
  const classes = useStyles(props);
  const router = useRouter();
  const {
    page: {
      hero_content: heroContent,
      faqs,
      subscribe,
      title: { rendered: pageTitle },
    },
  } = outbreak;

  const [currentTopicSlug, setCurrentTopicSlug] = useState(null);
  useEffect(() => {
    const handleHash = () =>  setCurrentTopicSlug(window.location.hash.slice(1))

    handleHash();
    router.events.on('hashChangeComplete', handleHash);
    return () => {
      router.events.off('hashChangeComplete', handleHash);
    };
  }, [router]);

  const slugify = (word) => {
    if (!word) return '';
    return word
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  const contents =
  (faqs &&
    faqs.map((faq) => ({
      ...faq,
      href: `#${slugify(faq.topic)}`,
      slug: `${slugify(faq.topic)}`,
      name: faq.topic,
    }))) ||
  [];
  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "FAQ"}
      classes={{ section: classes.section }}
    >
      <Hero
        heroContent={heroContent}
        classes={{ description: classes.heroDescription, section: classes.section }}
      />
      <Content 
        asideContents={contents}
        current={currentTopicSlug}
        classes={{ mainGrid: classes.contentMainGrid, section: classes.section }} 
        main={9}
        subscribe={subscribe}
      >
        <FaqContent faqs={contents} />
      </Content>
    </Page>
  );
}

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("faq", lang);

  return {
    props: {
      outbreak,
    },
  };
}

export default FAQ;

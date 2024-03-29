import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import iconBox from "@/outbreakafrica/assets/icon-infobox.svg";
import { getSitePage } from "@/outbreakafrica/cms";
import Content from "@/outbreakafrica/components/Content";
import FaqContent from "@/outbreakafrica/components/FaqContent";
import Hero from "@/outbreakafrica/components/Hero";
import Page from "@/outbreakafrica/components/Page";
import config from "@/outbreakafrica/config";

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
  contentMain: {
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

function slugify(word) {
  if (!word) return "";
  return word
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function Faq({ errorCode, outbreak, slug, ...props }) {
  const classes = useStyles(props);

  const {
    page: {
      hero_content: heroContent,
      faqs,
      subscribe,
      title: { rendered: pageTitle },
    },
  } = outbreak;

  const contents =
    faqs?.map(({ topic, questions_answers: questionsAnswers }) => ({
      as: `/faq/${slugify(topic)}`,
      href: "/faq/[...slug]",
      slug: `${slugify(topic)}`,
      name: topic,
      icon: iconBox,
      title: {
        rendered: topic,
      },
      content: {
        rendered: (
          <FaqContent
            questionsAnswers={questionsAnswers}
            slug={`${slugify(topic)}`}
          />
        ),
      },
    })) || [];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (slug) {
        const sub = document.getElementById(slug);
        if (sub) {
          sub.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [slug]);
  return (
    <Page
      errorCode={errorCode}
      outbreak={outbreak}
      title={pageTitle || "FAQ"}
      classes={{ section: classes.section }}
    >
      <Hero
        heroContent={heroContent}
        classes={{
          description: classes.heroDescription,
          section: classes.section,
        }}
      />
      <Content
        contents={contents}
        current={slug}
        classes={{
          main: classes.contentMain,
          section: classes.section,
        }}
        main={9}
        subscribe={subscribe}
      />
    </Page>
  );
}

Faq.propTypes = {
  errorCode: PropTypes.number,
  outbreak: PropTypes.shape({
    page: PropTypes.shape({
      faqs: PropTypes.arrayOf(PropTypes.shape({})),
      hero_content: PropTypes.shape({}),
      subscribe: PropTypes.shape({}),
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }),
  }),
  slug: PropTypes.string,
};

Faq.defaultProps = {
  errorCode: undefined,
  outbreak: undefined,
  slug: undefined,
};

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage, slug: pageSlug } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("faq", lang);

  const [firstSlug] = pageSlug || [];
  const slug = (firstSlug && firstSlug.toLowerCase()) || null;
  let errorCode = null;
  if (slug) {
    const index = outbreak.page.faqs
      ? outbreak.page.faqs.findIndex(({ topic }) => slugify(topic) === slug)
      : -1;
    if (index === -1) {
      errorCode = 404;
    }
  }

  return {
    props: {
      errorCode,
      outbreak,
      slug,
    },
  };
}

export default Faq;

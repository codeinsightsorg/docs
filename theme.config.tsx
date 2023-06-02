import React from "react";
import {DocsThemeConfig, useConfig} from "nextra-theme-docs";
import Image from "next/image";
import {useRouter} from "next/router";

const Head: React.FC = () => {
  const { asPath } = useRouter();
  const { frontMatter } = useConfig();

  return (
      <>
        <meta property="og:url" content={`https://codeinsightsjs.com${asPath}`} />
        <meta property="og:title" content={frontMatter.title || 'CodeInsights'} />
        <meta
            property="og:description"
            content={frontMatter.description || 'CodeInsights Documentation'}
        />

      </>
  );
};

const config: DocsThemeConfig = {
  logo: <Image alt="logo" src="/Logo.png" width={180} height={60} />,
  project: {
    link: "https://github.com/codeinsightsorg/codeinsights",
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  primaryHue: { light: 281, dark: 280 },
  darkMode: false,
  docsRepositoryBase: "https://github.com/codeinsightsorg/codeinsights",
  footer: {
    text: (
      <span>&copy; Copyright {new Date().getFullYear()} CodeInsightsJS.</span>
    ),
  },
  head: Head,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – CodeInsights'
    }
  }
};

export default config;

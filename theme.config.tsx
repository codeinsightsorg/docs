import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: <Image alt="logo" src="/Logo.png" width={180} height={60} />,
  project: {
    link: "https://github.com/yaircohendev/codeinsightsjs",
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  primaryHue: { light: 281, dark: 280 },
  darkMode: false,
  docsRepositoryBase: "https://github.com/yaircohendev/codeinsightsjs",
  footer: {
    text: (
      <span>&copy; Copyright {new Date().getFullYear()} CodeInsightsJS.</span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – CodeInsights'
    }
  }
};

export default config;

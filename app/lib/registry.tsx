"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  ServerStyleSheet,
  StyleSheetManager,
  createGlobalStyle,
} from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #FC6F6B;
        --primary-text: white;
        --secondary: #6986E8;
        --secondary-lighten: #879EED;
        --white-text: #FC6F6B;
        --negative-text: #ffffff;
        --z-index-header: 80;
        --z-index-news: 40;
        --z-index-cursor: 100;
        --z-index-menu: 60;
        --z-index-loader: 1000;
        --z-index-share: 59;
        --font-family-sans-serif: "HelveticaNeue", arial, sans-serif;
        --font-family-sans-serif-bold: "HelveticaNeueBold", arial, sans-serif;
        --font-family-sans-serif-2: "Nexa-Regular", sans-serif;
        --font-family-sans-serif-2-bold: "Nexa-XBold", sans-serif;
        --transition-interface-delay: 0.5s;
        --h-padding: 20px;
        --error-color: #ea0000;
        --swiper-theme-color: #007aff;
    }
`;

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <GlobalStyles />
      {children}
    </StyleSheetManager>
  );
}

import React from "react";
import NextHead from "next/head";

const defaultDescription = "";

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ""}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/public/touch-icon.png" />
    <link rel="apple-touch-icon" href="/public/touch-icon.png" />
    <link rel="mask-icon" href="/public/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/public/favicon.ico" />
    <meta property="og:title" content={props.title || ""} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:card" content="summary_large_image" />
  </NextHead>
);

export default Head;

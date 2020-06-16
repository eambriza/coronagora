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
    <link rel="icon" href="/coronagoraLogo.png" />
    <meta property="og:title" content={props.title || ""} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:card" content="summary_large_image" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap"
    />
  </NextHead>
);

export default Head;

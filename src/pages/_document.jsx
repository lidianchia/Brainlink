import { Html, Head, Main, NextScript } from "next/document";
import React, { Component } from "react";

export default class Document extends Component {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

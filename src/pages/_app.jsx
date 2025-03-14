import "@/styles/globals.css";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    const { Component: PageComponent, pageProps } = this.props;
    return (
      <>
        <PageComponent {...pageProps} />;
      </>
    );
  }
}

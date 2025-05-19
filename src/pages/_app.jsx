import "@/styles/globals.css";
import React, { Component } from "react";
import I18n from "@/i18n/i18n";

export default class App extends Component {
  render() {
    const { Component: PageComponent, pageProps } = this.props;
    return (
      <>
        <I18n>
          <PageComponent {...pageProps} />
        </I18n>
      </>
    );
  }
}

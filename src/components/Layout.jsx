import React, { Component } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default class Layout extends Component {
  render() {
    const {
      children,
      title = "青衫 Neuro",
      description = "致力于神经多元的科普、资讯、资源",
    } = this.props;

    return (
      <>
        {/* 页面级 Head */}
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} key="desc" />
          <meta
            name="keywords"
            content="ASD, ADHD, Scale, 量表, 青衫, Neuro, Aspie"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="ittuann" />
          <meta name="theme-color" content="#52b394" />
          <meta property="og:site_name" content="青衫 Neuro" />
          <meta property="og:title" content="青衫 Neuro" />
          <meta
            property="og:description"
            content="致力于神经多元的科普、资讯、资源"
          />
          <meta property="og:url" content="https://qingshanasd.cn" />
          <meta property="og:locale" content="zh-CN" />
          <meta property="og:locale:alternate" content="en_US" />
          <meta
            property="og:image"
            content="https://qingshanasd.cn/assets/img/ogp.jpeg"
          />
          <meta property="og:image:alt" content="青衫 Neuro" />
          <meta
            name="google-site-verification"
            content="0KtvMLWoVy32ZzcomvBYl0OS1C-keRSH7G8pSaDjJtQ"
          />
          <meta
            name="msvalidate.01"
            content="E73984A8E6A62AB2E04103B41EF00802"
          />
        </Head>

        <div className="bg-zinc-50 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </>
    );
  }
}

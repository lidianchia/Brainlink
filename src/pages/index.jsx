import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import CardCustom from "@/components/CardCustom";
import "remixicon/fonts/remixicon.css";
import { FormattedMessage, useIntl } from "react-intl";

const scales = [
  {
    icon: "ri-test-tube-line",
    iconColor: "text-blue-700",
    iconBg: "bg-blue-100",
    title: "testing",
    description: "testing",
    tags: ["testing"],
    link: "/404",
  },
  {
    icon: "ri-flask-line",
    iconColor: "text-yellow-700",
    iconBg: "bg-yellow-100",
    title: "testing",
    description: "testing",
    tags: ["testing"],
    link: "/404",
  },
  {
    icon: "ri-flask-fill",
    iconColor: "text-purple-700",
    iconBg: "bg-purple-100",
    title: "testing",
    description: "testing",
    tags: ["testing"],
    link: "/404",
  },
];

function Index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "青衫 Neuro",
    alternateName: "青衫 Aspire",
    description: "致力于神经多元的科普、资讯、资源",
    slogan: "为神经多元群体提供支持",
    keywords: "ADHD, ASD",
    url: "https://lindsey.xin",
    logo: "https://lindsey.xin/assets/img/test_logo.jpg",
    sameAs: "https://github.com/ittuann/qingshanasd",
    foundingDate: "2016",
    publishingPrinciples:
      "https://github.com/ittuann/qingshanasd/blob/main/LICENSE",
    member: {
      "@type": "Person",
      name: "air wish",
      alternateName: "ittuann",
      url: "https://github.com/ittuann",
      email: "ittuann@outlook.com",
      image: "https://lindsey.xin/assets/img/ittuann.png",
      description: "Developer and maintainer.",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "ittuann@outlook.com",
      contactType: "Technical Service",
    },
    knowsLanguage: ["zh-CN", "en-US", "ja-JP"],
  };
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({ id: "siteName" })}
      description={intl.formatMessage({ id: "Index.description" })}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      {/* Banner Section */}
      <section
        className="max-w-6xl mx-auto w-full px-4 py-12"
        aria-labelledby="main-heading"
      >
        <div className="container">
          <header className="flex flex-col-reverse md:flex-row items-center md:justify-between">
            {/* Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-pretty md:text-balance mt-2 md:mt-3 pb-2 text-primary">
                <FormattedMessage id="siteName" />
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-pretty md:text-balance mt-2 md:mt-3 pb-2 text-primary">
                <FormattedMessage id="subtitle" />
              </h2>
              <h3 className="text-lg md:text-xl font-semibold text-pretty md:text-balance mt-2 md:mt-3 pb-2 text-foreground/80">
                <FormattedMessage id="slogan" />
              </h3>

              <div className="flex flex-wrap mt-4 gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="font-medium hover:scale-105 rounded-full"
                >
                  <Link href="/404">
                    <FormattedMessage id="Navbar.projects" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-medium hover:scale-105 rounded-full"
                >
                  <Link href="/404">
                    <FormattedMessage id="Navbar.about" />
                  </Link>
                </Button>
              </div>
            </div>

            <figure
              id="logo-index"
              className="flex justify-center md:justify-start"
            >
              <Image
                src="/assets/img/test_logo.jpg"
                alt="Qingshan Neuro Logo index"
                width={128}
                height={128}
                priority={true}
                fetchPriority="high"
                className="rounded-full logo-drop-shadow-glow"
              />
            </figure>
          </header>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4" aria-labelledby="projects">
        <h2 className="text-2xl font-bold mb-4">
          <FormattedMessage id="Index.projects.title" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scales.map((scale, index) => (
            <CardCustom key={index} {...scale} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Index;

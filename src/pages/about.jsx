import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import "remixicon/fonts/remixicon.css";
import { FormattedMessage, useIntl } from "react-intl";
import Head from "next/head";

const contributors = [
  {
    name: "青衫",
    role: <FormattedMessage id="About.creatorRole" />,
    icon: "/assets/img/qingshan_150.png",
    link: "#",
    email: "qingshan.aspire@gmail.com",
    alternateName: "青衫 Aspire",
  },
  {
    name: "air wish",
    role: <FormattedMessage id="About.developerRole" />,
    icon: "/assets/img/ittuann.png",
    link: "https://github.com/ittuann",
    email: "ittuann@outlook.com",
    alternateName: "ittuann",
  },
  {
    name: "H-MALGANIS",
    role: <FormattedMessage id="About.developerRole" />,
    icon: "/assets/img/zealot.png",
    link: "#",
    email: "#",
    alternateName: "",
  },
  {
    name: "GLOOMYGHOST",
    role: <FormattedMessage id="About.developerRole" />,
    icon: "/assets/img/G-150x150.png",
    link: "https://github.com/YuzukiTsuru",
    email: "#",
    alternateName: "",
  },
  {
    name: "SPACEDUCK",
    role: <FormattedMessage id="About.maintainerRole" />,
    icon: "/assets/img/SpaceDuck.png",
    link: "#",
    email: "#",
    alternateName: "",
  },
];

function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "青衫 Neuro",
    alternateName: "青衫 Aspire",
    description: "致力于神经多元的科普、资讯、资源",
    slogan: "为神经多元群体提供支持",
    keywords: "ADHD, ASD",
    url: "https://qingshanasd.cn",
    logo: "https://qingshanasd.cn/assets/img/logo.webp",
    foundingDate: "2016",
    member: contributors.map((contributor) => ({
      "@type": "Person",
      name: contributor.name,
      alternateName:
        contributor.alternateName && contributor.alternateName !== ""
          ? contributor.alternateName
          : undefined,
      url: contributor.link !== "#" ? contributor.link : undefined,
      email: contributor.email !== "#" ? contributor.email : undefined,
      image: `https://qingshanasd.cn${contributor.icon}`,
    })),
  };
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({ id: "About.title" })}
      description={intl.formatMessage({ id: "About.tidescriptiontle" })}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* 标题部分 */}
        <div className={`mb-24 transition-opacity duration-700`}>
          <div className="flex items-center justify-center mb-10">
            <Image
              src="/assets/img/logo.webp"
              alt="logo"
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <div className="tracking-tight font-extrabold text-gray-900">
              <h1 className="block text-4xl md:text-5xl">
                <FormattedMessage id="About.title" />
              </h1>
              <span className="block mt-5">
                <span className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  <FormattedMessage id="About.subtitle" />
                </span>
              </span>
            </div>
            <p className="mt-5 text-lg text-zinc-600">
              <FormattedMessage id="About.slogan" />
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* 创始人介绍部分 */}
        <div className="flex justify-center mb-32">
          <div className="flex flex-col md:flex-row items-center max-w-5xl gap-16">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <Image
                src="/assets/img/qingshan.jpg"
                alt="view"
                width={240}
                height={300}
                className="rounded-xl relative shadow-lg hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <FormattedMessage id="About.founderTitle" />
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                <FormattedMessage id="About.founderDescription" />
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                <FormattedMessage id="About.founderInfo" />
              </p>
            </div>
          </div>
        </div>

        {/* 贡献者部分 */}
        <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-xl py-20 px-8 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-4xl mb-6">
                <FormattedMessage id="About.contributors" />
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
              {contributors.map((contributor, index) => (
                <div
                  key={index}
                  className="h-full transform transition-all duration-300 hover:-translate-y-2"
                >
                  <Link
                    href={contributor.link}
                    target=""
                    className="block h-full"
                  >
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 text-center border border-gray-100 h-full">
                      <div className="flex items-center justify-center mx-auto rounded-full mb-6">
                        <Image
                          src={`${contributor.icon}`}
                          alt={`${contributor.name}`}
                          width={75}
                          height={75}
                          className="rounded-full"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 break-words">
                        {contributor.name}
                      </h3>
                      <div className="w-12 h-1 break-words bg-gradient-to-r from-primary to-teal-500 mx-auto my-3 rounded-full"></div>
                      <h4 className="text-sm text-gray-500 mt-2">
                        {contributor.role}
                      </h4>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                <FormattedMessage id="About.contributorsNote" />
                <Link
                  href="https://github.com/ittuann/qingshanasd/graphs/contributors"
                  target="_blank"
                  className="ml-2 text-primary hover:text-accent inline-flex items-center"
                >
                  <span>
                    <FormattedMessage id="About.viewOnGithub" />
                  </span>
                  <i className="ri-arrow-right-line ml-1"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* 财务公示部分 */}
        <div className="mb-24">
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              <span className="relative">
                <FormattedMessage id="About.financialTitle" />
                <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary -z-10"></span>
              </span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-8 text-center text-lg leading-relaxed">
                <FormattedMessage id="About.financialDescription" />
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://docs.qq.com/sheet/DT05BclBnZk9CYmhx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent transition duration-300"
                >
                  <span>
                    <FormattedMessage id="About.viewFinancialReport" />
                  </span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;

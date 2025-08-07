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

const mediaProjects = [
  {
    name: <FormattedMessage id="About.media.projects.tencent" />,
    link: "https://mp.weixin.qq.com/s?__biz=MzIyMzgyMjY5NQ==&mid=2247514836&idx=1&sn=c12376cd562cbcb916b4bfc266a217ed",
  },
  {
    name: <FormattedMessage id="About.media.projects.sinaHummingbird" />,
    link: "https://mp.weixin.qq.com/s?__biz=MzIyMzgyMjY5NQ==&mid=2247529199&idx=1&sn=ed0483d7b63fbebf3fe517aff90fed6d",
  },
  {
    name: <FormattedMessage id="About.media.projects.xinhuaHealth" />,
    link: "https://mp.weixin.qq.com/s?__biz=MzIyMzgyMjY5NQ==&mid=2247502883&idx=1&sn=2dd3834f3c447518288a9e89575e1957",
  },
  {
    name: <FormattedMessage id="About.media.projects.phoenixWeekly" />,
    link: "https://mp.weixin.qq.com/s?__biz=MzIyMzgyMjY5NQ==&mid=2247502611&idx=1&sn=e6e888b8066c40b0ea2c590252cc67d7",
  },
  {
    name: <FormattedMessage id="About.media.projects.southernWindow" />,
    link: "https://mp.weixin.qq.com/s?__biz=MzIyMzgyMjY5NQ==&mid=2247513738&idx=1&sn=7376f6f1bc4f983c8d25480456a7d2ea",
  },
  {
    name: <FormattedMessage id="About.media.projects.shanghaiResearch" />,
    link: "https://mp.weixin.qq.com/s?__biz=MzIyMzgyMjY5NQ==&mid=2247521093&idx=1&sn=edd802215eee1c76bc17971f37b65539",
  },
  {
    name: <FormattedMessage id="About.media.projects.xiehe" />,
    link: "https://mp.weixin.qq.com/s?__biz=MzIyMzgyMjY5NQ==&mid=2247487437&idx=1&sn=eed7b0912e54f234c089659af30be487",
  },
  {
    name: <FormattedMessage id="About.media.projects.wanxiangPodcast" />,
    link: "https://mp.weixin.qq.com/s?__biz=MzIyMzgyMjY5NQ==&mid=2247528711&idx=1&sn=2fbb8fab1e14d9de87f219f6c216622e",
  },
  {
    name: <FormattedMessage id="About.media.projects.mindVoice" />,
    link: "https://mp.weixin.qq.com/s?__biz=MzIyMzgyMjY5NQ==&mid=2247487441&idx=1&sn=7b0fcc4cf8c469b3b54461886eaf4c13",
  },
  {
    name: <FormattedMessage id="About.media.projects.worldOfChinese" />,
    link: "https://mp.weixin.qq.com/s?__biz=MzIyMzgyMjY5NQ==&mid=2247548059&idx=1&sn=421d64b152eb18b92edb897caab8652e",
  },
];

const researchProjects = [
  {
    name: <FormattedMessage id="About.research.projects.pku" />,
    link: "https://mp.weixin.qq.com/s/VNUziWfLt9gOF6oS-jqCNg",
  },
  {
    name: <FormattedMessage id="About.research.projects.xiamenXianyue" />,
    link: "https://mp.weixin.qq.com/s/EiglerYoRcORF5rzMqjDMQ",
  },
  {
    name: <FormattedMessage id="About.research.projects.bupt" />,
    link: "https://mp.weixin.qq.com/s/ubtULQqS9SXj2XV6H_K9Zw",
  },
  {
    name: <FormattedMessage id="About.research.projects.sysu" />,
    link: "https://mp.weixin.qq.com/s/ycSjPzJpPo_34xveSTpNXw",
  },
  {
    name: <FormattedMessage id="About.research.projects.leiden" />,
    link: "https://mp.weixin.qq.com/s/dv2LoL37tDtx_HEZo-2c7Q",
  },
  {
    name: <FormattedMessage id="About.research.projects.anding" />,
    link: "https://mp.weixin.qq.com/s/1PUcaiRcoU3LReejb112xg",
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
      description={intl.formatMessage({ id: "About.description" })}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-4">
        {/* 标题部分 */}
        <div className={`mb-4 transition-opacity duration-700`}>
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/assets/img/logo.webp"
              alt="logo"
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <h1 className="font-extrabold tracking-tight text-4xl md:text-5xl">
              <FormattedMessage
                id="About.title"
                defaultMessage="关于青衫 Neuro"
              />
            </h1>
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* 创始人介绍部分 */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col md:flex-row items-center max-w-5xl gap-16">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <Image
                src="/assets/img/qingshan.jpg"
                alt="view"
                width={200}
                height={250}
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
        <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-3xl py-8 px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-4">
              <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-4xl mb-4">
                <FormattedMessage id="About.contributors" />
              </h2>
              <p className="max-w-3xl mx-auto text-center text-gray-600 mb-6">
                <FormattedMessage id="About.contributorsDescription" />
              </p>
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

            <div className="text-center mt-6">
              <p className="text-gray-600">
                <FormattedMessage id="About.contributorsNote" />
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <Link
                href="https://github.com/ittuann/qingshanasd"
                target="_blank"
                className="group inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent transition-all duration-300"
              >
                <span className="flex items-center">
                  <i className="ri-sparkling-line mr-2 group-hover:rotate-360 transition-transform duration-500"></i>
                  <FormattedMessage id="About.viewOnGithub" />
                </span>
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-500"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* 媒体报道部分 */}
        <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-3xl py-8 px-8 mb-16">
          <div className="text-center mb-4">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-4xl mb-6">
              <FormattedMessage id="About.media.title" />
            </h2>
            <p className="max-w-3xl mx-auto text-center text-gray-600">
              <FormattedMessage id="About.media.description" />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mediaProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 h-full flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white">
                      <i className="ri-article-line"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.name}
                    </h3>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span>
                        <FormattedMessage
                          id="About.media.read"
                          defaultMessage="阅读报道"
                        />
                      </span>
                      <i className="ri-external-link-line ml-1"></i>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              <Link
                href="https://mp.weixin.qq.com/mp/homepage?__biz=MzIyMzgyMjY5NQ==&hid=1&sn=f3f557bb16f4781bf487fe58efa0c15f"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-primary hover:text-accent inline-flex items-center"
              >
                <FormattedMessage id="About.media.viewAll" />
                <i className="ri-arrow-right-line ml-1"></i>
              </Link>
            </p>
          </div>
        </div>

        {/* 研究合作部分 */}
        <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-3xl py-8 px-8 mb-16">
          <div className="text-center mb-4">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-4xl mb-6">
              <FormattedMessage id="About.research.title" />
            </h2>
            <p className="max-w-3xl mx-auto text-center text-gray-600">
              <FormattedMessage id="About.research.description" />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {researchProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 h-full flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white">
                      <i className="ri-file-list-3-line"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.name}
                    </h3>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span>
                        <FormattedMessage id="About.research.read" />
                      </span>
                      <i className="ri-external-link-line ml-1"></i>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              <Link
                href="https://mp.weixin.qq.com/mp/homepage?__biz=MzIyMzgyMjY5NQ==&hid=1&sn=f3f557bb16f4781bf487fe58efa0c15f"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-primary hover:text-accent inline-flex items-center"
              >
                <FormattedMessage id="About.research.viewAll" />
                <i className="ri-arrow-right-line ml-1"></i>
              </Link>
            </p>
          </div>
        </div>

        {/* 财务公示部分 */}
        <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-3xl py-8 px-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            <span className="relative">
              <FormattedMessage id="About.financial.title" />
              <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary -z-10"></span>
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-8 text-center text-lg leading-relaxed">
              <FormattedMessage id="About.financial.description" />
            </p>
            <div className="flex justify-center">
              <Link
                href="https://docs.qq.com/sheet/DT05BclBnZk9CYmhx"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent transition duration-300"
              >
                <span>
                  <FormattedMessage id="About.financial.view" />
                </span>
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;

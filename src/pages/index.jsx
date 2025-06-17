import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import "remixicon/fonts/remixicon.css";
import { FormattedMessage, useIntl } from "react-intl";

const scales = [
  {
    icon: "ri-brain-line",
    iconColor: "text-orange-700",
    iconBg: "bg-orange-100",
    title: <FormattedMessage id="Index.scales.adhd.title" />,
    description: <FormattedMessage id="Index.scales.adhd.description" />,
    tags: ["ADHD", <FormattedMessage id="Index.tag.adult" />],
    link: "/quotients/adhd",
  },
  {
    icon: "ri-user-heart-line",
    iconColor: "text-purple-700",
    iconBg: "bg-purple-100",
    title: <FormattedMessage id="Index.scales.aqa.title" />,
    description: <FormattedMessage id="Index.scales.aqa.description" />,
    tags: [
      <FormattedMessage id="Index.tag.autism" />,
      "AQ",
      <FormattedMessage id="Index.tag.adult" />,
    ],
    link: "/quotients/aq-a",
  },
  {
    icon: "ri-heart-pulse-line",
    iconColor: "text-red-700",
    iconBg: "bg-red-100",
    title: <FormattedMessage id="Index.scales.bpd.title" />,
    description: <FormattedMessage id="Index.scales.bpd.description" />,
    tags: ["BPD", "BSL-23"],
    link: "/quotients/bpd",
  },
  {
    icon: "ri-hearts-line",
    iconColor: "text-yellow-700",
    iconBg: "bg-yellow-100",
    title: <FormattedMessage id="Index.scales.oaq.title" />,
    description: <FormattedMessage id="Index.scales.oaq.description" />,
    tags: [<FormattedMessage id="Index.tag.alexithymia" />, "OAQ"],
    link: "/quotients/oaq",
  },
  {
    icon: "ri-empathize-line",
    iconColor: "text-blue-700",
    iconBg: "bg-blue-100",
    title: <FormattedMessage id="Index.scales.aqc.title" />,
    description: <FormattedMessage id="Index.scales.aqc.description" />,
    tags: [
      <FormattedMessage id="Index.tag.autism" />,
      "AQ",
      <FormattedMessage id="Index.tag.child" />,
    ],
    link: "/quotients/aq-c",
  },
  {
    icon: "ri-mental-health-line",
    iconColor: "text-green-700",
    iconBg: "bg-green-100",
    title: <FormattedMessage id="Index.scales.aspie.title" />,
    description: <FormattedMessage id="Index.scales.aspie.description" />,
    tags: [
      <FormattedMessage id="Index.tag.autism" />,
      "AQ",
      <FormattedMessage id="Index.tag.adult" />,
    ],
    link: "https://www.rdos.net/china/index.php",
  },
  {
    icon: "ri-guide-line",
    iconColor: "text-teal-700",
    iconBg: "bg-teal-100",
    title: <FormattedMessage id="Index.scales.eq.title" />,
    description: <FormattedMessage id="Index.scales.eq.description" />,
    tags: [
      <FormattedMessage id="Index.tag.empathy" />,
      "EQ",
      <FormattedMessage id="Index.tag.adult" />,
    ],
    link: "/quotients/eq60",
  },
];

function Index() {
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({ id: "siteName" })}
      description={intl.formatMessage({ id: "Index.description" })}
    >
      {/* Banner */}
      <div className="w-full px-4 py-12">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-8">
            {/* Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                <FormattedMessage id="siteName" />
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                <FormattedMessage id="subtitle" />
              </h2>
              <h3 className="text-lg md:text-xl mb-8 text-foreground/80">
                <FormattedMessage id="slogan" />
              </h3>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="font-medium hover:scale-105 rounded-full"
                >
                  <Link href="/medical-map">
                    <FormattedMessage id="Navbar.medicalMap" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-medium hover:scale-105 rounded-full"
                >
                  <Link href="/about">
                    <FormattedMessage id="Navbar.about" />
                  </Link>
                </Button>
              </div>
            </div>

            <div
              id="logo-index"
              className="flex justify-center md:justify-start"
            >
              <Image
                src="/assets/img/logo.webp"
                alt="logo index"
                width={128}
                height={128}
                priority={true}
                fetchPriority="high"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 量表 */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scales.map((scale, index) => (
            <Card key={index} {...scale} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Index;

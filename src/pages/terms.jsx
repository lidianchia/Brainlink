import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import "remixicon/fonts/remixicon.css";
import { FormattedMessage, useIntl } from "react-intl";

function Terms() {
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({ id: "Terms.title" })}
      description={intl.formatMessage({ id: "Terms.description" })}
    >
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* 标题 */}
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
            <h1 className="tracking-tight font-extrabold text-gray-900">
              <span className="block text-4xl md:text-5xl">
                <FormattedMessage id="Terms.heading" />
              </span>
            </h1>
            <p className="mt-5 text-lg text-zinc-600">
              <FormattedMessage id="Terms.subheading" />
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-teal-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* 条款内容 */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="bg-white shadow overflow-hidden md:rounded-lg">
            <div className="px-4 py-5 md:px-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                Terms of Service
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Last updated: March 7, 2025
              </p>
            </div>

            {/* 条款详情 */}
            <div className="px-4 py-5 md:p-6 prose max-w-none">
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Overview
                </h3>
                <p className="text-gray-700 mb-4">
                  <FormattedMessage id="Terms.overview.info" />
                  <Link
                    href="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode"
                    className="text-primary hover:text-accent"
                    target="_blank"
                  >
                    <FormattedMessage id="Terms.overview.license" />
                  </Link>
                </p>
                <p className="text-gray-700 mb-4">
                  <FormattedMessage id="Terms.overview.sharing" />
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <i className="ri-information-2-line text-2xl text-yellow-400"></i>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700 items-center">
                        <FormattedMessage id="Terms.overview.warning1" />
                      </p>
                      <p className="text-sm text-yellow-700 items-center">
                        <FormattedMessage id="Terms.overview.warning2" />
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  <FormattedMessage id="Terms.abstract.title" />
                </h3>
                <p className="text-gray-700 mb-4">
                  <FormattedMessage id="Terms.abstract.paragraph1" />
                </p>
                <p className="text-gray-700 mb-4">
                  <FormattedMessage id="Terms.abstract.paragraph2" />
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">
                    <FormattedMessage id="Terms.abstract.youCanFreely" />
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>
                      <strong>
                        <FormattedMessage id="Terms.abstract.share.title" />
                      </strong>
                      —
                      <FormattedMessage id="Terms.abstract.share.description" />
                    </li>
                  </ul>
                  <h4 className="font-medium text-gray-900 mt-6 mb-2">
                    <FormattedMessage id="Terms.abstract.underConditions" />
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-4">
                    <li>
                      <FormattedMessage
                        id="Terms.abstract.attribution"
                        values={{
                          strong: (chunks) => <strong>{chunks}</strong>,
                        }}
                      />
                    </li>
                    <li>
                      <FormattedMessage
                        id="Terms.abstract.nonCommercial"
                        values={{
                          strong: (chunks) => <strong>{chunks}</strong>,
                        }}
                      />
                    </li>
                    <li>
                      <FormattedMessage
                        id="Terms.abstract.noDerivatives"
                        values={{
                          strong: (chunks) => <strong>{chunks}</strong>,
                        }}
                      />
                    </li>
                    <li>
                      <FormattedMessage
                        id="Terms.abstract.noAdditionalRestrictions"
                        values={{
                          strong: (chunks) => <strong>{chunks}</strong>,
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              target="_blank"
              className="inline-block"
            >
              <Image
                src="/assets/img/cc-by-nc-nd.svg"
                alt="CC BY-NC-ND 4.0"
                width={88}
                height={31}
                className="mx-auto"
              />
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Terms;

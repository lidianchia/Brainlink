import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import { withRouter } from "next/router";
import "remixicon/fonts/remixicon.css";
import { FormattedMessage } from "react-intl";
import LangSwitcher from "@/i18n/LangSwitcher";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

class Navbar extends Component {
  state = {
    isMobileMenuOpen: false,
  };

  isActive = (path) => {
    const isCurrentPath = this.props.router.pathname === path;
    return isCurrentPath
      ? "text-primary font-medium border-b-2 border-primary"
      : "text-gray-500 transition hover:text-accent hover-underline";
  };

  toggleMobileMenu = () => {
    this.setState((prev) => ({ isMobileMenuOpen: !prev.isMobileMenuOpen }));
  };

  render() {
    return (
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/img/test_logo.jpg"
                  alt="logo"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className={`${pacifico.className} text-xl text-gray-900`}>
                  <FormattedMessage id="siteName" />
                </span>
              </Link>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden flex items-center">
              <button
                onClick={this.toggleMobileMenu}
                className="text-gray-500 hover:text-purple-400"
                id="mobile-nav-menu-button"
                aria-label="Toggle mobile menu"
              >
                <i
                  className={`ri-${this.state.isMobileMenuOpen ? "close" : "menu"}-line text-2xl`}
                ></i>
              </button>
            </div>

            {/* 桌面端菜单 */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className={this.isActive("/")}>
                <FormattedMessage id="Navbar.quotients" />
              </Link>
              <Link href="/404" className={this.isActive("/404")}>
                <FormattedMessage id="Navbar.projects" />
              </Link>
              <Link href="/404" className={this.isActive("/404")}>
                <FormattedMessage id="Navbar.about" />
              </Link>
              

              <div className="h-6 w-px bg-gray-300"></div>

              <div className="">
                <LangSwitcher />
              </div>

              <div className="h-6 w-px bg-gray-300"></div>

              <div className="flex items-center space-x-3">
                <Link
                  href="https://mp.weixin.qq.com/mp/homepage?__biz=MzIyMzgyMjY5NQ%3D%3D&hid=1"
                  target="_blank"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                  aria-label="WeChat Public Account"
                >
                  <i className="ri-wechat-fill text-xl"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* 移动端菜单面板 */}
          {this.state.isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
                <Link
                  href="/"
                  className={`block px-3 py-2 ${this.isActive("/")}`}
                >
                  <FormattedMessage id="Navbar.quotients" />
                </Link>
                <Link
                  href="/404"
                  className={`block px-3 py-2 ${this.isActive("/404")}`}
                >
                  <FormattedMessage id="Navbar.projects" />
                </Link>
                <Link
                  href="/404"
                  className={`block px-3 py-2 ${this.isActive("/404")}`}
                >
                  <FormattedMessage id="Navbar.about" />
                </Link>
                

                <div className="block px-3 py-2">
                  <LangSwitcher />
                </div>

                <div className="flex items-center justify-start space-x-4 px-3 py-2">
                  <Link
                    href="https://mp.weixin.qq.com/mp/homepage?__biz=MzIyMzgyMjY5NQ%3D%3D&hid=1"
                    target="_blank"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                    aria-label="微信公众号"
                  >
                    <i className="ri-wechat-fill text-2xl"></i>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);

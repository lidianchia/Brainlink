import React, { Component } from "react";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

class ScaleCard extends Component {
  render() {
    const { icon, iconColor, iconBg, title, description, tags, link } =
      this.props;

    return (
      <Link href={link} rel="" className="block h-full">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 h-full flex flex-col">
          <div className="flex-grow">
            <div
              className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mb-4`}
            >
              <i className={`${icon} ${iconColor} text-2xl`}></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-xs ${iconColor} ${iconBg}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }
}

export default ScaleCard;

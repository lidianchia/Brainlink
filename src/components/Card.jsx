import React, { Component } from "react";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

class ScaleCard extends Component {
  render() {
    const { icon, iconColor, iconBg, title, description, tags, link } =
      this.props;

    // 检测外部链接 在新标签打开
    const isExternalLink = link && link.startsWith("https://");

    return (
      <Link
        href={link}
        className="block h-full max-w-lg group"
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : ""}
      >
        <div className="bg-card rounded-xl shadow-sm hover:shadow-md border-2 border-transparent hover:border-primary transition-all p-6 h-full flex flex-col ">
          <div className="flex-grow">
            <div
              className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mb-4`}
            >
              <i
                className={`${icon} ${iconColor} text-2xl group-hover:scale-120 transition`}
              ></i>
            </div>
            <div className="text-lg font-semibold text-card-foreground mb-2">
              {title}
            </div>
            <p className="text-muted-foreground text-sm mb-4">{description}</p>
          </div>

          {tags && tags.length > 0 && (
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
          )}
        </div>
      </Link>
    );
  }
}

export default ScaleCard;

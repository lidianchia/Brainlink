import React from "react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import ScaleCard from "@/components/Card";

/**
 * 链接Next.js格式
 * @param {Object} props - 组件属性
 * @param {string} props.href - 链接地址
 * @param {React.ReactNode} props.children - 链接内容
 * @returns {JSX.Element} 根据href类型返回相应的链接组件
 */
function CustomLink({ href, children, ...props }) {
  // 统一的链接样式
  const linkStyle = "text-blue-600 hover:text-blue-800 underline";

  // 处理内部路由链接
  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={linkStyle} {...props}>
        {children}
      </Link>
    );
  }

  // 处理页内锚点链接
  if (href?.startsWith("#")) {
    return (
      <a href={href} className={linkStyle} {...props}>
        {children}
      </a>
    );
  }

  // 处理外部链接
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkStyle}
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * 为常用的HTML元素映射定义样式
 * https://mdxjs.com/table-of-components/
 */
const components = {
  h1: (props) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4" />,
  h2: (props) => <h2 {...props} className="text-2xl font-bold mt-6 mb-3" />,
  h3: (props) => <h3 {...props} className="text-xl font-bold mt-4 mb-2" />,
  h4: (props) => <h4 {...props} className="text-lg font-bold mt-2 mb-1" />,
  h5: (props) => <h5 {...props} className="text-base font-bold mt-1 mb-1" />,
  h6: (props) => <h6 {...props} className="text-sm font-bold mt-1 mb-1" />,
  p: (props) => <p {...props} className="mb-4 leading-relaxed" />,
  li: (props) => <li {...props} className="mb-2" />,
  ul: (props) => <ul {...props} className="list-disc pl-6 mb-4" />,
  ol: (props) => <ol {...props} className="list-decimal pl-6 mb-4" />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className="border-l-4 border-gray-300 pl-4 italic my-4"
    />
  ),
  br: (props) => <br {...props} className="mt-2 mb-2" />,
  code: (props) => (
    <code {...props} className="bg-gray-100 rounded px-1 py-1 mb-4 font-mono" />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="bg-gray-100 rounded p-4 overflow-x-auto mb-4 font-mono"
    />
  ),
  a: CustomLink,
  del: (props) => <del {...props} className="text-gray-500" />,
  sup: (props) => <sup {...props} className="text-xs text-gray-600" />,
  table: (props) => (
    <div className="overflow-x-auto">
      <table
        {...props}
        className="table-auto border-collapse rounded my-6 text-sm"
      />
    </div>
  ),
  thead: (props) => <thead {...props} className="bg-gray-100" />,
  tbody: (props) => <tbody {...props} className="divide-y divide-gray-200" />,
  tr: (props) => (
    <tr {...props} className="hover:bg-gray-50 transition-colors" />
  ),
  th: (props) => (
    <th
      {...props}
      className="px-4 py-3 font-medium text-left text-gray-700 border-b border-gray-200"
    />
  ),
  td: (props) => (
    <td {...props} className="px-4 py-3 border-b border-gray-100" />
  ),
  Card: Card,
};

/**
 * 自定义组件示例
 */
export function Card({ title, description, icon, iconColor, iconBg, link }) {
  return (
    <ScaleCard
      title={title}
      description={description}
      icon={icon}
      iconColor={iconColor}
      iconBg={iconBg}
      link={link}
    />
  );
}

/**
 * MDXRemote
 */
export function CustomMDX(props) {
  return (
    <article className="prose prose-lg max-w-none">
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [],
            format: "mdx",
          },
        }}
      />
    </article>
  );
}

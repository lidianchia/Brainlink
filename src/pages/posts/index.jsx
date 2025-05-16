import Link from "next/link";
import { getPosts } from "@/utils/mdx";
import Layout from "@/components/Layout";
import "remixicon/fonts/remixicon.css";

/**
 * 获取所有博客文章的静态属性
 * @returns {Promise<{props: {posts: Array}}>} 包含所有博客文章数据的props对象
 */
export async function getStaticProps() {
  const posts = await getPosts();
  // 按发布日期降序排序
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.metadata.pubDate).getTime() -
      new Date(a.metadata.pubDate).getTime(),
  );
  return {
    props: {
      posts: sortedPosts,
    },
  };
}

/**
 * 文章列表 页面组件
 * @param {Object} props - 组件属性
 * @param {Array} props.posts - 博客文章列表数据
 * @returns {JSX.Element}
 */
export default function PostsList({ posts }) {
  return (
    <Layout
      title="文章列表 | 青衫 Neuro"
      description="青衫 Neuro 所发布的文章列表"
    >
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* 标题 */}
        <h1 className="text-4xl font-bold mb-3 text-center text-gray-900">
          文章列表
        </h1>

        {/* GitHub 链接 */}
        <div className="flex justify-end mb-8">
          <Link
            href="https://github.com/ittuann/qingshanasd/blob/main/src/pages/posts/"
            target="_blank"
            className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors mr-4"
          >
            <i className="ri-github-fill mr-1"></i>View on GitHub
          </Link>
          <Link
            href="https://github.com/search?q=repo%3Aittuann%2Fqingshanasd+path%3A%2F%5Esrc%5C%2Fpages%5C%2Fposts%5C%2F%2F+&type=code"
            target="_blank"
            className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors mr-4"
          >
            <i className="ri-menu-search-line mr-1"></i>Search on GitHub
          </Link>
        </div>

        {/* 文章列表容器 */}
        <div className="space-y-8">
          {/* 遍历文章数组，渲染每篇文章的预览卡片 */}
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1"
            >
              {/* 文章链接 */}
              <Link href={`/posts/${post.slug}`} className="block group">
                {/* 文章标题 */}
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {post.metadata.title}
                </h2>

                {/* 文章描述 */}
                <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">
                  {post.metadata.description}
                </p>

                {/* 文章日期 */}
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <i className="ri-time-line"></i>
                      {post.metadata.pubDate}
                    </span>
                    {post.metadata.modDate && (
                      <span className="flex items-center gap-1">
                        <i className="ri-history-line"></i>
                        {post.metadata.modDate}
                      </span>
                    )}
                  </p>
                  <span className="text-primary text-sm group-hover:translate-x-1 transition-transform duration-300 hidden group-hover:inline-flex items-center">
                    阅读全文 <i className="ri-arrow-right-line ml-1"></i>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <Link href="/rss.xml" target="_blank" className="mr-4">
            <i className="ri-rss-fill mr-1"></i>RSS
          </Link>
          <Link href="/sitemap.xml" target="_blank" className="mr-4">
            <i className="ri-gps-line mr-1"></i>Sitemap
          </Link>
          <Link href="/atom.xml" target="_blank" className="mr-4">
            <i className="ri-reactjs-line mr-1"></i>Atom
          </Link>
        </div>
      </main>
    </Layout>
  );
}

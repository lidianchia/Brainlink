const fs = require("fs");
const path = require("path");
const sitemap = require("./gen-sitemap");
const rssModule = require("./gen-rss");

const BASE_URL = sitemap.BASE_URL;
const SITE_TITLE = rssModule.SITE_TITLE;
const SITE_DESCRIPTION = rssModule.SITE_DESCRIPTION;

/**
 * 生成 Atom feed XML 文件
 */
async function generateAtom() {
  try {
    console.log("---Generating Atom---");

    const postsDir = path.join(process.cwd(), "src", "pages", "posts");
    const posts = rssModule.getBlogPostsData(postsDir);

    console.log(`Collect ${posts.length} blog posts`);

    const updated = new Date().toISOString();

    const atom = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${SITE_TITLE}</title>
  <subtitle>${SITE_DESCRIPTION}</subtitle>
  <link href="${BASE_URL}/atom.xml" rel="self" type="application/atom+xml"/>
  <link href="${BASE_URL}/"/>
  <updated>${updated}</updated>
  <id>${BASE_URL}/</id>
  <author><name>${SITE_TITLE}</name></author>
${posts
  .map(
    (post) => `  <entry>
    <title>${rssModule.escapeXML(post.title)}</title>
    <link href="${post.link}"/>
    <id>${post.link}</id>
    <updated>${new Date(post.pubDate).toISOString()}</updated>
    <summary>${rssModule.escapeXML(post.description)}</summary>
  </entry>`,
  )
  .join("\n")}
</feed>`;

    sitemap.writeOutputFiles(atom, "atom.xml");
  } catch (error) {
    console.error("Err Atom feed Generating:", error);
  }
}

if (require.main === module) {
  generateAtom();
}

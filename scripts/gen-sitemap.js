const fs = require("fs");
const path = require("path");

/**
 * 网站基础URL
 * @constant {string}
 */
const BASE_URL = "https://qingshanasd.cn";

/**
 * 扫描目录获取文件
 * @param {string} dir - 要扫描的目录路径
 * @param {string[]} fileList - 已收集的文件列表（递归用）
 * @param {string[]} extensions - 要筛选的文件扩展名
 * @returns {string[]} 收集到的文件路径列表
 */
function getAllFiles(dir, fileList = [], extensions = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList, extensions);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.length === 0 || extensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * 转换文件路径为网站URL路径
 * @param {string} filePath - 相对于项目根目录的文件路径
 * @returns {string} 格式化的URL路径
 */
function filePathToUrl(filePath) {
  // 标准化路径（处理Windows的反斜杠）
  const normalizedPath = filePath.replace(/\\/g, "/");

  // 移除src/pages前缀和文件扩展名
  let urlPath = normalizedPath
    .replace(/^src\/pages\//, "")
    .replace(/\.(jsx|js|tsx|ts|mdx)$/, "");

  // 处理index文件
  if (urlPath.endsWith("/index")) {
    urlPath = urlPath.replace(/\/index$/, "");
  } else if (urlPath === "index") {
    urlPath = "";
  }

  // 构建完整URL
  return `${BASE_URL}/${urlPath}/`.replace(/\/\/$/, "/");
}

/**
 * 确保输出目录存在
 * @param {string} dirPath - 目录路径
 */
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Create path: ${dirPath}`);
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * 写入文件到指定目录
 * @param {string} content - 要写入的内容
 * @param {string} fileName - 文件名
 */
function writeOutputFiles(content, fileName) {
  // 创建 dist 输出目录（如果不存在）
  const distPath = path.join(process.cwd(), "dist");
  ensureDirectoryExists(distPath);

  // 写入文件到 dist 目录
  const distFilePath = path.join(distPath, fileName);
  fs.writeFileSync(distFilePath, content);
  console.log(`File successfully generated: ${distFilePath}`);

  /*
  // 创建 public 输出目录（如果不存在）
  const publicPath = path.join(process.cwd(), "public");
  ensureDirectoryExists(publicPath);

  // 写入文件到 public 目录
  const publicFilePath = path.join(publicPath, fileName);
  fs.writeFileSync(publicFilePath, content);
  console.log(`File successfully generated: ${publicFilePath}`);
  */
}

/**
 * 判断文件是否应该被忽略
 * @param {string} filePath - 文件路径
 * @returns {boolean} 如果文件应该被忽略则返回true，否则返回false
 */
function shouldIgnoreFile(filePath) {
  const normalizedPath = filePath.replace(/\\/g, "/");

  // 忽略规则
  const ignorePatterns = [
    /src\/pages\/_[^/]*\.(jsx|js|tsx|ts)$/, // 忽略Next.js特殊文件如_app.jsx, _document.jsx
    /src\/pages\/api\/.+\.(jsx|js|tsx|ts)$/, // 忽略API路由
    /src\/pages\/.*\/\[[^\]]*\].*\.(jsx|js|tsx|ts)$/, // 忽略动态路由
    /src\/pages\/quotients\/index\.jsx$/, // 忽略特定页面
    /src\/pages\/404\.jsx$/, // 忽略404页面
  ];

  return ignorePatterns.some((pattern) => pattern.test(normalizedPath));
}

/**
 * 生成 Sitemap
 * @async
 * @returns {Promise<void>} 无返回值，生成的sitemap被写入文件
 */
async function generateSitemap() {
  try {
    console.log("---Generating sitemap.xml---");

    // 获取所有页面文件
    const pagesDir = path.join(process.cwd(), "src", "pages");
    const extensions = [".jsx", ".js", ".tsx", ".ts", ".mdx"];
    const allFiles = getAllFiles(pagesDir, [], extensions);

    // 过滤掉不需要的文件
    const pages = allFiles
      .filter((file) => !shouldIgnoreFile(file))
      .map((file) => path.relative(process.cwd(), file).replace(/\\/g, "/"));
    const excludedPages = allFiles.filter((file) => shouldIgnoreFile(file));

    console.log(
      `Collect ${pages.length} page files. Exclude ${excludedPages.length} page files.`,
    );

    // 将页面文件路径转换为URL路径
    const urls = pages.map((page) => filePathToUrl(page));

    // 生成sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

    // 写入生成的sitemap.xml文件
    writeOutputFiles(sitemap, "sitemap.xml");
  } catch (error) {
    console.error("Err Sitemap Generating:", error);
  }
}

// 导出公共函数供其他模块使用
module.exports = {
  BASE_URL,
  getAllFiles,
  shouldIgnoreFile,
  filePathToUrl,
  writeOutputFiles,
};

if (require.main === module) {
  generateSitemap();
}

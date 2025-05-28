import fs from "fs/promises";
import path from "path";

/**
 * 解析 MDX 文件的前置信息 frontmatter
 * @param {string} fileContent - MDX 文件的原始内容
 * @returns {{metadata: Object}} 前置信息的对象
 */
function parseFrontmatter(fileContent) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match[1];
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata = {};
  // const content = fileContent.replace(frontmatterRegex, "").trim();

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();

    value = value.replace(/^['"](.*)['"]$/, "$1");

    metadata[key.trim()] = value;
  });

  return { metadata };
}

/**
 * 获取指定目录下所有 .mdx 文件
 * @param {string} dir - 要扫描的目录路径
 * @returns {Promise<string[]>} 所有 .mdx 文件名的数组
 */
async function getMDXFiles(dir) {
  const files = await fs.readdir(dir);
  return files.filter((file) => path.extname(file) === ".mdx");
}

/**
 * 读取并解析 MDX 文件内容
 * @param {string} filePath - MDX 文件的完整路径
 * @returns {Promise<{metadata: Object}>} 解析后的前置信息的对象
 */
async function readMDXFile(filePath) {
  const rawContent = await fs.readFile(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

/**
 * 获取指定目录下所有 MDX 文件的数据
 * @param {string} dir - 要扫描的目录路径
 * @returns {Promise<Array<{metadata: Object, slug: string}>>} 包含文章元数据和slug的数组
 */
async function getMDXData(dir) {
  const mdxFiles = await getMDXFiles(dir);

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const { metadata } = await readMDXFile(path.join(dir.toString(), file));
      const slug = path.basename(file, path.extname(file));

      return {
        metadata,
        slug,
      };
    }),
  );

  return posts;
}

/**
 * 获取所有博客文章的数据
 * @returns {Promise<Array<{metadata: Object, slug: string}>>} 包含文章元数据和slug的数组
 */
export async function getPosts() {
  const posts = await getMDXData(
    path.join(process.cwd(), "src", "pages", "posts"),
  );
  return posts;
}

import logger from "@/logger";
import html from "remark-html";
import { remark } from "remark"; 
import styles from "./page.module.css";
import { CardPost } from "@/components/CardPost";

async function getPostBySlug(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url).catch((error) => {
    logger.error("Erro de rede: " + error.message);
    return null;
  });
  if (!response || !response.ok) {
    logger.error("Problema ao obter o post");
    return [];
  }
  logger.info('Post com slug "' + slug + '" obtido com sucesso');
  const data = await response.json();
  if (data.length === 0) {
    logger.error('Nenhum post encontrado com slug "' + slug + '"');
    return {};
  }
  const post = data[0];
  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;
  return data[0];
}

async function pagePost({ params }) {
  const post = await getPostBySlug(params.slug);
    return (<div>
        <CardPost post={post} highlight />
        <h3 className={styles.subtitle}>Código:</h3>
        <div className={styles.code}>
            <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </div>
    </div>);
}

export default pagePost;

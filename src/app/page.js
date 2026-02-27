import logger from "@/logger";
import { CardPost } from "../components/CardPost";
import styles from "./page.module.css";
import Link from "next/link";

async function getAllPosts (pageNumber) {
  const url = `http://localhost:3042/posts?_page=${pageNumber}&_per_page=6`;
  const response = await fetch(url).catch(error => {
    logger.error('Erro de rede: ' + error.message);
    return null;
  });
  if (!response || !response.ok) {
    logger.error('Problema ao obter os posts');
    return [];
  };
  logger.info('Posts obtidos com sucesso');
  return response.json();
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next} = await getAllPosts(currentPage);
  return (
    <main className={styles.grid}>
      {posts.map(post => <CardPost key={post.id} post={post}/>)}
      <div className={styles.pagination}>
        {prev && <Link href={`/?page=${prev}`}>Página Anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima Página</Link>}
      </div>
    </main>
  );
}

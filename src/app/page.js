import logger from "@/logger";
import styles from "./page.module.css";
import { CardPost } from "@/components/CardPost";
import Link from "next/link";

export default async function Home({ searchParams }) {
  async function getAllPosts(page, searchQuery) {
    try {
      const where = {};

      if (searchQuery) {
        where.title = {
          contains: searchQuery,
          mode: "insensitive",
        };
      }

 
      const perPage = 6;
      const skip = (page - 1) * perPage;
      const totalPosts = await db.post.count({ where });

      logger.info(`Total de posts encontrados: ${totalPosts} para a consulta: "${searchQuery}"`);
      logger.info(`Total de posts encontrados: ${totalPosts} para a consulta: "${searchQuery}"`);

      const totalPages = Math.ceil(totalPosts / perPage);

      const prev = page > 1 ? page - 1 : null;
      const next = page < totalPages ? page + 1 : null;

      const posts = await db.post.findMany({
        take: perPage,
        skip: skip,
        where,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          author: true,
        },
      });
      
      logger.info(`Posts encontrados: ${posts.length} para a página: ${page}`);
      return { data: posts, prev, next };
    } catch (error) {
      logger.error("Erro ao obter os posts: " + error.message);
      return { data: [], prev: null, next: null };
    }
  }
  const pageParam = Array.isArray(searchParams?.page)
    ? searchParams.page[0]
    : searchParams?.page;

  const currentPage = parseInt(pageParam || "1", 10);

  const searchQuery = Array.isArray(searchParams?.q)
    ? searchParams.q[0]
    : searchParams?.q || "";

  const {
    data: posts = [],
    prev,
    next,
  } = await getAllPosts(currentPage, searchQuery);

  return (
    <main className={styles.grid}>
      {posts?.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}

      <div className={styles.pagination}>
        {prev && (
          <Link href={{ pathname: "/", query: { page: prev, q: searchQuery } }}>
            Página Anterior
          </Link>
        )}

        {next && (
          <Link href={{ pathname: "/", query: { page: next, q: searchQuery } }}>
            Próxima Página
          </Link>
        )}
      </div>
    </main>
  );
}

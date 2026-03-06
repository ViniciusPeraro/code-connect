import logger from "@/logger";
import { CardPost } from "../components/CardPost";
import styles from "./page.module.css";
import Link from "next/link";
import db from "../../prisma/db";

async function getAllPosts (page, searchQuery) {
  try {
    const where = {}

    if (searchQuery) {
      where.title = { 
        contains: searchQuery, mode: 'insensitive' };
    }

    console.log('Obtendo posts para a página:', page, 'com busca:', searchQuery);
    const perPage = 6;
    const skip = (page - 1) * perPage;
    const totalPosts = await db.post.count({ where });
    const totalPages = Math.ceil(totalPosts / perPage);

    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;

    const posts = await db.post.findMany({
      take: perPage,
      skip: skip,
      where,
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        author: true
      }
    });
    return { data: posts, prev, next };
  } catch (error) {
    logger.error('Erro ao obter os posts: ' + error.message);
    return { data: [], prev: null, next: null };
  }
}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || 1);
  const searchQuery = searchParams?.q || '';
  const { data: posts, prev, next} = await getAllPosts(currentPage, searchQuery);
  return (
    <main className={styles.grid}>
      {posts.map(post => <CardPost key={post.id} post={post}/>)}
      <div className={styles.pagination}>
        {prev && <Link href={{pathname: '/', query: {page: prev, q: searchQuery}}}>Página Anterior</Link>}
        {next && <Link href={{pathname: '/', query: {page: next, q: searchQuery}}}>Próxima Página</Link>}
      </div>
    </main>
  );
}
